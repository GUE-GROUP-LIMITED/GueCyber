import { Link } from "react-router-dom";
import { Typography, Grid, Box, Button, Container, Stack } from "@mui/material";

export default function About() {
    const teamImages = [
        '/img/gue (1).jpg', '/img/gue (2).jpg', '/img/gue (3).jpg', '/img/gue (4).jpg', '/img/gue (5).jpg'
    ];

    return (
        <main>
            <div className="mesh-bg">
                <div className="mesh-blob mesh-blob-1"></div>
                <div className="mesh-blob mesh-blob-2"></div>
            </div>

            {/* Hero Section */}
            <Box sx={{ pt: { xs: 'var(--hero-pt-mobile)', md: 'var(--hero-pt-desktop)' }, pb: { xs: 'var(--section-py-mobile)', md: 'var(--internal-gap-lg)' } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 6, lg: 10 }} alignItems="center">
                        <Grid item xs={12} lg={6} className="reveal-up">
                            <Box sx={{ mb: { xs: 4, md: 6 } }}>
                                <Box sx={{
                                    display: 'inline-flex', alignItems: 'center', gap: 1.5,
                                    px: 2, py: 1, background: 'rgba(0, 0, 0, 0.05)',
                                    borderRadius: '100px', mb: { xs: 3, md: 4 }
                                }}>
                                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#1a1a1a' }} />
                                    <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, fontWeight: 800, color: '#1a1a1a', letterSpacing: '0.2em' }}>
                                        OUR STORY
                                    </Typography>
                                </Box>
                                <Typography variant="h1" sx={{
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                                    fontWeight: 900, color: '#1a1a1a', lineHeight: 1, mb: 4
                                }}>
                                    THE EVOLUTION OF <Box component="span" sx={{ color: '#10B981', fontStyle: 'italic' }}>DEFENSE</Box>
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: -2, mb: { xs: 4, md: 6 } }}>
                                    {teamImages.map((img, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: { xs: 40, sm: 50, md: 60 }, height: { xs: 40, sm: 50, md: 60 }, borderRadius: '50%', border: '4px solid #fff',
                                                boxShadow: 'var(--shadow-md)', backgroundImage: `url('${img}')`,
                                                backgroundSize: 'cover', backgroundPosition: 'center', ml: index > 0 ? -2 : 0,
                                                transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                                                '&:hover': { transform: 'translateY(-10px) rotate(5deg)', zIndex: 10, border: '4px solid #10B981' }
                                            }}
                                        />
                                    ))}
                                    <Box sx={{ ml: 2.5 }}>
                                        <Typography sx={{ fontWeight: 800, fontSize: { xs: '1rem', md: '1.2rem' }, color: '#1a1a1a' }}>25+</Typography>
                                        <Typography sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' }, color: '#666', fontWeight: 600 }}>Security Experts</Typography>
                                    </Box>
                                </Box>

                                <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 700, color: '#1a1a1a', mb: 4, lineHeight: 1.6 }}>
                                    Founded with a mission to bridge the gap between technical infrastructure and enterprise defense.
                                    <Box component="span" sx={{ color: '#10B981' }}> We don't just secure systems; we build resilience.</Box>
                                </Typography>

                                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.05rem' }, color: '#666', lineHeight: 1.8, mb: { xs: 4, md: 6 }, maxWidth: 600 }}>
                                    GUE Cyber is a specialist enterprise security arm of Gue Group.
                                    We combine cutting-edge cyber security research with practical engineering to help complex organisations defend their digital borders.
                                </Typography>

                                <Button
                                    component={Link} to="/contact"
                                    variant="contained"
                                    sx={{
                                        px: { xs: 5, md: 6 }, py: { xs: 1.8, md: 2.2 }, borderRadius: '100px', background: '#1a1a1a', color: '#fff',
                                        fontWeight: 800, '&:hover': { background: '#10B981' }
                                    }}
                                >
                                    Work With Us
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={6} className="reveal-scale delay-1">
                            <Box sx={{ position: 'relative', height: { xs: 350, sm: 500, md: 600, lg: 700 }, width: '100%', mt: { xs: 4, lg: 0 } }}>
                                <Box sx={{
                                    position: 'absolute', width: '70%', aspectRatio: '4/5',
                                    top: '0%', left: '0%', transform: 'rotate(-8deg)',
                                    borderRadius: { xs: '24px', md: '40px' }, zIndex: 1,
                                    '&::before': {
                                        content: '""', position: 'absolute', top: -10, left: -10, right: 10, bottom: 10,
                                        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                                        borderRadius: { xs: '24px', md: '40px' }, zIndex: -1, opacity: 0.2
                                    }
                                }}>
                                    <Box component="img" src="/img/gue (5).jpg" sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: { xs: '24px', md: '40px' }, boxShadow: 'var(--shadow-xl)' }} />
                                </Box>
                                <Box sx={{
                                    position: 'absolute', width: '60%', aspectRatio: '4/5',
                                    bottom: '0%', right: '0%', transform: 'rotate(6deg)',
                                    borderRadius: { xs: '24px', md: '40px' }, zIndex: 2,
                                    '&::before': {
                                        content: '""', position: 'absolute', top: -10, left: 10, right: -10, bottom: 10,
                                        background: '#E5E5E5', borderRadius: { xs: '24px', md: '40px' }, zIndex: -1
                                    }
                                }}>
                                    <Box component="img" src="/img/gue (4).jpg" sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: { xs: '24px', md: '40px' }, boxShadow: 'var(--shadow-xl)' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Bridge Section: Strategic Vision */}
            <Box sx={{ py: { xs: 'var(--internal-gap-md)', md: 'var(--internal-gap-lg)' }, background: 'rgba(16, 185, 129, 0.03)', borderY: '1px solid rgba(16, 185, 129, 0.1)' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box sx={{
                                position: 'relative',
                                maxWidth: { xs: '100%', md: '380px' },
                                mx: 'auto'
                            }}>
                                <Box
                                    component="img"
                                    src="/img/gue (3).jpg"
                                    sx={{
                                        width: '100%',
                                        aspectRatio: '1/1',
                                        objectFit: 'cover',
                                        borderRadius: { xs: '32px', md: '40px' },
                                        boxShadow: 'var(--shadow-lg)',
                                        display: 'block'
                                    }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: { xs: -10, md: -20 },
                                    right: { xs: -10, md: -20 },
                                    p: { xs: 2.5, md: 3.5 },
                                    background: '#1a1a1a',
                                    color: '#fff',
                                    borderRadius: '24px',
                                    boxShadow: 'var(--shadow-xl)',
                                    display: { xs: 'block', sm: 'block' },
                                    textAlign: 'center',
                                    minWidth: { xs: '120px', md: '160px' }
                                }}>
                                    <Typography sx={{ fontWeight: 900, fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 0.5 }}>15+</Typography>
                                    <Typography sx={{ fontSize: { xs: '0.65rem', md: '0.75rem' }, opacity: 0.7, fontWeight: 700, lineHeight: 1.2 }}>Years of Industry Legacy</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography variant="overline" sx={{ color: '#10B981', fontWeight: 800, letterSpacing: '0.2em' }}>THE VISION</Typography>
                            <Typography variant="h3" sx={{ fontWeight: 900, my: 3, lineHeight: 1.1 }}>PRECISION ENGINEERING MEET <Box component="span" sx={{ color: '#10B981' }}>ELITE PROTECTION</Box></Typography>
                            <Typography sx={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                                In an era of rapid digital evolution, security can no longer be an afterthought. Our methodology is built on a foundation of 'Security by Design'—merging advanced technical infrastructure with offensive intelligence.
                            </Typography>
                            <Typography sx={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                We empower organisations to scale without fear by hardening their digital border and ensuring operational resilience at every layer of the stack.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Capabilities */}
            <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' }, background: '#fff' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
                        <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, fontSize: { xs: '2rem', md: '4rem' } }}>WHAT WE DO</Typography>
                        <Typography sx={{ color: '#666', maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.2rem' }, px: 2 }}>Comprehensive cyber defense strategies for the modern world.</Typography>
                    </Box>

                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        {[
                            { title: 'Offensive Security', desc: 'Active pen-testing and adversary simulation to find weaknesses before they do.' },
                            { title: 'Defensive Engineering', desc: 'Building resilient cloud-native infrastructure and Zero-Trust architectures.' },
                            { title: 'Threat Intelligence', desc: 'Strategic monitoring and log analysis to detect anomalies in real-time.' },
                            { title: 'Incident Response', desc: 'Rapid containment, digital forensics, and professional recovery strategies.' }
                        ].map((c, idx) => (
                            <Grid item xs={12} sm={6} lg={3} key={idx}>
                                <Box className="glass-card" sx={{ p: { xs: 4, md: 6 }, height: '100%', borderRadius: { xs: '32px', md: '40px' }, textAlign: 'center' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: '#1a1a1a', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{c.title}</Typography>
                                    <Typography sx={{ color: '#666', lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>{c.desc}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Strategy Section */}
            <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' }, background: '#FAFAFA' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ fontWeight: 900, mb: { xs: 3, md: 4 }, fontSize: { xs: '1.75rem', md: '3rem' } }}>Sectors & Elite Compliance</Typography>
                            <Typography sx={{ color: '#555', lineHeight: 1.8, mb: 6, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                We serve sectors where failure is not an option. Our clients include global financial institutions, critical energy providers, and healthcare networks.
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, md: 2 } }}>
                                {['FinTech', 'GovTech', 'Energy', 'HealthTech', 'Enterprise'].map(tag => (
                                    <Box key={tag} sx={{ px: { xs: 3, md: 4 }, py: { xs: 1, md: 1.5 }, background: '#fff', border: '1px solid #ddd', borderRadius: '100px', fontWeight: 800, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>{tag}</Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: { xs: 4, sm: 6, md: 8 }, background: '#1a1a1a', borderRadius: { xs: '32px', md: '48px' }, color: '#fff', boxShadow: '0 40px 100px rgba(0,0,0,0.2)' }}>
                                <Typography variant="h4" sx={{ fontWeight: 900, mb: { xs: 4, md: 6 }, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>Strategy Matrix</Typography>
                                {[
                                    { label: 'Map', val: 'Full network topology analysis and asset discovery.' },
                                    { label: 'Harden', val: 'Hardening every endpoint and communication layer.' },
                                    { label: 'Monitor', val: '24/7 SIEM-led monitoring and detection.' },
                                    { label: 'Iterate', val: 'Constant feedback loops and security refinement.' }
                                ].map((item, i) => (
                                    <Box key={i} sx={{ mb: { xs: 3, md: 4 }, display: 'flex', gap: { xs: 2, md: 3 } }}>
                                        <Typography sx={{ fontWeight: 900, color: '#10B981', fontSize: { xs: '1rem', md: '1.2rem' } }}>0{i + 1}</Typography>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{item.label}</Typography>
                                            <Typography sx={{ opacity: 0.6, mt: 0.5, fontSize: { xs: '0.85rem', md: '1rem' } }}>{item.val}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Milestones Card Grid */}
            <Box sx={{ py: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' }, background: '#fff' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 12 } }}>
                        <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '4rem' } }}>LEGACY & FUTURE</Typography>
                    </Box>
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        {[
                            { year: '2010', title: 'Origin Story', desc: 'Started as Gabbito ICT World, providing primary technical infrastructure in Benue State.' },
                            { year: '2025', title: 'GUE Cyber Elite', desc: 'Incorporated as a Tier-1 enterprise security firm under Gue Group.' }
                        ].map((m, i) => (
                            <Grid item xs={12} md={6} key={i}>
                                <Box className="glass-card" sx={{ p: { xs: 5, md: 8 }, height: '100%', borderRadius: { xs: '32px', md: '48px' }, position: 'relative', overflow: 'hidden' }}>
                                    <Typography sx={{ position: 'absolute', top: { xs: -10, md: -30 }, right: { xs: -10, md: -20 }, fontWeight: 900, opacity: 0.05, fontSize: { xs: '6rem', sm: '10rem', md: '14rem' }, pointerEvents: 'none' }}>{m.year}</Typography>
                                    <Box sx={{
                                        width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, borderRadius: { xs: '18px', md: '24px' },
                                        background: '#1a1a1a', color: '#fff',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.5rem' }, mb: { xs: 3, md: 4 }
                                    }}>
                                        {m.year}
                                    </Box>
                                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: '#1a1a1a', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>{m.title}</Typography>
                                    <Typography sx={{ color: '#666', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>{m.desc}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </main>
    );
}
