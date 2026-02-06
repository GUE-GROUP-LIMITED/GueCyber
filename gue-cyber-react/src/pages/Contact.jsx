import { Typography, Container, Box, Grid, TextField, Button, Stack } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FAQ from "../components/FAQ";

export default function Contact() {
  const contactInfo = [
    { icon: <EmailIcon />, label: "Direct Email", value: "info@guecyber.com", href: "mailto:info@guecyber.com" },
    { icon: <PhoneIcon />, label: "Security Hotline", value: "+234 (0) 803 234 5678", href: "tel:+2348032345678" },
    { icon: <LocationOnIcon />, label: "Headquarters", value: "Makurdi, Benue State, NG", href: "#" },
    { icon: <AccessTimeIcon />, label: "Mission Hours", value: "Mon - Fri, 9am - 5pm", href: "#" }
  ];

  return (
    <main>
      <div className="mesh-bg">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
      </div>

      <Box sx={{ pt: { xs: 'var(--hero-pt-mobile)', md: 'var(--hero-pt-desktop)' }, pb: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }} className="reveal-up">
            <Typography variant="overline" sx={{ fontWeight: 900, color: '#10B981', letterSpacing: '0.4em', mb: 2, display: 'block', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>CONNECT</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, color: '#1a1a1a', mb: 3, lineHeight: 1.1 }}>GET IN <Box component="span" sx={{ color: '#10B981', fontStyle: 'italic' }}>TOUCH</Box></Typography>
            <Typography sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.2rem' }, maxWidth: 700, mx: 'auto', px: 2 }}>We are ready to respond to your inquiries and security consultation needs.</Typography>
          </Box>

          <Grid container spacing={{ xs: 6, lg: 10 }}>
            {/* High-End Form */}
            <Grid item xs={12} lg={7}>
              <Box className="glass-card reveal-up delay-1" sx={{ p: { xs: 4, sm: 6, md: 8 }, borderRadius: { xs: '32px', md: '48px' } }}>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: { xs: 4, md: 6 }, color: '#1a1a1a', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>Strategic Inquiry</Typography>
                <Grid container spacing={{ xs: 3, md: 4 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" variant="standard" InputProps={{ disableUnderline: false, sx: { fontSize: { xs: '1rem', md: '1.1rem' }, py: 1 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Corporate Email" variant="standard" InputProps={{ disableUnderline: false, sx: { fontSize: { xs: '1rem', md: '1.1rem' }, py: 1 } }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Inquiry Subject" variant="standard" InputProps={{ disableUnderline: false, sx: { fontSize: { xs: '1rem', md: '1.1rem' }, py: 1 } }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth multiline rows={4} label="Your Message" variant="standard" InputProps={{ disableUnderline: false, sx: { fontSize: { xs: '1rem', md: '1.1rem' }, py: 1 } }} />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: { xs: 2, md: 4 } }}>
                    <Button fullWidth variant="contained" sx={{ py: 2.2, borderRadius: '100px', background: '#1a1a1a', color: '#fff', fontWeight: 900, fontSize: { xs: '1rem', md: '1.1rem' }, '&:hover': { background: '#10B981' } }}>Submit Mission Brief</Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* High-End Info */}
            <Grid item xs={12} lg={5}>
              <Stack spacing={{ xs: 3, md: 4 }} className="reveal-scale delay-2">
                {contactInfo.map((info, idx) => (
                  <Box key={idx} className="glass-card" sx={{ p: { xs: 3, sm: 4, md: 5 }, borderRadius: { xs: '24px', md: '32px' }, display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 } }}>
                    <Box sx={{ minWidth: { xs: 48, md: 64 }, height: { xs: 48, md: 64 }, borderRadius: '16px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', '& svg': { fontSize: { xs: 24, md: 32 } } }}>{info.icon}</Box>
                    <Box>
                      <Typography sx={{ color: '#888', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: { xs: '0.6rem', md: '0.7rem' }, mb: 0.5 }}>{info.label}</Typography>
                      <Typography component="a" href={info.href} sx={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 800, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, transition: 'all 0.3s ease', '&:hover': { color: '#10B981' }, wordBreak: 'break-all' }}>{info.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Elite FAQ */}
      <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' }, background: '#fafafa' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>INTEL & GUIDANCE</Typography>
            <Typography sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.2rem' }, px: 2 }}>Answers to our most frequently discussed implementation topics.</Typography>
          </Box>
          <FAQ />
        </Container>
      </Box>
    </main>
  );
}