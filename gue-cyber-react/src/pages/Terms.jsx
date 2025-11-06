import { Typography, Card, CardContent, Grid, Box, Divider, Chip, Alert, Button } from "@mui/material";
import heroTerms from "../assets/hero-terms.svg";
import GavelIcon from '@mui/icons-material/Gavel';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import UpdateIcon from '@mui/icons-material/Update';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RuleIcon from '@mui/icons-material/Rule';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SecurityIcon from '@mui/icons-material/Security';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function Terms() {
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
            Terms <span style={{ color: 'var(--accent-1)' }}>of Service</span>
          </Typography>
          <Typography variant="h5" fontWeight={500} color="var(--accent-1)" mb={3} sx={{ letterSpacing: 0.5 }}>
            Transparency at Its Core
          </Typography>
          <Typography variant="body1" sx={{
            maxWidth: 820,
            mx: 'auto',
            mb: 4,
            color: 'var(--hero-text)',
            fontSize: '1.08rem',
            lineHeight: 1.6
          }}>
            At <b>GUE Cyber Limited</b> we value transparency and integrity. Our Terms of Service are designed to protect your rights and ensure a positive, secure experience for all users. We are headquartered in Nigeria and transact with individuals and organisations worldwide.
          </Typography>
          <Chip label="Fair & Transparent" sx={{ bgcolor: 'var(--accent-2)', color: 'var(--chip-text)', fontWeight: 600, fontSize: '0.9rem', px: 2, py: 1 }} icon={<GavelIcon sx={{ color: 'var(--chip-text)' }} />} />

          {/* At a glance + TOC */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ bgcolor: 'rgba(0,0,0,0.18)', color: 'var(--chip-text)', px: 2, py: 1, boxShadow: 2 }}>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>At a glance</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)' }}>
                    • Headquartered in Nigeria
                    • Clear acceptance and obligations
                    • Contact for questions: info@guecyber.com
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Contents</Typography>
                  <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mt: 0.5 }}>
                    <a href="#acceptance" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Acceptance</a>
                    <a href="#accounts" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Accounts</a>
                    <a href="#ip" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Intellectual property</a>
                    <a href="#liability" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Liability</a>
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
                <Alert severity="info" sx={{ mb: 3, fontSize: '1rem' }}>
                  <Typography variant="body1" fontWeight={500}>
                      Welcome to GUE Cyber! By accessing or using our services, you agree to comply with and be bound by these terms.
                    </Typography>
                </Alert>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>
                  These Terms of Service govern your use of our website and services. If you do not agree with any part of these terms, you must not use our services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Acceptance & Changes */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <HowToRegIcon />
                  Acceptance of Terms
                </Typography>
                <Box sx={{ mb: 4, p: 3, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: 'var(--accent-1)' }}>
                  <Typography variant="body1" color="rgba(255,255,255,0.92)" sx={{ lineHeight: 1.7 }}>
                    By using our website, you confirm that you are at least <b>18 years old</b> or have the consent of a parent or guardian. If you are using the services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
                  </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <UpdateIcon />
                  Changes to Terms
                </Typography>
                <Box sx={{ p: 3, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: '#43a047' }}>
                  <Typography variant="body1" color="#555" sx={{ lineHeight: 1.7 }}>
                    We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the services after any changes constitutes your acceptance of the new terms.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* User Accounts & Obligations */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <AccountCircleIcon />
                  User Accounts
                </Typography>
                <Box sx={{ mb: 4, p: 3, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: 'var(--accent-1)' }}>
                  <Typography variant="body1" color="rgba(255,255,255,0.92)" sx={{ lineHeight: 1.7 }}>
                    To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
                  </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <RuleIcon />
                  User Obligations
                </Typography>
                <Box sx={{ p: 3, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: '#ff5722' }}>
                  <Typography variant="body1" color="#555" sx={{ mb: 2, lineHeight: 1.7 }}>
                    You agree to use our services only for lawful purposes. You agree <b>NOT</b> to:
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2, '& li': { mb: 1, color: 'var(--muted-text)', fontSize: '0.95rem' } }}>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Restrict others' use or enjoyment of the services</li>
                    <li>Impersonate GUE Cyber or other users</li>
                    <li>Upload defamatory or objectionable material</li>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Intellectual Property */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <CopyrightIcon />
                  Intellectual Property
                </Typography>
                <Box sx={{ p: 3, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: '#9c27b0' }}>
                  <Typography variant="body1" color="rgba(255,255,255,0.92)" sx={{ lineHeight: 1.7, mb: 2 }}>
                    All content, features, and functionality on our services are the exclusive property of <b>GUE Cyber</b> or its licensors and are protected by:
                  </Typography>
                  <Grid container spacing={1}>
                    {['Copyright', 'Trademark', 'Patent', 'Trade Secret'].map((item, index) => (
                      <Grid item xs={6} key={index}>
                        <Chip
                          label={item}
                          size="small"
                          sx={{
                            bgcolor: 'var(--chip-bg)',
                            color: 'var(--accent-1)',
                            fontWeight: 500
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Typography variant="body2" color="rgba(255,255,255,0.75)" sx={{ mt: 2, fontStyle: 'italic' }}>
                    You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Limitation of Liability */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <SecurityIcon />
                  Limitation of Liability
                </Typography>
                <Alert severity="warning" sx={{ mb: 3 }}>
                  <Typography variant="body2" fontWeight={500}>
                    Important Legal Notice - Please Read Carefully
                  </Typography>
                </Alert>
                <Box sx={{ p: 3, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: '#ff9800' }}>
                  <Typography variant="body1" color="rgba(255,255,255,0.92)" sx={{ lineHeight: 1.7, mb: 2 }}>
                    To the fullest extent permitted by law, <b>GUE Cyber</b> shall not be liable for indirect, incidental, special, or consequential damages including:
                  </Typography>
                  <Box sx={{ '& > div': { mb: 1, p: 1.5, bgcolor: 'rgba(255,193,7,0.06)', borderRadius: 1, fontSize: '0.9rem', color: '#ef6c00' } }}>
                    <div>• Loss of profits, data, or goodwill</div>
                    <div>• Service interruption or inability to access</div>
                    <div>• Third-party conduct on our services</div>
                    <div>• Unauthorized access to your content</div>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
                  <ContactSupportIcon />
                  Questions About These Terms?
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem', mb: 2 }}>
                  If you have any questions about these Terms of Service, please don't hesitate to contact us.
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.75)">
                  We're here to help clarify any concerns you may have about our terms and policies.
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                  <Button component="a" href="/contact" variant="contained" sx={{ background: 'var(--btn-grad)', color: 'var(--chip-text)', textTransform: 'none' }}>Contact Us</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
