import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Card, CardContent, Alert, Chip } from '@mui/material';
import FAQ from '../components/FAQ';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a mailto fallback so users can open their email client with the message pre-filled.
    const subject = `Inquiry from ${form.name || 'Website Visitor'}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
  const mailto = `mailto:info@guecyber.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open user's mail client; this is a graceful fallback when no backend is configured.
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
  <Box sx={{ background: 'var(--hero-bg)', color: 'var(--hero-text)', py: { xs: 6, md: 12 }, textAlign: 'center', minHeight: { xs: 420, md: 520 } }}>
        <Container maxWidth="md">
          <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: 'var(--hero-h1-xs)', md: 'var(--hero-h1-md)' }, fontWeight: 900, mb: 2 }}
                    >
                        GET IN TOUCH - GUE CYBER LIMITED
                    </Typography>
           
          <Typography variant="h5" sx={{ fontWeight: 500, opacity: 0.95, mb: 2 }}>Let's secure your systems and protect your data</Typography>
          <Typography variant="body1" sx={{ maxWidth: 760, mx: 'auto' }}>Tell us about your cybersecurity needs, digital transformation plans or infrastructure concerns and our team will respond with next steps.</Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
            <Chip label="Fast response" sx={{ bgcolor: 'primary.main', color: 'var(--chip-text)', fontWeight: 700 }} />
            <Chip label="On-site & Remote" sx={{ bgcolor: 'secondary.main', color: 'var(--chip-text)', fontWeight: 700 }} />
          </Box>
        </Container>
      </Box>

      {/* Form & Contact Details */}
  <Box sx={{ py: { xs: 5, md: 8 }, background: 'var(--section-bg)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3, height: '100%', background: 'var(--card-bg)' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 2, color: 'var(--hero-text)' }}>Send Us a Message</Typography>
                    {submitted ? (
                    <Alert severity="success">Your email client should open with a pre-filled message — if it doesn't, please email <a href="mailto:info@guecyber.com">info@guecyber.com</a>.</Alert>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <TextField name="name" label="Full name" value={form.name} onChange={handleChange} fullWidth required sx={{ mb: 2 }} InputLabelProps={{ sx: { color: 'var(--hero-text)' } }} InputProps={{ sx: { color: 'var(--hero-text)' } }} />
                      <TextField name="email" label="Email address" type="email" value={form.email} onChange={handleChange} fullWidth required sx={{ mb: 2 }} InputLabelProps={{ sx: { color: 'var(--hero-text)' } }} InputProps={{ sx: { color: 'var(--hero-text)' } }} />
                      <TextField name="message" label="Message" value={form.message} onChange={handleChange} fullWidth required multiline rows={6} sx={{ mb: 2 }} InputLabelProps={{ sx: { color: 'var(--hero-text)' } }} InputProps={{ sx: { color: 'var(--hero-text)' } }} />
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" variant="contained" sx={{ textTransform: 'none' }}>Open Email Client</Button>
                      </Box>
                    </form>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card sx={{ p: 3, height: '100%', background: 'var(--card-bg)' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 2, color: 'var(--hero-text)' }}>Contact Information</Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: 'var(--hero-text)' }}>Email: <a href="mailto:info@guecyber.com">info@guecyber.com</a></Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: 'var(--hero-text)' }}>WhatsApp: <a href="https://wa.me/2347046952003?text=Hello%20GUE%20CYBER" target="_blank" rel="noopener noreferrer">+234 704 695 2003</a></Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: 'var(--hero-text)' }}>Response time: Typically within 24 hours</Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: 'var(--hero-text)' }}>Operating model: Remote-first; on-site services available where required</Typography>

                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button component="a" href="mailto:info@guecyber.com" variant="outlined" sx={{ textTransform: 'none' }}>Email Us</Button>
                    <Button component="a" href="https://wa.me/2347046952003" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ textTransform: 'none' }}>WhatsApp</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: { xs: 4, md: 6 }, background: 'var(--section-bg)' }}>
        <Container maxWidth="md">
          <FAQ />
        </Container>
      </Box>
    </main>
  );
}