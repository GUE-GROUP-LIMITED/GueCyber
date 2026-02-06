import { Box, Typography, Container, Grid, Button, Chip, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Blog() {
  const blogPosts = [
    { title: 'Threat Hunting 2025: Tactical Workflows', summary: 'A deep dive into hypothesises-driven hunts and telemetry triage for modern SOC environments.', date: 'Oct 12, 2025', tags: ['Tactical', 'Intelligence'], image: '/img/gue (1).jpg' },
    { title: 'The Zero-Trust Roadmap for SME Operations', summary: 'Incremental implementation strategies for identity-driven security without enterprise budgets.', date: 'Jun 03, 2025', tags: ['Strategy', 'SME'], image: '/img/gue (2).jpg' }
  ];

  return (
    <main>
      {/* Mesh Background */}
      <div className="mesh-bg">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
      </div>

      <Box sx={{ pt: { xs: 'var(--hero-pt-mobile)', md: 'var(--hero-pt-desktop)' }, pb: { xs: 'var(--section-py-mobile)', md: 'var(--section-py-desktop)' } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 15 } }} className="reveal-up">
            <Typography variant="overline" sx={{ fontWeight: 900, color: '#10B981', letterSpacing: '0.4em', mb: 2, display: 'block', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>RESOURCES</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1 }}>ELITE <Box component="span" sx={{ color: '#10B981', fontStyle: 'italic' }}>INTELLIGENCE</Box></Typography>
            <Typography sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.25rem' }, px: 2 }}>Strategic and tactical briefs from our engineering labs.</Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {blogPosts.map((post, idx) => (
              <Grid item xs={12} md={6} key={idx} className={`reveal-up delay-${idx + 1}`}>
                <Box className="glass-card" sx={{ height: '100%', borderRadius: { xs: '32px', md: '48px' }, overflow: 'hidden' }}>
                  <Box sx={{ height: { xs: 240, sm: 300, md: 350 }, backgroundImage: `url('${post.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <Stack direction="row" spacing={1} sx={{ position: 'absolute', top: { xs: 20, md: 30 }, left: { xs: 20, md: 30 } }}>
                      {post.tags.map(t => <Chip key={t} label={t} sx={{ background: '#1a1a1a', color: '#fff', fontWeight: 900, borderRadius: '8px', fontSize: { xs: '0.7rem', md: '0.8rem' } }} />)}
                    </Stack>
                  </Box>
                  <Box sx={{ p: { xs: 4, sm: 6, md: 8 } }}>
                    <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
                      <CalendarTodayIcon sx={{ fontSize: { xs: 16, md: 18 }, color: '#888' }} />
                      <Typography sx={{ color: '#888', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>{post.date}</Typography>
                    </Stack>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.2, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>{post.title}</Typography>
                    <Typography sx={{ color: '#666', lineHeight: 1.8, mb: { xs: 4, md: 6 }, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>{post.summary}</Typography>
                    <Button variant="text" sx={{ fontWeight: 900, color: '#1a1a1a', p: 0, fontSize: { xs: '1rem', md: '1.1rem' }, '&:hover': { color: '#10B981' } }}>Full Report →</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
