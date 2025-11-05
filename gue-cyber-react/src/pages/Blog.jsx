import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';

const blogPosts = [
  {
    title: 'How AI is Transforming Engineering Workflows',
    summary: 'AI is enabling smarter predictive maintenance, automated inspection and faster design iteration. We explore practical use-cases for manufacturers and engineering teams.',
    link: '#',
    date: '2025-08-10',
    tags: ['AI', 'Manufacturing']
  },
  {
    title: 'Practical Steps to Industrial Automation for MSMEs',
    summary: 'A hands-on guide for small and medium manufacturers looking to introduce PLCs, sensors and SCADA on a budget and with measurable ROI.',
    link: '#',
    date: '2025-03-22',
    tags: ['Automation', 'MSME']
  }
];

export default function Blog() {
  return (
    <main>
      <Box sx={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', py: { xs: 6, md: 12 }, textAlign: 'center', minHeight: { xs: 420, md: 520 } }}>
        <Container maxWidth="lg">
          <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: 'var(--hero-h1-xs)', md: 'var(--hero-h1-md)' }, fontWeight: 900, mb: 2 }}
                    >
                       INSIGHTS & ARTICLES FROM GUE CYBER LIMITED
                    </Typography>
          
          <Typography variant="h5" sx={{ fontWeight: 500, opacity: 0.95, mb: 2 }}>Thought leadership on cyber security, digital transformation and infrastructure</Typography>
          <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto' }}>Our team publishes practical articles, case studies and guides to help practitioners and managers secure systems and manage digital transformation safely.</Typography>
          <Box sx={{ mt: 3 }}>
            <Button href="mailto:info@guecyber.com?subject=Subscribe%20to%20GUE%20Cyber%20updates" variant="outlined" sx={{ textTransform: 'none' }}>Subscribe</Button>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h4" fontWeight={700} mb={4} textAlign="center" sx={{ color: 'var(--hero-text)' }}>Trends, Insights & Case Studies</Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--card-bg)' }}>
                <CardContent sx={{ flex: '1 0 auto', textAlign: 'center', color: 'var(--hero-text)' }}>
                  <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: 'var(--link-color)' }}>{post.title}</Typography>
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, color: 'var(--muted-text)' }}>{new Date(post.date).toLocaleDateString()}</Typography>
                  <Typography variant="body1" sx={{ color: 'var(--hero-text)', mx: 'auto', maxWidth: 600 }}>{post.summary}</Typography>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                    {post.tags.map((t) => <Chip key={t} label={t} size="small" sx={{ bgcolor: 'var(--link-color)', color: 'var(--chip-text)' }} />)}
                  </Box>
                  <Box sx={{ flex: 1 }} />
                  <Button size="small" href={post.link} variant="outlined" sx={{ ml: 'auto' }}>Read More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
