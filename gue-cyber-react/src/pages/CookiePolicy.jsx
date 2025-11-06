import { Typography, Card, CardContent, Box, Grid } from "@mui/material";

export default function CookiePolicy() {
  return (
    <main>
      <Box sx={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', py: 8, textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={800} mb={2} sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
          Cookie Policy
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>
          Short version: this website does not use cookies or third-party tracking tools. We do not store or read cookies on your device.
        </Typography>
      </Box>

      <Box sx={{ py: 6, background: 'var(--section-bg)' }}>
        <Grid container spacing={4} sx={{ maxWidth: 1000, mx: 'auto', px: 3 }}>
          <Grid item xs={12}>
            <Card sx={{ background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>What this means</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  We do not use analytics cookies, advertising cookies, or any persistent identifiers. Your visit is not tracked by this site.
                </Typography>
                <Typography variant="body2" color="var(--muted-text)">If any third-party integration that uses cookies is added in the future (for example, a chat widget), we will disclose it here and provide ways to opt out.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>Questions?</Typography>
                <Typography variant="body1">If you have questions about privacy or cookies, contact us at <a href="mailto:info@guecyber.com" style={{ color: 'var(--link-color)' }}>info@guecyber.com</a>.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
