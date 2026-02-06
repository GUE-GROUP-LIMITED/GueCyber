import { Typography, Container, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    { icon: <SecurityIcon />, title: "Assessments & PenTesting", deliverables: ["Vulnerability assessments", "Application penetration testing", "Network security audits", "OSINT & Social Engineering"] },
    { icon: <ComputerIcon />, title: "Infrastructure Hardening", deliverables: ["Cloud security (AWS, GCP, Azure)", "Network architecture reviews", "Firewall & EDR monitoring", "Zero-Trust implementation"] },
    { icon: <SchoolIcon />, title: "Training & Advisory", deliverables: ["Security awareness training", "Incident response table-tops", "Technical workshops", "vCISO advisory services"] },
    { icon: <CodeIcon />, title: "Digital Transformation", deliverables: ["Secure cloud migration", "Infrastructure as Code audits", "API & microservices hardening", "CI/CD security integration"] }
  ];

  return (
    <main>
      <div className="mesh-bg">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
      </div>

      <Box sx={{ pt: { xs: 'var(--hero-pt-mobile)', md: 'var(--hero-pt-desktop)' }, pb: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }} className="reveal-up">
            <Typography variant="overline" sx={{ fontWeight: 900, color: '#10B981', letterSpacing: '0.4em', mb: 2, display: 'block', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>OUR SOLUTIONS</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, color: '#1a1a1a', mb: 3, lineHeight: 1.1 }}>
              ELITE SECURITY FOR THE <Box component="span" sx={{ color: '#10B981' }}>DIGITAL BORDER</Box>
            </Typography>
            <Typography sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.8, px: 2 }}>
              Comprehensive technical services designed to defend critical infrastructure and modernise enterprise environments.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mt: { xs: 6, md: 10 } }}>
            {serviceCategories.map((s, idx) => (
              <Grid item xs={12} md={6} key={idx} className={`reveal-up delay-${idx + 1}`}>
                <Box className="glass-card" sx={{ p: { xs: 4, sm: 6, md: 8 }, height: '100%', borderRadius: { xs: '32px', md: '48px' } }}>
                  <Box sx={{
                    width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, borderRadius: { xs: '18px', md: '24px' },
                    background: 'rgba(16, 185, 129, 0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#10B981', mb: { xs: 3, md: 5 }, '& svg': { fontSize: { xs: 30, md: 40 } }
                  }}>
                    {s.icon}
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, mb: 3, color: '#1a1a1a', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>{s.title}</Typography>
                  <Divider sx={{ mb: 3, borderColor: 'rgba(0,0,0,0.05)' }} />
                  <List sx={{ mb: { xs: 4, md: 6 } }}>
                    {s.deliverables.map((item, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 32, color: '#10B981' }}><CheckCircleIcon sx={{ fontSize: 18 }} /></ListItemIcon>
                        <ListItemText primary={item} primaryTypographyProps={{ color: '#555', fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' } }} />
                      </ListItem>
                    ))}
                  </List>
                  <Button component={Link} to="/contact" variant="outlined" fullWidth sx={{ py: 1.8, borderRadius: '100px', borderColor: 'rgba(0,0,0,0.1)', color: '#1a1a1a', fontWeight: 800, '&:hover': { background: '#1a1a1a', color: '#fff' }, fontSize: { xs: '0.85rem', md: '1rem' } }}>Request Details</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' }, background: '#1a1a1a', color: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, fontSize: { xs: '2rem', md: '4rem' }, lineHeight: 1.2 }}>CUSTOM SECURITY ARCHITECTURE</Typography>
          <Typography sx={{ mb: { xs: 6, md: 10 }, opacity: 0.7, fontSize: { xs: '1rem', md: '1.2rem' }, px: 2 }}>We don't offer generic fixes. Our engineers design custom-built programs for your specific risk landscape.</Typography>
          <Button component={Link} to="/contact" variant="contained" sx={{ px: { xs: 5, md: 8 }, py: 2.2, borderRadius: '100px', background: '#10B981', color: '#fff', fontWeight: 900, fontSize: { xs: '1rem', md: '1.1rem' }, '&:hover': { transform: 'scale(1.05)' } }}>Speak to an Engineer</Button>
        </Container>
      </Box>
    </main>
  );
}