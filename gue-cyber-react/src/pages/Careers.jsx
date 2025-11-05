import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const openings = [
    {
        title: "Cybersecurity Analyst",
        type: "Remote",
        level: "Mid to Senior",
        description: "Perform threat hunting, vulnerability assessments, and security reviews to reduce exposure for our clients.",
        skills: ["Threat Modelling", "Vulnerability Assessment", "SIEM", "Incident Response"]
    },
    {
        title: "Penetration Tester / Red Team",
        type: "Contract / Remote",
        level: "Mid to Senior",
        description: "Lead authorised offensive security engagements and simulated adversary exercises to validate defences.",
        skills: ["OSINT", "Application Pentest", "Network Pentest", "Exploit Development"]
    },
    {
        title: "Security Engineer",
        type: "Hybrid",
        level: "Mid to Senior",
        description: "Design and implement secure infrastructure, hardening guidance and automations to reduce operational risk.",
        skills: ["Cloud Security", "IAM", "Infrastructure as Code", "Hardening & Automation"]
    },
    {
        title: "SOC Analyst / Incident Responder",
        type: "Remote / On-site",
        level: "Junior to Mid",
        description: "Monitor alerts, triage incidents, and support containment and recovery activities as part of our SOC operations.",
        skills: ["EDR", "SIEM", "Forensics", "Alert Triage"]
    },
    {
        title: "Cloud Security Engineer",
        type: "Remote",
        level: "Mid",
        description: "Secure cloud-native applications and platforms, implement controls and assist customers with secure migrations.",
        skills: ["AWS","Azure","GCP","Cloud Native Security", "CSPM"]
    }
];

export default function Careers() {
    return (
        <main>
            {/* Hero */}
            <Box sx={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', py: { xs: 6, md: 12 }, textAlign: 'center', minHeight: { xs: 420, md: 520 } }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: 'var(--hero-h1-xs)', md: 'var(--hero-h1-md)' }, fontWeight: 900, mb: 2 }}
                    >
                       CAREERS AT GUE CYBER LIMITED
                    </Typography>
                
                    <Typography variant="h5" sx={{ fontWeight: 500, opacity: 0.95, mb: 2 }}>Join our cyber security team</Typography>
                    <Typography variant="body1" sx={{ maxWidth: 760, mx: 'auto' }}>Work on practical cybersecurity engagements — threat hunting, red-teaming, secure cloud engineering, SOC operations and incident response — with a team that values continuous learning, security-first design, and measurable outcomes.</Typography>

                    <Box sx={{ mt: 3 }}>
                        <Button component={Link} to="/contact" variant="contained" sx={{ textTransform: 'none', px: 4, background: 'var(--btn-grad)', color: 'var(--chip-text)' }}>Get Notified About Openings</Button>
                    </Box>
                </Container>
            </Box>

            {/* Why Work With Us */}
            <Box sx={{ py: { xs: 5, md: 7 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" fontWeight={700} textAlign="center" mb={4} sx={{ color: 'var(--hero-text)' }}>Why Work With Us</Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {[['Global Collaboration', 'Work with experienced professionals across engineering and technology.'], ['Impactful Projects', 'Deliver solutions that improve productivity and environmental performance.'], ['Learning & Growth', 'Structured training programs and mentorship to grow your skills.']].map((b, i) => (
                            <Grid item xs={12} md={4} key={i}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                    <Card sx={{ p: 3, height: '100%', background: 'var(--card-bg)', textAlign: 'center', width: '100%', maxWidth: 360 }}>
                                        <CardContent sx={{ p: 0 }}>
                                            <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: 'var(--link-color)' }}>{b[0]}</Typography>
                                            <Typography variant="body2" sx={{ color: 'var(--hero-text)' }}>{b[1]}</Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Current Openings */}
            <Box sx={{ py: { xs: 5, md: 7 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" fontWeight={700} textAlign="center" mb={2} sx={{ color: 'var(--hero-text)' }}>Current Opportunities</Typography>
                    <Typography variant="body1" textAlign="center" mb={4} sx={{ color: 'var(--hero-text)' }}>We post openings periodically. If a role above matches your skills, apply via email or use the contact form.</Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {openings.map((job, idx) => (
                            <Grid item xs={12} md={6} key={idx}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                                    <Card sx={{ p: 3, width: '100%', maxWidth: 640, background: 'var(--card-bg)' }}>
                                        <CardContent sx={{ textAlign: 'center' }}>
                                            <Typography variant="h5" fontWeight={700} sx={{ color: 'var(--link-color)', mb: 1 }}>{job.title}</Typography>
                                            <Chip label={job.type} size="small" sx={{ mb: 1, color: '#ffffff', background: 'transparent', border: '1px solid rgba(255,255,255,0.08)' }} />
                                            <Typography variant="body1" sx={{ mb: 2, color: 'var(--hero-text)' }}>{job.description}</Typography>
                                            <Divider sx={{ my: 2 }} />
                                            <Typography variant="subtitle2" fontWeight={700} mb={1} sx={{ color: '#ffffff' }}>Key Skills</Typography>
                                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2, justifyContent: 'center' }}>
                                                {job.skills.map((s, i2) => (
                                                    <Chip key={i2} label={s} size="small" sx={{ bgcolor: 'var(--link-color)', color: 'var(--chip-text)', fontWeight: 600 }} />
                                                ))}
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                                <Button href={`mailto:info@guecyber.com?subject=Application: ${encodeURIComponent(job.title)}`} variant="contained" sx={{ textTransform: 'none' }}>Apply</Button>
                                                <Button component={Link} to="/contact" variant="outlined" sx={{ textTransform: 'none' }}>Contact</Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Culture */}
            <Box sx={{ py: { xs: 5, md: 7 }, background: 'var(--section-bg)', color: 'var(--hero-text)' }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={700} mb={2}>Our Work Culture</Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>We believe in safety, accountability and continuous improvement. Our remote-first model supports productivity while ensuring teams have what they need to succeed.</Typography>
                    <Button component={Link} to="/contact" variant="contained" sx={{ textTransform: 'none' }}>Get In Touch</Button>
                </Container>
            </Box>
        </main>
    );
}