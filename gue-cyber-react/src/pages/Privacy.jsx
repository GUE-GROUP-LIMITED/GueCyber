import { Typography, Box, Container } from "@mui/material";

export default function Privacy() {
  return (
    <main>
      <Box sx={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', py: 8, textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={800} mb={2} sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>Privacy Policy</Typography>
        <Typography variant="h5" fontWeight={500} color="var(--accent-1)" mb={3}>Clear. Minimal. Privacy-first.</Typography>
        <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>
          At GUE Cyber Limited (headquartered in Nigeria) we respect your privacy. This page explains what information we collect, how we use it, and the choices you have. Short version: we do not use cookies or tracking tools, and we only collect data you actively provide via our contact form.
        </Typography>
      </Box>

      <Container maxWidth="md" sx={{ py: 6, color: 'var(--text-primary)', lineHeight: 1.8 }}>
        <section id="at-a-glance" style={{ marginBottom: 24 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>At a glance</Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li>HQ: Nigeria — we operate globally and comply with Nigerian data protection law.</li>
            <li>No cookies or tracking scripts are used on this site.</li>
            <li>We only collect information you voluntarily provide via our contact form (name, email, organisation, message).</li>
            <li>We keep contact-form submissions only as long as needed to respond and fulfil requests.</li>
          </Box>
        </section>

        <section id="information-we-collect" style={{ marginBottom: 24 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Information we collect</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            We only collect what you choose to provide via the contact form: name, email, organisation (optional) and the message you send.
          </Typography>
          <Typography variant="body2" color="var(--muted-text)">We do not collect analytics, advertising identifiers, device fingerprints, or location data.</Typography>
        </section>

        <section id="how-we-use-data" style={{ marginBottom: 24 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>How we use your data</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            We use contact-form details to reply to your enquiry, to provide quotes or requested services, and to comply with legal obligations. We never sell or rent your contact information.
          </Typography>
          <Typography variant="body2" color="var(--muted-text)">Processing is based on legitimate interest (service delivery) or your consent when you contact us.</Typography>
        </section>

        <section id="sharing" style={{ marginBottom: 24 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Sharing and third parties</Typography>
          <Typography variant="body1">
            We do not share contact-form submissions for marketing or profiling. We may share data with service providers where necessary to respond to your request (for example, email providers). Any third party we use is contractually required to protect your data.
          </Typography>
        </section>

        <section id="retention" style={{ marginBottom: 24 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Data retention</Typography>
          <Typography variant="body1">
            We retain contact-form data only as long as necessary to respond to your enquiry and to meet legal and accounting obligations. If you want your data deleted sooner, contact us at info@guecyber.com.
          </Typography>
        </section>

        <section id="rights" style={{ marginBottom: 24 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Your rights</Typography>
          <Typography variant="body1">
            If you are in the EU/EEA you have rights under the GDPR (access, rectification, erasure, portability, restriction, objection). To exercise any right, contact us at info@guecyber.com and we will respond promptly.
          </Typography>
        </section>

        <section id="international" style={{ marginBottom: 24 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>International transfers</Typography>
          <Typography variant="body1">We operate globally. When we transfer data internationally we use standard contractual protections or other lawful mechanisms where required by law.</Typography>
        </section>

        <section id="contact" style={{ marginBottom: 8 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>Contact</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>Questions or requests? Email us at <a href="mailto:info@guecyber.com" style={{ color: 'var(--link-color)' }}>info@guecyber.com</a>.</Typography>
          <Typography variant="body2" color="var(--muted-text)">This policy is governed by the laws of Nigeria. If you are in the EU/EEA we will respect GDPR rights where applicable.</Typography>
        </section>
      </Container>
    </main>
  );
}
