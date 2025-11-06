import { Typography, Card, CardContent, Grid, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import heroServices from "../assets/hero-services.svg";

export default function Services() {
  return (
    <main>
      {/* Hero */}
  <Box sx={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', py: { xs: 6, md: 12 }, textAlign: 'center', minHeight: { xs: 420, md: 520 }, backgroundImage: `url(${heroServices})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Container maxWidth="lg">
          <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: 'var(--hero-h1-xs)', md: 'var(--hero-h1-md)' }, fontWeight: 900, mb: 2 }}
                    >
                        OUR CORE SERVICES
                    </Typography>
         
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, opacity: 0.95 }}>Cyber Security • Digital Transformation • Infrastructure & Technology</Typography>
          <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto' }}>GUE Cyber provides information security and digital transformation services focused on protecting data, systems and infrastructure for MSMEs and enterprises. We perform proactive assessments, harden infrastructure, enable secure migrations and prepare teams for incident response.</Typography>
        </Container>
      </Box>

      {/* Detailed Services */}
  <Box sx={{ py: { xs: 6, md: 8 }, background: 'var(--section-bg)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {/** Cyber / InfoSec service cards */}
            <Grid item xs={12} md={6} id="assessments">
              <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: { xs: 'stretch', md: 'center' }, textAlign: { xs: 'left', md: 'center' }, boxShadow: 3, borderRadius: 2, background: 'var(--card-bg)' }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 1, fontSize: { xs: '1.05rem', md: '1.25rem' }, color: 'var(--link-color)' }}>Security Assessments & Penetration Testing</Typography>
                  <Typography variant="body1" sx={{ mb: 2, maxWidth: { md: 520 }, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Comprehensive vulnerability assessments and controlled penetration tests against networks, applications and cloud infrastructure to identify and prioritise remediation.</Typography>
                  <Typography variant="subtitle2" fontWeight={700} sx={{ mt: 2, mb: 1, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Deliverables</Typography>
                  <Box component="ul" sx={{ mt: 1, pl: 3, color: 'var(--hero-text)', fontSize: { xs: '0.9rem', md: '0.98rem' }, listStyleType: 'disc', '& li': { marginBottom: 0.6 } }}>
                    <li>External & internal vulnerability scans</li>
                    <li>Application penetration testing (web & API)</li>
                    <li>Cloud configuration reviews</li>
                    <li>Remediation roadmap and advisory</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} id="infrastructure">
              <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: { xs: 'stretch', md: 'center' }, textAlign: { xs: 'left', md: 'center' }, boxShadow: 3, borderRadius: 2, background: 'var(--card-bg)' }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 1, fontSize: { xs: '1.05rem', md: '1.25rem' }, color: 'var(--link-color)' }}>Infrastructure Hardening & Monitoring</Typography>
                  <Typography variant="body1" sx={{ mb: 2, maxWidth: { md: 520 }, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Secure architecture design, network segmentation, patching strategies and deployment of monitoring/alerting (SIEM/EDR) to detect and slow attackers.</Typography>
                  <Typography variant="subtitle2" fontWeight={700} sx={{ mt: 2, mb: 1, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Deliverables</Typography>
                  <Box component="ul" sx={{ mt: 1, pl: 3, color: 'var(--hero-text)', fontSize: { xs: '0.9rem', md: '0.98rem' }, listStyleType: 'disc', '& li': { marginBottom: 0.6 } }}>
                    <li>Network segmentation & firewall rules</li>
                    <li>Endpoint hardening & EDR configuration</li>
                    <li>Logging, monitoring and alerting (SIEM)</li>
                    <li>Backup strategy & secure recovery planning</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} id="migration">
              <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: { xs: 'stretch', md: 'center' }, textAlign: { xs: 'left', md: 'center' }, boxShadow: 3, borderRadius: 2, background: 'var(--card-bg)' }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 1, fontSize: { xs: '1.05rem', md: '1.25rem' }, color: 'var(--link-color)' }}>Secure Migration & Cloud Security</Typography>
                  <Typography variant="body1" sx={{ mb: 2, maxWidth: { md: 520 }, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Assisting organisations to migrate systems to cloud or hybrid infrastructure with security-by-design, identity & access management and encrypted communications.</Typography>
                  <Typography variant="subtitle2" fontWeight={700} sx={{ mt: 2, mb: 1, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Deliverables</Typography>
                  <Box component="ul" sx={{ mt: 1, pl: 3, color: 'var(--hero-text)', fontSize: { xs: '0.9rem', md: '0.98rem' }, listStyleType: 'disc', '& li': { marginBottom: 0.6 } }}>
                    <li>Secure cloud architecture and IAM design</li>
                    <li>Encrypted communications and key management</li>
                    <li>Migration playbooks with rollback plans</li>
                    <li>Compliance baseline mapping (where required)</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} id="training">
              <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: { xs: 'stretch', md: 'center' }, textAlign: { xs: 'left', md: 'center' }, boxShadow: 3, borderRadius: 2, background: 'var(--card-bg)' }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 1, fontSize: { xs: '1.05rem', md: '1.25rem' }, color: 'var(--link-color)' }}>Incident Response & Training</Typography>
                  <Typography variant="body1" sx={{ mb: 2, maxWidth: { md: 520 }, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Preparedness and response services including tabletop exercises, runbooks, incident response retainer options and hands-on training to improve detection and recovery time.</Typography>
                  <Typography variant="subtitle2" fontWeight={700} sx={{ mt: 2, mb: 1, color: 'var(--hero-text)', fontSize: { xs: '0.95rem', md: '1rem' } }}>Deliverables</Typography>
                  <Box component="ul" sx={{ mt: 1, pl: 3, color: 'var(--hero-text)', fontSize: { xs: '0.9rem', md: '0.98rem' }, listStyleType: 'disc', '& li': { marginBottom: 0.6 } }}>
                    <li>Incident response plans & playbooks</li>
                    <li>Tabletop exercises & simulated incident drills</li>
                    <li>Security awareness & role-based training</li>
                    <li>Retainer & escalation support options</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={Link} to="/contact" variant="contained" sx={{ textTransform: 'none', px: 4, py: 1.5, width: { xs: '100%', sm: 'auto' } }}>Talk to an Engineer</Button>
          </Box>
        </Container>
      </Box>
    </main>
  );
}