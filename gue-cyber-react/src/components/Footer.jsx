import logo from "../assets/logo.webp";
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
            title: "Platform",
            links: [
                { label: "Solutions", to: "/services" },
                { label: "How We Work", to: "/about" },
                { label: "Projects & Case Studies", to: "/blog" },
                { label: "Contact", to: "/contact" }
            ]
        },
        {
            title: "Resources",
            links: [
                { label: "Insights", to: "/blog" },
                { label: "Support", to: "/contact" }
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About", to: "/about" },
                { label: "Privacy", to: "/privacy" },
                { label: "Terms", to: "/terms" },
                { label: "Cookie Policy", to: "/cookie-policy" }
            ]
        }
    ];

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: '#fff7ed',
                color: 'var(--primary)',
                pt: { xs: 10, md: 14 },
                pb: 6,
                borderTop: '1px solid rgba(15,23,42,0.08)'
            }}
        >
            <Box
                component="img"
                src="/images/footer-waves-left-bottom.png"
                alt=""
                sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: { xs: 220, md: 360 },
                    opacity: 0.3,
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ mb: { xs: 8, md: 10 } }}>
                    <Grid item xs={12} lg={8}>
                        <Box component={Link} to="/" sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', mb: 2.5 }}>
                            <Box component="img" src={logo} alt="GUE Cyber" loading="lazy" decoding="async" sx={{ height: { xs: 45, md: 55 } }} />
                        </Box>

                        <Typography sx={{ color: '#475569', maxWidth: 560, lineHeight: 1.75, mb: 4.5, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                            We help organizations build resilient digital operations through cybersecurity, software engineering, cloud and DevOps,
                            IT consulting, and technology enablement.
                        </Typography>

                        <Grid container spacing={4}>
                            {sections.map((section, idx) => (
                                <Grid item xs={6} md={4} key={idx}>
                                    <Typography
                                        sx={{
                                            fontWeight: 800,
                                            mb: 2.5,
                                            color: 'var(--primary)',
                                            letterSpacing: '0.12em',
                                            fontSize: '0.74rem',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {section.title}
                                    </Typography>
                                    <Stack spacing={1.5}>
                                        {section.links.map((link, lIdx) => (
                                            <Box
                                                key={lIdx}
                                                component={Link}
                                                to={link.to}
                                                sx={{
                                                    color: '#475569',
                                                    textDecoration: 'none',
                                                    fontSize: '0.94rem',
                                                    fontWeight: 600,
                                                    transition: 'all 0.25s ease',
                                                    '&:hover': { color: 'var(--accent)' }
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

                    <Grid item xs={12} lg={4}>
                        <Box
                            sx={{
                                background: '#022c22',
                                borderRadius: 2,
                                p: 4,
                                maxWidth: 380,
                                ml: { lg: 'auto' }
                            }}
                        >
                            <Typography sx={{ color: '#f8fafc', fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 600, mb: 1.3, lineHeight: 1.35 }}>
                                Your source for cyber business updates
                            </Typography>
                            <Typography sx={{ color: 'rgba(226,232,240,0.82)', fontSize: '0.9rem', mb: 4.2, lineHeight: 1.65 }}>
                                Join our monthly brief with concise insights on cybersecurity, cloud, software delivery, and operational resilience.
                            </Typography>

                            <Stack component="form" spacing={1.4}>
                                <TextField
                                    inputProps={{ 'aria-label': 'Newsletter email address' }}
                                    fullWidth
                                    size="small"
                                    placeholder="you@company.com"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: 48,
                                            borderRadius: '999px',
                                            background: '#ffffff'
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    aria-label="Subscribe newsletter"
                                    sx={{
                                        bgcolor: '#a3e635',
                                        color: '#052e2b',
                                        fontWeight: 800,
                                        minHeight: 48,
                                        py: 0,
                                        '&:hover': { bgcolor: '#bef264' }
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ mb: 5, borderColor: 'rgba(15,23,42,0.1)' }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2.5
                    }}
                >
                    <Stack direction="row" spacing={1.2}>
                        {[
                            { icon: <LinkedInIcon />, label: 'LinkedIn profile' },
                            { icon: <TwitterIcon />, label: 'X profile' },
                            { icon: <FacebookIcon />, label: 'Facebook profile' }
                        ].map((item, i) => (
                            <IconButton
                                key={i}
                                component="a"
                                href="#"
                                aria-label={item.label}
                                sx={{
                                    color: 'var(--primary)',
                                    background: '#ffffff',
                                    border: '1px solid var(--border)',
                                    p: 1.2,
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        background: 'var(--accent)',
                                        color: '#ffffff',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                {item.icon}
                            </IconButton>
                        ))}
                    </Stack>

                    <Typography sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                        © {year} GUE Cyber Limited. All rights reserved.
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                        <Button
                            component={Link}
                            to="/careers"
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                borderColor: 'rgba(15,23,42,0.15)',
                                color: 'var(--primary)',
                                px: 2.4,
                                py: 0.85,
                                fontWeight: 700,
                                '&:hover': { borderColor: 'var(--accent)', color: 'var(--accent)' }
                            }}
                        >
                            Explore Careers
                        </Button>
                        <Typography
                            component={Link}
                            to="/privacy"
                            sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'var(--accent)' } }}
                        >
                            Privacy
                        </Typography>
                        <Typography
                            component={Link}
                            to="/terms"
                            sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'var(--accent)' } }}
                        >
                            Terms
                        </Typography>
                        <Typography
                            component={Link}
                            to="/cookie-policy"
                            sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'var(--accent)' } }}
                        >
                            Cookie Policy
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}