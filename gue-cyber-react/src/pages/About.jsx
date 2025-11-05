import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Grid, Box, Button, Container, Divider } from "@mui/material";
import logo from "../assets/logo.png";

export default function About() {
    return (
        <main>
            {/* Hero */}
            <Box sx={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', py: { xs: 6, md: 12 }, textAlign: 'center', minHeight: { xs: 420, md: 520 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Box component="img" src={logo} alt="GUE Cyber logo" sx={{ width: { xs: 100, md: 120 }, height: 'auto', background: 'transparent', p: 1, borderRadius: 1 }} />
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{ fontSize: { xs: 'var(--hero-h1-xs)', md: 'var(--hero-h1-md)' }, fontWeight: 900, mb: 2 }}
                            >
                                GUE CYBER LIMITED
                            </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 500, opacity: 0.95, mt: 1 }}>
                                        Cyber Security | Digital Transformation | Infrastructure & Technology | MSME Support
                                    </Typography>
                        </Box>
                    </Box>

                    <Typography variant="body1" sx={{ mt: 4, maxWidth: 900, mx: 'auto', color: 'var(--hero-text)', fontSize: '1.05rem' }}>
                        We combine cyber security expertise, systems engineering and practical digital transformation experience to help MSMEs and enterprises secure, modernize and scale their operations. Our teams design resilient infrastructure, protect critical data, and provide training to build internal security capacity.
                    </Typography>
                </Container>
            </Box>

            {/* Capabilities */}
            <Box sx={{ py: { xs: 6, md: 8 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 700, mb: 4, color: 'var(--hero-text)' }}>What We Do</Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {[{
                            title: 'Security Assessments & PenTesting',
                            body: 'Threat modelling, vulnerability assessments and penetration testing to identify and remediate security gaps.'
                        }, {
                            title: 'Infrastructure Hardening & Monitoring',
                            body: 'Secure architecture, network hardening and ongoing monitoring to protect services and critical systems.'
                        }, {
                            title: 'Digital Transformation & Secure Migration',
                            body: 'Modernisation of systems with secure design patterns and cloud/on-prem migration support.'
                        }, {
                            title: 'Training & Incident Preparedness',
                            body: 'Security awareness, tabletop exercises and hands-on technical training to improve incident response and resilience.'
                        }].map((c, idx) => (
                            <Grid item xs={12} md={6} lg={3} key={idx}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                    <Card elevation={1} sx={{ width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', p: 2, background: 'var(--card-bg)', textAlign: 'center' }}>
                                        <CardContent sx={{ p: 0 }}>
                                            <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: 'var(--hero-text)' }}>{c.title}</Typography>
                                            <Typography variant="body2" sx={{ color: 'var(--hero-text)' }}>{c.body}</Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ textAlign: 'center', mt: 5 }}>
                        <Button component={Link} to="/services" variant="contained" sx={{ textTransform: 'none', px: 4, py: 1.5 }}>Explore Services</Button>
                    </Box>
                </Container>
            </Box>

            {/* Sectors & ESG */}
            <Box sx={{ py: { xs: 6, md: 8 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ textAlign: 'center', mx: 'auto' }}>
                                <Typography variant="h4" fontWeight={700} sx={{ mb: 2, color: 'var(--hero-text)' }}>Sectors We Serve</Typography>
                                <Typography variant="body1" sx={{ mb: 2, color: 'var(--hero-text)', maxWidth: 640, mx: 'auto' }}>
                                    GUE Cyber supports organisations across sectors that rely on secure, resilient digital infrastructure: financial services & fintech, healthcare & pharmaceuticals, government & public sector, energy & utilities, industrial/manufacturing (including OT/ICS), education & research, and MSMEs. We tailor our services to sector-specific risk profiles and operational constraints.
                                </Typography>

                                <Typography variant="h6" fontWeight={700} sx={{ mt: 3, color: 'var(--hero-text)' }}>ESG, Compliance & Quality</Typography>
                                <Typography variant="body2" sx={{ color: 'var(--hero-text)', maxWidth: 640, mx: 'auto' }}>
                                    Security and compliance are core to our delivery. We embed privacy-by-design, regulatory alignment (local and international), supply-chain security, and operational resilience into every engagement. Our quality measures focus on measurable security outcomes, repeatable processes, and continual improvement across people, process and technology.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ p: 2, maxWidth: 420, width: '100%' }}>
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={700}>Our Approach</Typography>
                                        <Divider sx={{ my: 2 }} />
                                        <Grid container spacing={1}>
                                            {[
                                                ['Assess', 'Risk and asset discovery, threat modelling and vulnerability assessments to map exposure.'],
                                                ['Protect', 'Secure architecture, identity & access management, application and infrastructure hardening.'],
                                                ['Detect', 'Monitoring, logging, EDR/SIEM and continuous observability to spot incidents early.'],
                                                ['Respond & Recover', 'Incident response, forensics, containment and recovery planning to restore operations quickly.']
                                            ].map((row, i) => (
                                                <Grid item xs={12} key={i}>
                                                    <Typography variant="subtitle1" fontWeight={700}>{row[0]}</Typography>
                                                    <Typography variant="body2" color="text.secondary">{row[1]}</Typography>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Milestones + CTA */}
            <Box sx={{ py: { xs: 6, md: 8 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>Milestones & Registration</Typography>
                    <Typography variant="body2" sx={{ maxWidth: 900, mx: 'auto', mb: 3 }}>We began operations as a business offering ICT support in Makurdi and later incorporated to focus on cyber security, digital transformation and infrastructure services.</Typography>

                    <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                        {[['2010', 'Registered as BUSINESS NAME: GABBITO ICT WORLD — RC - MK3593 (Date of Registration: Mar 11, 2010) — Operating from Makurdi, offering ICT support services.'], ['2025', 'Incorporated as GUE CYBER LIMITED — RC - 8341363 (Date of Registration: Mar 15, 2025) — Rebranded and refocused on cyber security, digital transformation and infrastructure services.']].map((m, i) => (
                            <Grid item xs={12} md={6} key={i}>
                                <Card sx={{ p: 2, textAlign: 'left' }}>
                                    <Typography variant="h6" fontWeight={800}>{m[0]}</Typography>
                                    <Typography variant="body2" color="text.secondary">{m[1]}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Button component={Link} to="/contact" variant="contained" sx={{ textTransform: 'none', px: 5, py: 1.5 }}>Contact Our Team</Button>
                </Container>
            </Box>
        </main>
    );
}
