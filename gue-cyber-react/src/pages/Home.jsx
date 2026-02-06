import { Typography, Container, Box, Grid, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
    const stats = [
        { icon: <ShieldIcon />, value: '25+', label: 'Global Projects', desc: 'Enterprise-grade security across infrastructure and cloud.' },
        { icon: <SecurityIcon />, value: 'Expert', label: 'Security Team', desc: 'Practitioners with deep offensive and defensive expertise.' },
        { icon: <BoltIcon />, value: '24/7', label: 'Critical Support', desc: 'Rapid incident response and continuous monitoring.' }
    ];

    return (
        <main>
            {/* Mesh Background */}
            <div className="mesh-bg">
                <div className="mesh-blob mesh-blob-1"></div>
                <div className="mesh-blob mesh-blob-2"></div>
            </div>

            {/* Hero Section */}
            <Box sx={{
                pt: { xs: 'var(--hero-pt-mobile)', md: 'var(--hero-pt-desktop)' },
                pb: { xs: 'var(--section-py-mobile)', md: 'var(--internal-gap-lg)' },
                position: 'relative'
            }}>
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Box className="reveal-up">
                                <Box sx={{
                                    display: 'inline-flex', alignItems: 'center', gap: 1.5,
                                    px: 2, py: 1, background: 'rgba(16, 185, 129, 0.1)',
                                    borderRadius: '100px', mb: { xs: 3, md: 4 }, border: '1px solid rgba(16, 185, 129, 0.2)'
                                }}>
                                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} />
                                    <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, fontWeight: 700, color: '#10B981', letterSpacing: '0.1em' }}>
                                        NEXT-GEN CYBER SECURITY
                                    </Typography>
                                </Box>

                                <Typography variant="h1" sx={{
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                                    fontWeight: 900,
                                    lineHeight: { xs: 1.1, md: 0.95 },
                                    mb: 4,
                                    background: 'linear-gradient(135deg, #1a1a1a 0%, #444 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    GUE CYBER<br />
                                    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: { xs: 1.5, md: 2.5 } }}>
                                        <Box sx={{
                                            width: { xs: 40, sm: 60, md: 80 }, height: { xs: 40, sm: 60, md: 80 },
                                            borderRadius: '50%', backgroundImage: "url('/img/gue (3).jpg')",
                                            backgroundSize: 'cover', backgroundPosition: 'center',
                                            boxShadow: 'var(--shadow-lg)', border: { xs: '3px solid #fff', md: '6px solid #fff' }
                                        }} />
                                        LIMITED
                                    </Box>
                                </Typography>

                                <Typography variant="h5" sx={{
                                    maxWidth: 600, color: '#666', mb: { xs: 4, md: 6 },
                                    fontSize: { xs: '1rem', md: '1.3rem' }, lineHeight: 1.6
                                }}>
                                    We provide high-impact cybersecurity, digital transformation and infrastructure services for MSMEs and global enterprises.
                                </Typography>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                                    <Button
                                        component={Link} to="/services"
                                        variant="contained" size="large"
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{
                                            px: { xs: 4, md: 5 }, py: { xs: 1.8, md: 2.2 }, borderRadius: '100px',
                                            background: '#1a1a1a', color: '#fff', fontWeight: 700, fontSize: '1rem',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                            '&:hover': { background: '#10B981', transform: 'translateY(-4px)' }
                                        }}
                                    >
                                        Explore Services
                                    </Button>
                                    <Button
                                        component={Link} to="/contact"
                                        variant="outlined" size="large"
                                        sx={{
                                            px: { xs: 4, md: 5 }, py: { xs: 1.8, md: 2.2 }, borderRadius: '100px',
                                            borderColor: 'rgba(0,0,0,0.1)', color: '#1a1a1a',
                                            fontWeight: 700, fontSize: '1rem',
                                            '&:hover': { borderColor: '#1a1a1a', background: 'rgba(0,0,0,0.02)', transform: 'translateY(-4px)' }
                                        }}
                                    >
                                        Consultation
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Box sx={{
                                position: 'relative',
                                height: { xs: 320, sm: 450, md: 550, lg: 650 },
                                width: '100%',
                                mt: { xs: 4, lg: 0 }
                            }} className="reveal-scale delay-1">
                                <Box sx={{
                                    position: 'absolute', width: '60%', aspectRatio: '4/5',
                                    top: '5%', right: '5%', transform: 'rotate(-10deg)',
                                    borderRadius: { xs: '24px', md: '32px' }, border: { xs: '6px solid #fff', md: '12px solid #fff' },
                                    boxShadow: 'var(--shadow-xl)', overflow: 'hidden', zIndex: 1
                                }}>
                                    <Box component="img" src="/img/gue (1).jpg" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <Box sx={{
                                    position: 'absolute', width: '55%', aspectRatio: '4/5',
                                    bottom: '5%', left: '5%', transform: 'rotate(6deg)',
                                    borderRadius: { xs: '24px', md: '32px' }, border: { xs: '6px solid #fff', md: '12px solid #fff' },
                                    boxShadow: 'var(--shadow-xl)', overflow: 'hidden', zIndex: 2,
                                    animation: 'blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)'
                                }}>
                                    <Box component="img" src="/img/gue (2).jpg" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Bridge Section: Technical Excellence */}
            <Box sx={{ py: { xs: 'var(--internal-gap-md)', md: 'var(--internal-gap-lg)' }, background: '#fff', borderY: '1px solid rgba(0,0,0,0.05)' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>Uncompromising Technical <Box component="span" sx={{ color: '#10B981' }}>Excellence</Box></Typography>
                            <Typography sx={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                                We merge offensive research with defensive engineering to build systems that don't just work, but withstand the most sophisticated threats. Our approach is rooted in precision and deep forensic awareness.
                            </Typography>
                            <Stack direction="row" spacing={4}>
                                <Box>
                                    <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', color: '#1a1a1a' }}>99%</Typography>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#888', fontWeight: 700 }}>Threat Mitigation</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', color: '#1a1a1a' }}>24/7</Typography>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#888', fontWeight: 700 }}>Active Monitoring</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{
                                p: { xs: 3, md: 4 },
                                background: 'rgba(16, 185, 129, 0.03)',
                                borderRadius: { xs: '32px', md: '48px' },
                                border: '1px solid rgba(16, 185, 129, 0.08)',
                                textAlign: 'center',
                                maxWidth: { xs: '100%', md: '420px' },
                                mx: 'auto'
                            }}>
                                <Box
                                    component="img"
                                    src="/img/gue (4).jpg"
                                    sx={{
                                        width: '100%',
                                        aspectRatio: '1/1',
                                        objectFit: 'cover',
                                        borderRadius: '24px',
                                        boxShadow: 'var(--shadow-md)',
                                        mb: 3
                                    }}
                                />
                                <Typography sx={{ fontWeight: 800, color: '#10B981', letterSpacing: '0.05em', fontSize: { xs: '0.85rem', md: '1rem' } }}>
                                    Built for the MSME Frontier
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Experience */}
            <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        {stats.map((stat, i) => (
                            <Grid item xs={12} md={stat.value === '24/7' ? 12 : 6} lg={4} key={i}>
                                <Box className={`glass-card reveal-up delay-${i + 1}`} sx={{ p: { xs: 4, md: 6 }, height: '100%', borderRadius: { xs: '32px', md: '40px' }, textAlign: 'center' }}>
                                    <Box sx={{
                                        width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, borderRadius: { xs: '18px', md: '24px' },
                                        background: 'rgba(16, 185, 129, 0.1)', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        color: '#10B981', mx: 'auto', mb: { xs: 3, md: 4 }, '& svg': { fontSize: { xs: 28, md: 36 } }
                                    }}>
                                        {stat.icon}
                                    </Box>
                                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '2rem', md: '3rem' }, color: '#1a1a1a' }}>{stat.value}</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.1rem', md: '1.2rem' }, color: '#1a1a1a' }}>{stat.label}</Typography>
                                    <Typography sx={{ color: '#666', lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>{stat.desc}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Showcase Section */}
            <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' }, background: '#fff', position: 'relative', overflow: 'hidden' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 12 } }} className="reveal-up">
                        <Typography variant="overline" sx={{ fontWeight: 800, color: '#10B981', letterSpacing: '0.3em', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>OUR SERVICES</Typography>
                        <Typography variant="h2" sx={{ fontWeight: 900, mt: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' }, color: '#1a1a1a', lineHeight: 1.1 }}>
                            ELITE DEFENSE & <Box component="span" sx={{ color: '#10B981', fontStyle: 'italic' }}>INNOVATION</Box>
                        </Typography>
                    </Box>

                    <Grid container spacing={{ xs: 3, md: 5 }}>
                        {[
                            { title: 'Cyber Defense', img: '/img/gue (4).jpg', desc: 'Enterprise-grade protection including pen-testing and threat hunting.' },
                            { title: 'Digital Transformation', img: '/img/gue (5).jpg', desc: 'Secure modernisation and scalable cloud-native architectures.' },
                            { title: 'Elite Training', img: '/img/gue (1).jpg', desc: 'Specialized programs and tabletop incident response exercises.' }
                        ].map((item, idx) => (
                            <Grid item xs={12} md={4} key={idx} className={`reveal-up delay-${idx + 1}`}>
                                <Box sx={{ position: 'relative', borderRadius: { xs: '24px', md: '40px' }, overflow: 'hidden', height: { xs: 400, md: 500 } }} className="hover-lift">
                                    <Box component="img" src={item.img} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <Box sx={{
                                        position: 'absolute', bottom: 0, left: 0, right: 0,
                                        p: { xs: 3, md: 5 }, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                        color: '#fff'
                                    }}>
                                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>{item.title}</Typography>
                                        <Typography sx={{ opacity: 0.8, fontSize: { xs: '0.85rem', md: '0.95rem' }, lineHeight: 1.6 }}>{item.desc}</Typography>
                                        <Button
                                            component={Link} to="/services"
                                            sx={{ color: '#10B981', fontWeight: 800, mt: { xs: 1.5, md: 3 }, p: 0, textTransform: 'none', fontSize: { xs: '0.85rem', md: '1rem' } }}
                                        >
                                            Explore Section →
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Premium CTA */}
            <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' }, background: '#1a1a1a', color: '#fff', textAlign: 'center', position: 'relative' }}>
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '8rem', sm: '15rem', md: '30rem' }, fontWeight: 900, color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', zIndex: 0
                }}>
                    GUE
                </Box>
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: { xs: 3, md: 4 }, fontSize: { xs: '2rem', sm: '2.5rem', md: '4.5rem' }, lineHeight: 1.1 }}>
                        READY FOR <Box component="span" sx={{ color: '#10B981' }}>NEXT-GEN</Box> PROTECTION?
                    </Typography>
                    <Typography sx={{ mb: { xs: 6, md: 8 }, opacity: 0.7, fontSize: { xs: '1rem', md: '1.2rem' }, maxWidth: 650, mx: 'auto', px: 2 }}>
                        Join leading organisations who trust GUE Cyber for their most critical infrastructure and data defense.
                    </Typography>
                    <Button
                        component={Link} to="/contact"
                        variant="contained"
                        sx={{
                            px: { xs: 5, md: 8 }, py: { xs: 1.8, md: 2.5 }, borderRadius: '100px', background: '#fff', color: '#1a1a1a',
                            fontWeight: 800, fontSize: { xs: '0.9rem', md: '1.1rem' },
                            '&:hover': { background: '#10B981', color: '#fff', transform: 'scale(1.05)' }
                        }}
                    >
                        Schedule a Strategy Session
                    </Button>
                </Container>
            </Box>
        </main>
    );
}
