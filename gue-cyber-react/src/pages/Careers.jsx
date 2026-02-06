import { Box, Typography, Container, Grid, Button, Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

export default function Careers() {
    const openings = [
        { title: "Cybersecurity Analyst", type: "Remote", level: "Mid-Senior", skills: ["Threat Hunting", "Vulnerability Assessment", "SIEM"] },
        { title: "Red Team Specialist", type: "Hybrid", level: "Senior", skills: ["Exploit Dev", "OSINT", "Red Teaming"] }
    ];

    return (
        <main>
            <div className="mesh-bg">
                <div className="mesh-blob mesh-blob-1"></div>
                <div className="mesh-blob mesh-blob-2"></div>
            </div>

            <Box sx={{ pt: { xs: 'var(--hero-pt-mobile)', md: 'var(--hero-pt-desktop)' }, pb: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' } }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 15 } }} className="reveal-up">
                        <Typography variant="overline" sx={{ fontWeight: 900, color: '#10B981', letterSpacing: '0.4em', mb: 2, display: 'block', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>RECRUITMENT</Typography>
                        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1 }}>JOIN THE <Box component="span" sx={{ color: '#10B981', fontStyle: 'italic' }}>ELITE</Box></Typography>
                        <Typography sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: 650, mx: 'auto', px: 2 }}>We are looking for individuals who view cyber defense as a craft, not just a job.</Typography>
                    </Box>

                    <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 10, md: 15 } }}>
                        {[
                            { icon: <GroupsIcon />, title: "Elite Collaboration", desc: "Forge strategies with the best security practitioners in the region." },
                            { icon: <WorkIcon />, title: "Tier-1 Impact", desc: "Defend systems that matter. Work on critical national infrastructure." },
                            { icon: <SchoolIcon />, title: "Continuous Evolution", desc: "Generous training budgets and R&D time for every engineer." }
                        ].map((benefit, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Box className="glass-card reveal-up" sx={{ p: { xs: 4, md: 6 }, textAlign: 'center', borderRadius: { xs: '32px', md: '48px' }, height: '100%' }}>
                                    <Box sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, borderRadius: { xs: '18px', md: '24px' }, background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', mx: 'auto', mb: 3, '& svg': { fontSize: { xs: 28, md: 36 } } }}>{benefit.icon}</Box>
                                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: '#1a1a1a', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{benefit.title}</Typography>
                                    <Typography sx={{ color: '#666', lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>{benefit.desc}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 900, mb: { xs: 6, md: 8 }, fontSize: { xs: '2rem', md: '3rem' } }}>MISSION OPENINGS</Typography>
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        {openings.map((job, idx) => (
                            <Grid item xs={12} md={6} key={idx}>
                                <Box className="glass-card reveal-up" sx={{ p: { xs: 4, sm: 6, md: 8 }, borderRadius: { xs: '32px', md: '48px' } }}>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} mb={4} gap={2}>
                                        <Box>
                                            <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>{job.title}</Typography>
                                            <Typography sx={{ color: '#10B981', fontWeight: 800, fontSize: '0.9rem' }}>{job.level} • {job.type}</Typography>
                                        </Box>
                                        <Chip label="ACTIVE" sx={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', fontWeight: 900, borderRadius: '8px' }} />
                                    </Stack>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: { xs: 4, md: 6 } }}>
                                        {job.skills.map(s => <Box key={s} sx={{ px: 2.5, py: 0.75, background: '#f5f5f5', borderRadius: '100px', fontWeight: 800, fontSize: '0.75rem', color: '#1a1a1a' }}>{s}</Box>)}
                                    </Box>
                                    <Button fullWidth variant="contained" sx={{ py: 2, borderRadius: '100px', background: '#1a1a1a', color: '#fff', fontWeight: 800, fontSize: { xs: '0.9rem', md: '1rem' }, '&:hover': { background: '#10B981' } }}>Apply for Mission</Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </main>
    );
}