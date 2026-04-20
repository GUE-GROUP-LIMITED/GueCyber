import { Box, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  const { t } = useTranslation();
  return (
    <main>
      <Box sx={{ position: "relative", py: { xs: 12, md: 17 }, overflow: "hidden", background: "#ffffff" }}>
        <Box
          component="img"
          src="/images/about-lines.svg"
          alt=""
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: { xs: 170, md: 280 },
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography sx={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem", mb: 2 }}>
            {t('legal.legal')}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", sm: "3.8rem", md: "4.8rem" }, lineHeight: 1.03, mb: 2.2 }}>
            {t('legal.cookiePolicy')}
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: 760, mx: "auto", fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.65 }}>
            {t('legal.cookiePolicyDescription')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#a3e635", borderRadius: { xs: 4, md: 5 }, px: { xs: 2.5, md: 6 }, py: { xs: 4, md: 5 } }}>
            <Typography variant="h4" sx={{ color: "#052e2b", mb: 1.2 }}>
              What this means
            </Typography>
            <Typography sx={{ color: "#10403d", lineHeight: 1.75 }}>
              We do not set cookies for behavioral analytics, remarketing, or ad personalization. We use only essential
              browser storage to remember your privacy preference and to keep the consent banner from showing repeatedly.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 13 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ p: { xs: 3, md: 5 }, border: "1px solid var(--border)", borderRadius: 4, boxShadow: "var(--shadow-sm)" }}>
            <Typography variant="h5" sx={{ mb: 1.2 }}>Future changes</Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>
              If cookie-based integrations are introduced in the future, such as support widgets or analytics tools, this
              page will be updated with clear details and user control options.
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.2 }}>Consent controls</Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>
              You can clear your browser storage at any time to remove the saved privacy notice acknowledgement. Doing so
              will cause the notice to appear again on your next visit.
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.2 }}>Questions</Typography>
            <Typography sx={{ color: "var(--text-muted)" }}>
              For any privacy or cookie-related question, contact us at info@guecyber.com.
            </Typography>
          </Box>
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
              Need more details?
            </Typography>
            <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760, mb: 3.2 }}>
              Contact our team for data handling clarification or compliance-related enquiries.
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
