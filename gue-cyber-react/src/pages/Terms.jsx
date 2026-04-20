import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function Terms() {
  const { t } = useTranslation();
  const termsBlocks = [
    {
      title: "Acceptance and scope",
      text: "By using our website or services, you agree to these Terms of Service. If you act on behalf of an organization, you confirm authority to bind that organization.",
    },
    {
      title: "Service usage obligations",
      text: "You must use our services lawfully and responsibly. Misuse, unauthorized access attempts, impersonation, and harmful content are prohibited.",
    },
    {
      title: "Intellectual property",
      text: "All platform content, brand materials, and service assets are owned by Gue Cyber or our licensors, unless otherwise stated in writing.",
    },
    {
      title: "Liability and disclaimers",
      text: "To the extent permitted by law, Gue Cyber is not liable for indirect or consequential losses including data loss, business interruption, or third-party actions.",
    },
    {
      title: "Changes to terms",
      text: "We may update these terms from time to time. Continued use after publication of updates constitutes acceptance of the revised terms.",
    },
    {
      title: "Governing law",
      text: "These terms are governed by applicable international law and regulations of the jurisdictions where services are provided, subject to mandatory protections available in all applicable jurisdictions.",
    },
    {
      title: "Form submissions and privacy",
      text: "When you submit contact or newsletter details, you confirm that the information is accurate and acknowledge our Privacy Policy. We process those details only for the purposes described there.",
    },
  ];

  return (
    <main>
      <Box sx={{ position: "relative", py: { xs: 12, md: 17 }, overflow: "hidden", background: "#ffffff" }}>
        <Box
          component="img"
          src="/images/pricing-waves-right-top.png"
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: 180, md: 340 },
            opacity: 0.35,
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography sx={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem", mb: 2 }}>
            {t('legal.legal')}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", sm: "3.8rem", md: "4.8rem" }, lineHeight: 1.03, mb: 2.2 }}>
            {t('legal.terms')}
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: 760, mx: "auto", fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.65 }}>
            {t('legal.termsDescription')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#a3e635", borderRadius: { xs: 4, md: 5 }, px: { xs: 2.5, md: 6 }, pt: { xs: 4.5, md: 6.5 }, pb: { xs: 5, md: 7 } }}>
            <Typography variant="h4" sx={{ color: "#052e2b", mb: 1.2 }}>
              Key points
            </Typography>
            <Typography sx={{ color: "#10403d", maxWidth: 900 }}>
              Use of this website means acceptance of these terms, lawful usage obligations, and acknowledgement of our
              intellectual property and liability clauses.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 13 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3.5}>
            {termsBlocks.map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, border: "1px solid var(--border)", height: "100%", boxShadow: "var(--shadow-sm)" }}>
                  <Typography variant="h5" sx={{ mb: 1.1 }}>{item.title}</Typography>
                  <Typography sx={{ color: "var(--text-muted)" }}>{item.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 }, background: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              maxWidth: { xs: "100%", lg: 1200 },
              mx: "auto",
              borderRadius: { xs: 4, md: 5 },
              bgcolor: "#022c22",
              px: { xs: 3, md: 10 },
              py: { xs: 5.5, md: 8.5 },
            }}
          >
            <Typography variant="h2" sx={{ color: "#fff", fontSize: { xs: "2rem", md: "2.9rem" }, mb: 1.2, lineHeight: 1.1 }}>
              Need clarification on terms?
            </Typography>
            <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760, mb: 3.2 }}>
              Reach out to our team and we will clarify service scope, obligations, and engagement terms.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#a3e635",
                color: "#052e2b",
                borderRadius: 999,
                px: 3.8,
                py: 1.2,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: "#bef264" },
              }}
            >
              Contact us
            </Button>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
