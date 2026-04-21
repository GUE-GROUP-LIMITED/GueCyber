const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type AckPayload = {
  fullName?: string;
  email?: string;
  jobTitle?: string;
  submittedAt?: string;
};

function toSafeText(value: string | undefined, fallback: string): string {
  return value && value.trim() ? value.trim() : fallback;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const emailJsServiceId = Deno.env.get("EMAILJS_SERVICE_ID");
    const emailJsTemplateId = Deno.env.get("EMAILJS_ACK_TEMPLATE_ID");
    const emailJsPublicKey = Deno.env.get("EMAILJS_PUBLIC_KEY");
    const companyName = Deno.env.get("ACK_COMPANY_NAME") || "Gue Cyber";

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      return new Response(JSON.stringify({ error: "Missing EmailJS edge-function secrets." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as AckPayload;
    const candidateName = toSafeText(body.fullName, "Candidate");
    const candidateEmail = toSafeText(body.email, "");
    const jobTitle = toSafeText(body.jobTitle, "the selected role");
    const submittedAt = toSafeText(body.submittedAt, new Date().toISOString());

    if (!candidateEmail) {
      return new Response(JSON.stringify({ error: "Candidate email is required." }), {
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
          to_email: candidateEmail,
          candidate_name: candidateName,
          job_title: jobTitle,
          company_name: companyName,
          submitted_at: submittedAt,
          hr_email: "hr@guecyber.com",
        },
      }),
    });

    if (!emailJsResponse.ok) {
      const responseText = await emailJsResponse.text();
      return new Response(JSON.stringify({ error: "Failed to send acknowledgment email.", details: responseText }), {
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
