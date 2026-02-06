import logo from "../assets/logo.png";
import { Box, Container, Grid, Typography, Stack, IconButton, Divider, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Footer() {
    const year = new Date().getFullYear();

    const sections = [
        {
            title: "Navigation",
            links: [
                { label: "Home", to: "/" },
                { label: "About GUE Cyber", to: "/about" },
                { label: "Our Capabilities", to: "/services" },
                { label: "Career Openings", to: "/careers" },
                { label: "Case Studies", to: "/blog" }
            ]
        },
        {
            title: "Specialization",
            links: [
                { label: "Cyber Defense", to: "/services" },
                { label: "Vulnerability Management", to: "/services" },
                { label: "Cloud Engineering", to: "/services" },
                { label: "Digital Modernisation", to: "/services" },
                { label: "Security Training", to: "/services" }
            ]
        },
        {
            title: "Legal & Support",
            links: [
                { label: "Contact Intelligence", to: "/contact" },
                { label: "Privacy Excellence", to: "#" },
                { label: "Terms of Engagement", to: "#" },
                { label: "System Status", to: "#" },
                { label: "Security Advisory", to: "#" }
            ]
        }
    ];

    return (
        <Box component="footer" sx={{
            background: '#FAFAFA',
            color: '#1a1a1a',
            pt: { xs: 10, md: 20 },
            pb: 8,
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
            {/* Background Watermark - Light Variation */}
            <Typography sx={{
                position: 'absolute',
                bottom: -40,
                right: -20,
                fontSize: { xs: '6rem', sm: '10rem', md: '25rem' },
                fontWeight: 900,
                color: 'rgba(0,0,0,0.02)',
                lineHeight: 1,
                pointerEvents: 'none',
                zIndex: 0,
                userSelect: 'none'
            }}>
                GUE
            </Typography>

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                {/* Impact Area */}
                <Grid container spacing={4} sx={{ mb: { xs: 8, md: 15 } }} alignItems="center">
                    <Grid item xs={12} lg={7}>
                        <Typography variant="h2" sx={{
                            fontWeight: 900,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
                            lineHeight: 1.1,
                            mb: 3,
                            fontFamily: 'Outfit',
                            color: '#1a1a1a'
                        }}>
                            ELEVATING <Box component="span" sx={{ color: '#10B981', fontStyle: 'italic' }}>SECURITY</Box> STANDARDS.
                        </Typography>
                        <Button
                            component={Link} to="/contact"
                            variant="text"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                color: '#10B981',
                                fontWeight: 800,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                p: 0,
                                textTransform: 'none',
                                '&:hover': { background: 'transparent', transform: 'translateX(10px)' },
                                transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)'
                            }}
                        >
                            Initiate consultation sequence
                        </Button>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <Box sx={{
                            p: { xs: 3, sm: 4, md: 5 },
                            background: '#fff',
                            borderRadius: '32px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                        }}>
                            <Typography sx={{ fontWeight: 800, mb: 1, fontSize: '1.1rem', color: '#1a1a1a' }}>NEWSLETTER</Typography>
                            <Typography sx={{ color: '#666', mb: 3, fontSize: '0.9rem', lineHeight: 1.6 }}>
                                Get tactical updates and security briefings directly to your inbox.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1.5 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Enter corporate email"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '100px',
                                            background: '#f9f9f9',
                                            '& fieldset': { borderColor: 'rgba(0,0,0,0.1)' },
                                            '&:hover fieldset': { borderColor: '#10B981' }
                                        }
                                    }}
                                />
                                <IconButton sx={{
                                    background: '#1a1a1a',
                                    color: '#fff',
                                    minWidth: 40, width: 40, height: 40,
                                    '&:hover': { background: '#10B981' }
                                }}>
                                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 6, lg: 8 }}>
                    {/* Brand Info */}
                    <Grid item xs={12} lg={4}>
                        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', mb: 3 }}>
                            <Box component="img" src={logo} alt="GUE Cyber" sx={{ height: { xs: 45, md: 55 } }} />
                            <Typography sx={{
                                fontFamily: 'Outfit', fontWeight: 900,
                                letterSpacing: '-0.04em', color: '#1a1a1a', fontSize: { xs: '1.5rem', md: '1.8rem' }
                            }}>
                                GUE CYBER
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#666', mb: 4, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' }, maxWidth: 380 }}>
                            Leading elite cyber security defense and digital transformation. Built for resilience, trusted by enterprises.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {[<LinkedInIcon />, <TwitterIcon />, <FacebookIcon />].map((icon, i) => (
                                <IconButton
                                    key={i}
                                    sx={{
                                        color: '#1a1a1a',
                                        background: '#fff',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        p: 1.5,
                                        transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                                        '&:hover': {
                                            background: '#1a1a1a',
                                            color: '#fff',
                                            transform: 'translateY(-5px)'
                                        }
                                    }}
                                >
                                    {icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} lg={8}>
                        <Grid container spacing={4}>
                            {sections.map((section, idx) => (
                                <Grid item xs={6} md={4} key={idx}>
                                    <Typography sx={{
                                        fontWeight: 800,
                                        mb: { xs: 3, md: 4 },
                                        color: '#1a1a1a',
                                        letterSpacing: '0.15em',
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        {section.title}
                                    </Typography>
                                    <Stack spacing={2}>
                                        {section.links.map((link, lIdx) => (
                                            <Box
                                                key={lIdx}
                                                component={link.to.startsWith('#') ? 'span' : Link}
                                                to={link.to}
                                                sx={{
                                                    color: '#666',
                                                    textDecoration: 'none',
                                                    fontSize: '0.95rem',
                                                    fontWeight: 600,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': { color: '#10B981', transform: 'translateX(8px)' }
                                                }}
                                            >
                                                {link.label}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Divider sx={{ mt: { xs: 8, md: 10 }, mb: 6, borderColor: 'rgba(0,0,0,0.05)' }} />

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: 3
                }}>
                    <Typography sx={{ color: '#888', fontSize: '0.85rem', fontWeight: 500 }}>
                        © {year} GUE Cyber Limited. Registered Subsidiary of Gue Group.
                    </Typography>
                    <Stack direction="row" spacing={{ xs: 2.5, sm: 4 }}>
                        <Typography sx={{ color: '#888', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600, '&:hover': { color: '#10B981' } }}>
                            Privacy Shield
                        </Typography>
                        <Typography sx={{ color: '#888', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600, '&:hover': { color: '#10B981' } }}>
                            Terms of Service
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}