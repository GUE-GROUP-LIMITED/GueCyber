import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.webp";
import { Box, Container, Grid, Typography, Stack, IconButton, Divider, Button, TextField, Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { supabase } from "../lib/supabase";

async function sendNewsletterAcknowledgment(email) {
    const functionName = import.meta.env.VITE_SUPABASE_NEWSLETTER_ACK_FUNCTION_NAME || "send-newsletter-ack";

    const { error } = await supabase.functions.invoke(functionName, {
        body: {
            email,
            subscribedAt: new Date().toISOString(),
        },
    });

    if (error) {
        throw error;
    }
}

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterConsent, setNewsletterConsent] = useState(false);
    const [newsletterError, setNewsletterError] = useState("");
    const [newsletterMessage, setNewsletterMessage] = useState("");
    const [newsletterLoading, setNewsletterLoading] = useState(false);

    const handleNewsletterSubmit = async (event) => {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!newsletterEmail.trim()) {
            setNewsletterError(t('footer.form.emailRequired'));
            setNewsletterMessage("");
            return;
        }

        if (!emailPattern.test(newsletterEmail.trim())) {
            setNewsletterError(t('footer.form.emailInvalid'));
            setNewsletterMessage("");
            return;
        }

        if (!newsletterConsent) {
            setNewsletterError(t('footer.form.consentRequired'));
            setNewsletterMessage("");
            return;
        }

        setNewsletterLoading(true);
        setNewsletterError("");
        setNewsletterMessage("");

        try {
            const { error } = await supabase
                .from('subscribers')
                .insert([
                    {
                        email: newsletterEmail.trim(),
                        consented: true,
                        subscribed: true,
                        created_at: new Date().toISOString(),
                    }
                ]);

            if (error) {
                if (error.code === '23505') {
                    setNewsletterError(t('footer.form.alreadySubscribed'));
                } else {
                    setNewsletterError(t('footer.form.submitFailed'));
                }
                return;
            }

            setNewsletterError("");
            setNewsletterMessage(t('footer.form.successMessage'));
            setNewsletterEmail("");
            setNewsletterConsent(false);

            try {
                await sendNewsletterAcknowledgment(newsletterEmail.trim().toLowerCase());
            } catch (ackError) {
                console.warn("Newsletter subscription saved but acknowledgment email failed.", ackError);
            }
        } catch (err) {
            setNewsletterError(t('footer.form.unexpectedError'));
        } finally {
            setNewsletterLoading(false);
        }
    };

    const sections = [
        {
            titleKey: "footer.platform",
            links: [
                { labelKey: "common.services", to: "/services" },
                { labelKey: "footer.howWeWork", to: "/about" },
                { labelKey: "common.contact", to: "/contact" }
            ]
        },
        {
            titleKey: "footer.resources",
            links: [
                { labelKey: "common.careers", to: "/careers" },
                { labelKey: "footer.support", to: "/contact" }
            ]
        },
        {
            titleKey: "footer.company",
            links: [
                { labelKey: "common.about", to: "/about" },
                { labelKey: "common.privacy", to: "/privacy" },
                { labelKey: "common.terms", to: "/terms" },
                { labelKey: "common.cookiePolicy", to: "/cookie-policy" }
            ]
        }
    ];

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: '#fff7ed',
                backgroundImage: 'url(/images/footer-waves-left-bottom.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                backgroundSize: { xs: '360px auto', md: '560px auto' },
                color: 'var(--primary)',
                pt: { xs: 6, md: 8 },
                pb: 6,
                borderTop: '1px solid rgba(15,23,42,0.08)'
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    sx={{
                        mb: { xs: 8, md: 10 },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 380px' },
                        columnGap: { xs: 0, md: 6, lg: 8 },
                        rowGap: { xs: 5, md: 0 },
                        alignItems: 'start'
                    }}
                >
                    <Box>
                        <Box component={Link} to="/" sx={{ display: 'inline-flex', alignItems: 'center', gap: { xs: 1.2, md: 2 }, textDecoration: 'none', mb: 2.5 }}>
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    px: { xs: 0.7, md: 0.9 },
                                    py: { xs: 0.35, md: 0.45 },
                                    background: '#022c22',
                                    boxShadow: '0 8px 16px rgba(2,44,34,0.18)',
                                    transition: 'all 0.25s ease',
                                }}
                            >
                                <Box component="img" src={logo} alt="Gue Cyber" loading="lazy" decoding="async" sx={{ height: { xs: 36, md: 46, lg: 50 }, width: 'auto', display: 'block' }} />
                            </Box>
                        </Box>

                        <Typography sx={{ color: '#334155', fontSize: { xs: '0.95rem', md: '1rem' } }}>
                            {t('footer.description')}
                        </Typography>

                        <Grid container spacing={4}>
                            {sections.map((section, idx) => (
                                <Grid item xs={6} md={4} key={idx}>
                                    <Typography
                                        sx={{
                                            fontWeight: 800,
                                            mb: 2.5,
                                            color: 'var(--primary)',
                                            letterSpacing: '0.12em',
                                            fontSize: '0.74rem',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {t(section.titleKey)}
                                    </Typography>
                                    <Stack spacing={1.5}>
                                        {section.links.map((link, lIdx) => (
                                            <Box
                                                key={lIdx}
                                                component={Link}
                                                to={link.to}
                                                sx={{
                                                    color: '#475569',
                                                    textDecoration: 'none',
                                                    fontSize: '0.94rem',
                                                    fontWeight: 600,
                                                    transition: 'all 0.25s ease',
                                                    '&:hover': { color: 'var(--accent)' }
                                                }}
                                            >
                                                {t(link.labelKey)}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            justifySelf: { xs: 'stretch', md: 'end' },
                            width: '100%',
                            maxWidth: 380,
                            background: '#022c22',
                            borderRadius: 2,
                            p: 4
                        }}
                    >
                        <Typography sx={{ color: '#f8fafc', fontSize: { xs: '1.2rem', md: '1.3rem' }, fontWeight: 600, mb: 1.3, lineHeight: 1.35 }}>
                            {t('footer.newsletter')}
                        </Typography>
                        <Typography sx={{ color: 'rgba(226,232,240,0.82)', fontSize: '0.9rem', mb: 4.2, lineHeight: 1.65 }}>
                            {t('footer.newsletterDesc')}
                        </Typography>

                        <Stack component="form" spacing={1.4} onSubmit={handleNewsletterSubmit} noValidate>
                            <TextField
                                value={newsletterEmail}
                                onChange={(event) => {
                                    setNewsletterEmail(event.target.value);
                                    setNewsletterError("");
                                    setNewsletterMessage("");
                                }}
                                inputProps={{ 'aria-label': 'Newsletter email address' }}
                                fullWidth
                                size="small"
                                placeholder={t('footer.email')}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: 48,
                                        borderRadius: '999px',
                                        background: '#ffffff'
                                    }
                                }}
                            />
                            <FormControlLabel
                                sx={{ alignItems: 'flex-start', mt: -0.4, color: 'rgba(226,232,240,0.86)' }}
                                control={
                                    <Checkbox
                                        checked={newsletterConsent}
                                        onChange={(event) => {
                                            setNewsletterConsent(event.target.checked);
                                            setNewsletterError("");
                                            setNewsletterMessage("");
                                        }}
                                        sx={{ color: '#94a3b8', pt: 0.15, mr: 1, '&.Mui-checked': { color: '#a3e635' } }}
                                    />
                                }
                                label={
                                    <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: 'rgba(226,232,240,0.86)' }}>
                                        {t('footer.form.consent')}{' '}
                                        <Box component={Link} to="/privacy" sx={{ color: '#d9f99d', fontWeight: 700, textDecoration: 'none' }}>
                                            {t('common.privacy')}
                                        </Box>.
                                    </Typography>
                                }
                            />
                            {newsletterError ? (
                                <FormHelperText sx={{ mt: -0.5, color: '#fca5a5', fontWeight: 600 }}>
                                    {newsletterError}
                                </FormHelperText>
                            ) : null}
                            <Button
                                type="submit"
                                variant="contained"
                                aria-label="Subscribe newsletter"
                                disabled={newsletterLoading}
                                sx={{
                                    bgcolor: '#a3e635',
                                    color: '#052e2b',
                                    fontWeight: 800,
                                    minHeight: 48,
                                    py: 0,
                                    opacity: newsletterLoading ? 0.7 : 1,
                                    cursor: newsletterLoading ? 'not-allowed' : 'pointer',
                                    '&:hover': { bgcolor: newsletterLoading ? '#a3e635' : '#bef264' }
                                }}
                            >
                                {newsletterLoading ? t('footer.form.submitting') : t('common.subscribe')}
                            </Button>
                            {newsletterMessage ? (
                                <Typography sx={{ color: '#bbf7d0', fontSize: '0.86rem', lineHeight: 1.55 }}>
                                    {newsletterMessage}
                                </Typography>
                            ) : null}
                        </Stack>
                    </Box>
                </Box>

                <Divider sx={{ mb: 5, borderColor: 'rgba(15,23,42,0.1)' }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2.5
                    }}
                >
                    <Stack direction="row" spacing={1.2}>
                        {[
                            { icon: <LinkedInIcon />, label: 'LinkedIn profile' },
                            { icon: <TwitterIcon />, label: 'X profile' },
                            { icon: <FacebookIcon />, label: 'Facebook profile' }
                        ].map((item, i) => (
                            <IconButton
                                key={i}
                                component="a"
                                href="#"
                                aria-label={item.label}
                                sx={{
                                    color: 'var(--primary)',
                                    background: '#ffffff',
                                    border: '1px solid var(--border)',
                                    p: 1.2,
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        background: 'var(--accent)',
                                        color: '#ffffff',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                {item.icon}
                            </IconButton>
                        ))}
                    </Stack>

                    <Typography sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                        {t('footer.copyright', { year })}
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                        <Button
                            component={Link}
                            to="/careers"
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                borderColor: 'rgba(15,23,42,0.15)',
                                color: 'var(--primary)',
                                px: 2.4,
                                py: 0.85,
                                fontWeight: 700,
                                '&:hover': { borderColor: 'var(--accent)', color: 'var(--accent)' }
                            }}
                        >
                            Explore Careers
                        </Button>
                        <Typography
                            component={Link}
                            to="/privacy"
                            sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'var(--accent)' } }}
                        >
                            Privacy
                        </Typography>
                        <Typography
                            component={Link}
                            to="/terms"
                            sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'var(--accent)' } }}
                        >
                            Terms
                        </Typography>
                        <Typography
                            component={Link}
                            to="/cookie-policy"
                            sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, '&:hover': { color: 'var(--accent)' } }}
                        >
                            Cookie Policy
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}