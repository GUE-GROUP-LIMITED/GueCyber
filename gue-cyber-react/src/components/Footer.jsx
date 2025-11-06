import { Link } from 'react-router-dom';
import { Box, Container, Typography, Stack, IconButton, Button, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'linear-gradient(180deg, rgba(2,31,63,0.95), rgba(7,16,41,0.95))', color: 'var(--chip-text)', borderTop: '1px solid rgba(255,255,255,0.04)', mt: 8 }}>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between" alignItems="flex-start">
                    {/* Brand column */}
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', maxWidth: 360 }}>
                        <Box component="img" src={logo} alt="GUE Cyber logo" loading="lazy" sx={{ width: 56, height: 'auto', borderRadius: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.24)' }} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.8 }}>GUE CYBER LIMITED</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5 }}>Managed security services, incident response, and penetration testing for enterprises.</Typography>
                            <Typography component="a" href="https://gueplc.com" target="_blank" rel="noopener noreferrer" variant="caption" sx={{ color: 'rgba(255,255,255,0.72)', display: 'block', textDecoration: 'underline', mt: 1 }}>A subsidiary of Gue Group</Typography>
                        </Box>
                    </Box>

                    {/* Links column */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, mb: 1 }}>Quick Links</Typography>
                        <Stack spacing={1}>
                            <Typography component={Link} to="/" sx={{ color: 'rgba(255,255,255,0.84)', textDecoration: 'none' }}>Home</Typography>
                            <Typography component={Link} to="/services" sx={{ color: 'rgba(255,255,255,0.84)', textDecoration: 'none' }}>Services</Typography>
                            <Typography component={Link} to="/about" sx={{ color: 'rgba(255,255,255,0.84)', textDecoration: 'none' }}>About</Typography>
                            <Typography component={Link} to="/blog" sx={{ color: 'rgba(255,255,255,0.84)', textDecoration: 'none' }}>Blog</Typography>
                            <Typography component={Link} to="/careers" sx={{ color: 'rgba(255,255,255,0.84)', textDecoration: 'none' }}>Careers</Typography>
                        </Stack>
                    </Box>

                    {/* Contact & Social column */}
                    <Box sx={{ minWidth: 220 }}>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, mb: 1 }}>Get in touch</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>Email us: <Box component="a" href="mailto:info@guecyber.com" sx={{ color: 'var(--btn-grad)', textDecoration: 'none', fontWeight: 700 }}>info@guecyber.com</Box></Typography>
                        <Button component={Link} to="/contact" variant="contained" sx={{ background: 'var(--btn-grad)', color: 'var(--chip-text)', textTransform: 'none', mt: 1 }}>Request a Consultation</Button>

                        <Box sx={{ mt: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
                            <IconButton component="a" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton component="a" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton component="a" href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                                <TwitterIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Stack>
            </Container>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.04)' }} />

            <Box sx={{ py: 2 }}>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.64)' }}>&copy; {new Date().getFullYear()} GUE CYBER LIMITED — All rights reserved.</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography component={Link} to="/terms" sx={{ color: 'rgba(255,255,255,0.64)', textDecoration: 'none' }}>Terms</Typography>
                        <Typography component={Link} to="/privacy" sx={{ color: 'rgba(255,255,255,0.64)', textDecoration: 'none' }}>Privacy</Typography>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}