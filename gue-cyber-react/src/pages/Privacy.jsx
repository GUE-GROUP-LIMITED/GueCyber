import { Typography, Card, CardContent, Grid, Box, Divider, Chip, Button } from "@mui/material";
import heroTerms from "../assets/hero-terms.svg";
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Privacy() {
  return (
    <main>
      {/* Hero Section */}
      <Box sx={{
        background: 'var(--hero-bg)',
        color: 'var(--hero-text)',
        py: 8,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${heroTerms})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        {/* Abstract background shapes */}
        <div style={{
          position: "absolute",
          top: -50,
          left: -80,
          width: 300,
          height: 300,
          background: "linear-gradient(135deg, #43a047 0%, #1976d2 100%)",
          opacity: 0.08,
          borderRadius: "50%",
          filter: "blur(6px)"
        }} />
        <div style={{
          position: "absolute",
          bottom: -70,
          right: -70,
          width: 250,
          height: 250,
          background: "linear-gradient(135deg, #1976d2 0%, #43a047 100%)",
          opacity: 0.06,
          borderRadius: "50%",
          filter: "blur(6px)"
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" fontWeight={800} letterSpacing={2} mb={2} sx={{ fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Privacy <span style={{ color: 'var(--accent-1)' }}>Policy</span>
          </Typography>
          <Typography variant="h5" fontWeight={500} color="var(--accent-1)" mb={3} sx={{ letterSpacing: 0.5 }}>
            Privacy Above Profits
          </Typography>
          <Typography variant="body1" sx={{
            maxWidth: 820,
            mx: 'auto',
            mb: 4,
            color: 'var(--hero-text)',
            fontSize: '1.06rem',
            lineHeight: 1.6
          }}>
            GUE Cyber Limited is headquartered in Nigeria and transacts with individuals and organisations worldwide. We prioritise your privacy. We do not use cookies or other tracking technologies on this website. We only collect personal information you voluntarily submit via our contact form (for example: name, email, organisation and message) and use it to respond to your enquiry or provide requested services.
          </Typography>
          <Chip label="No cookies used" sx={{ bgcolor: 'rgba(255,255,255,0.04)', color: 'var(--chip-text)', fontWeight: 600, fontSize: '0.85rem', px: 2, py: 0.8 }} icon={<PrivacyTipIcon sx={{ color: 'var(--chip-text)' }} />} />

          {/* At a glance + Table of contents */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ bgcolor: 'rgba(0,0,0,0.18)', color: 'var(--chip-text)', px: 2, py: 1, boxShadow: 2 }}>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>At a glance</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)' }}>
                    • Headquartered in Nigeria
                    • No cookies or tracking
                    • We only collect contact-form submissions
                    • Governing law: Nigeria (DPA). GDPR respected where applicable
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Contents</Typography>
                  <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mt: 0.5 }}>
                    <a href="#information" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Information we collect</a>
                    <a href="#use" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>How we use information</a>
                    <a href="#rights" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Your rights</a>
                    <a href="#governing" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Governing law</a>
                    <a href="#contact" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Contact</a>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </div>
      </Box>

      {/* Content Section */}
  <Box sx={{ py: 6, background: 'var(--section-bg)' }}>
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
          {/* Introduction Card */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PrivacyTipIcon />
                  Our Commitment to Privacy
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>
                  Your privacy is important to us. This privacy policy outlines how GUE Cyber collects, uses, and protects your personal information in compliance with applicable regulations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Information We Collect */}
          <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                      <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                        <DataUsageIcon />
                        Information We Collect
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.92)' }}>
                        We do not use cookies or tracking technologies. We only collect personal information you voluntarily provide via our contact form.
                      </Typography>
                        <Box sx={{ '& > div': { mb: 2, p: 2, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: 'var(--accent-1)' } }}>
                        <div>
                          <Typography variant="h6" fontWeight={600} sx={{ color: 'rgba(255,255,255,0.92)' }} gutterBottom>Contact form information</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                            Information you choose to provide when contacting us (for example: name, email address, organisation, and your message).
                          </Typography>
                        </div>
                      </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* How We Use Information */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <SettingsIcon />
                  How We Use Your Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.92)' }}>
                  We use the information you provide only to respond to your enquiry and to deliver the services you request. We do not sell, trade, or share contact-form submissions for marketing or profiling.
                </Typography>
                  <Box sx={{ '& > div': { mb: 2, p: 2, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: 'var(--accent-2)' } }}>
                  <div>
                    <Typography variant="h6" fontWeight={600} sx={{ color: 'rgba(255,255,255,0.92)' }} gutterBottom>Responding to enquiries</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                      We use your contact details to reply to messages, schedule calls, and provide requested support or proposals.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" fontWeight={600} sx={{ color: 'rgba(255,255,255,0.92)' }} gutterBottom>Service delivery & legal compliance</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                      We may process information where necessary to comply with Nigerian law, contractual obligations, or other legitimate purposes connected to providing services.
                    </Typography>
                  </div>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ color: 'rgba(255,255,255,0.92)', mb: 1 }}>Governing law</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                    This policy is governed by the laws of Nigeria (including the Nigeria Data Protection Act and related regulations). If you are located in the European Union/EEA, we will also respect your rights under the GDPR where applicable.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* GDPR Rights */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <AccountBalanceIcon />
                  Your Rights Under GDPR
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem' }}>
                  As a data subject, you have the following rights under GDPR:
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { title: "Right to Access", desc: "Request copies of your personal data", icon: "visibility" },
                    { title: "Right to Rectification", desc: "Correct inaccurate or incomplete information", icon: "edit" },
                    { title: "Right to Erasure", desc: "Request deletion of your personal data", icon: "delete" },
                    { title: "Right to Restrict Processing", desc: "Limit how we process your data", icon: "pause_circle" },
                    { title: "Right to Data Portability", desc: "Transfer your data to another organization", icon: "import_export" },
                    { title: "Right to Object", desc: "Object to our processing of your data", icon: "block" }
                  ].map((right, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Box sx={{
                        p: 3,
                        bgcolor: 'var(--card-bg)',
                        borderRadius: 3,
                        borderLeft: 4,
                        borderLeftColor: 'var(--accent-1)',
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start'
                      }}>
                        <Box sx={{ color: 'var(--accent-1)', fontSize: 28, mt: 0.3 }}>{/* icon placeholder */}</Box>
                        <Box>
                          <Typography variant="h6" fontWeight={600} sx={{ color: 'rgba(255,255,255,0.92)' }} gutterBottom>
                            {right.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
                            {right.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* CTA */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                  Need help with your data?
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.92)', mb: 3 }}>Contact our data protection team for requests or concerns. You can also email us at <a href="mailto:info@guecyber.com" style={{ color: 'var(--link-color)' }}>info@guecyber.com</a>.</Typography>
                <Button component="a" href="/contact" variant="contained" sx={{ background: 'var(--btn-grad)', color: 'var(--chip-text)', textTransform: 'none' }}>Contact Data Team</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
