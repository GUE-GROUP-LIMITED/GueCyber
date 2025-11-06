import { Typography, Card, CardContent, Grid, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import heroSvg from "../assets/hero-security.svg";

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <Box sx={{
                background: `var(--hero-bg)`,
                color: 'var(--hero-text)',
                py: { xs: 6, md: 12 },
                textAlign: 'center',
                minHeight: { xs: 420, md: 520 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${heroSvg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: 'var(--hero-h1-xs)', md: 'var(--hero-h1-md)' }, fontWeight: 900, mb: 2 }}
                    >
                        GUE CYBER LIMITED
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 500, mb: 3 }}>Cyber Security, Digital Transformation & Infrastructure</Typography>
                    <Typography variant="body1" sx={{ maxWidth: 760, mx: 'auto', mb: 4, opacity: 0.95 }}>We provide practical cyber security and digital transformation services that help MSMEs and enterprises protect data, secure infrastructure, and modernise operations — from vulnerability assessments to incident preparedness and secure migrations.</Typography>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button component={Link} to="/services" variant="contained" size="large" sx={{ textTransform: 'none', px: 4, background: 'var(--btn-grad)', color: 'var(--chip-text)' }}>Explore Services</Button>
                        <Button component={Link} to="/contact" variant="outlined" size="large" sx={{ color: 'var(--chip-text)', borderColor: 'var(--outline-weak)', textTransform: 'none' }}>Request Consultation</Button>
                    </Box>
                </Container>
            </Box>

            {/* Quick Facts / Differentiators */}
            <Box sx={{ py: { xs: 4, md: 6 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3} sx={{ textAlign: 'center', justifyContent: 'center' }}>
                        {[
                            ['20+ Projects', 'Delivered across MSMEs, infrastructure and enterprise environments.'],
                            ['Security Practitioners', 'Experienced security and infrastructure engineers.'],
                            ['Training Programs', 'Security and incident response training to upskill teams.']
                        ].map((item, i) => (
                            <Grid item xs={12} md={4} key={i}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                                    <Typography variant="h5" fontWeight={800} sx={{ color: 'var(--link-color)', mb: 0.5 }}>{item[0]}</Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: 'var(--hero-text)', maxWidth: 360 }}>{item[1]}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Featured Services (compact) */}
            <Box sx={{ py: { xs: 6, md: 8 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}>Featured Services</Typography>

                            <Grid container spacing={3}>
                        {[
                            { title: 'Security Assessments & PenTesting', desc: 'Identify vulnerabilities and remediate weaknesses across networks and applications.', href: '/services#assessments' },
                            { title: 'Infrastructure Hardening & Monitoring', desc: 'Secure architecture design, network hardening and continuous monitoring.', href: '/services#infrastructure' },
                            { title: 'Secure Migration & Training', desc: 'Secure-by-design migrations, cloud hardening and security training for teams.', href: '/services#training' }
                        ].map((s, idx) => (
                            <Grid item xs={12} md={4} key={idx}>
                                <Card component={Link} to={s.href} sx={{ p: 2, height: '100%', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--card-bg)' }}>
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="h6" fontWeight={700} sx={{ color: 'var(--hero-text)' }}>{s.title}</Typography>
                                        <Typography variant="body2" sx={{ mt: 1, color: 'var(--hero-text)' }}>{s.desc}</Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                        <Button component={Link} to={s.href} variant="text" sx={{ textTransform: 'none' }}>View</Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button component={Link} to="/services" variant="contained" sx={{ textTransform: 'none', px: 4, background: 'var(--btn-grad)', color: 'var(--chip-text)' }}>View All Services</Button>
                    </Box>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: { xs: 6, md: 8 }, background: 'var(--section-bg)', color: 'var(--hero-text)', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Ready to modernize your operations?</Typography>
                    <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>Talk to our engineering team about automation, manufacturing support, or a tailored training program.</Typography>
                    <Button component={Link} to="/contact" variant="contained" size="large" sx={{ textTransform: 'none', px: 5, background: 'var(--btn-grad)', color: 'var(--chip-text)' }}>Contact Us</Button>
                </Container>
            </Box>
        </main>
    );
}
