import { Link } from 'react-router-dom';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'var(--new-brown)', color: 'var(--bg-grey)', borderTop: '1px solid var(--new-grey)', mt: 6 }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between" alignItems="center">
                    {/* Brand */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box component="img" src={logo} alt="GUE Cyber logo" sx={{ width: 48, height: 'auto', borderRadius: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--bg-grey)', letterSpacing: 1 }}>GUE CYBER LIMITED</Typography>
                            <Typography variant="caption" sx={{ color: 'var(--hero-text)', display: 'block' }}>Cyber Security • Digital Transformation • Infrastructure</Typography>
                        </Box>
                    </Box>

                    {/* Links */}
                    <Stack direction="row" spacing={2} component="nav" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography component={Link} to="/" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>Home</Typography>
                        <Typography component={Link} to="/services" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>Services</Typography>
                        <Typography component={Link} to="/about" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>About</Typography>
                        <Typography component={Link} to="/blog" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>Blog</Typography>
                        <Typography component={Link} to="/careers" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>Careers</Typography>
                        <Typography component={Link} to="/contact" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>Contact</Typography>
                    </Stack>

                    {/* Contact & Social */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography component={Link} to="/terms" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>Terms</Typography>
                        <Typography component={Link} to="/privacy" sx={{ color: 'var(--bg-grey)', textDecoration: 'none', fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.7 }}>Privacy</Typography>
                        <IconButton component="a" href="https://www.linkedin.com/company/codnippet/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={{ color: 'var(--bg-grey)' }}>
                            <span className="material-icons">business_center</span>
                        </IconButton>
                        <IconButton component="a" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" sx={{ color: 'var(--bg-grey)' }}>
                            <span className="material-icons">code</span>
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>

            <Box sx={{ bgcolor: 'rgba(0,0,0,0.06)', py: 1 }}>
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ color: 'var(--hero-text)' }}>&copy; {new Date().getFullYear()} GUE CYBER LIMITED — All rights reserved.</Typography>
                </Container>
            </Box>
        </Box>
    );
}