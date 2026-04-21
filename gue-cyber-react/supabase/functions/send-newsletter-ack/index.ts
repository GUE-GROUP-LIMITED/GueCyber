const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type NewsletterAckPayload = {
  email?: string;
  subscribedAt?: string;
};

function safeText(value: string | undefined, fallback: string): string {
  return value && value.trim() ? value.trim() : fallback;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const emailJsServiceId = Deno.env.get("EMAILJS_SERVICE_ID");
    const emailJsTemplateId = Deno.env.get("EMAILJS_NEWSLETTER_TEMPLATE_ID");
    const emailJsPublicKey = Deno.env.get("EMAILJS_PUBLIC_KEY");
    const companyName = Deno.env.get("ACK_COMPANY_NAME") || "Gue Cyber";

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      return new Response(JSON.stringify({ error: "Missing EmailJS newsletter acknowledgment secrets." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as NewsletterAckPayload;
    const subscriberEmail = safeText(body.email, "");
    const subscribedAt = safeText(body.subscribedAt, new Date().toISOString());

    if (!subscriberEmail) {
      return new Response(JSON.stringify({ error: "Subscriber email is required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsPublicKey,
        template_params: {
          to_email: subscriberEmail,
          company_name: companyName,
          subscribed_at: subscribedAt,
          hr_email: "hr@guecyber.com",
        },
      }),
    });

    if (!emailJsResponse.ok) {
      const details = await emailJsResponse.text();
      return new Response(JSON.stringify({ error: "Failed to send newsletter acknowledgment email.", details }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
