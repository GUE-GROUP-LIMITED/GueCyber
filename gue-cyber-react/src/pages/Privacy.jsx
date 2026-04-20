import { Box, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function Privacy() {
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
            {t('legal.privacy')}
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: 760, mx: "auto", fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.65 }}>
            {t('legal.privacyDescription')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#a3e635", borderRadius: { xs: 4, md: 5 }, px: { xs: 2.5, md: 6 }, py: { xs: 4, md: 5 } }}>
            <Typography sx={{ fontWeight: 800, color: "#052e2b", mb: 1 }}>At a glance</Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "#10403d", lineHeight: 1.8 }}>
              <Typography component="li">We do not use analytics cookies or advertising trackers.</Typography>
              <Typography component="li">We use essential browser storage only to remember your privacy preference.</Typography>
              <Typography component="li">We collect data you submit through forms or direct contact.</Typography>
              <Typography component="li">Requests can be sent to info@guecyber.com.</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 13 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ p: { xs: 3, md: 5 }, border: "1px solid var(--border)", borderRadius: 4, boxShadow: "var(--shadow-sm)" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Information we collect</Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>
              We collect personal information you choose to provide, including name, email address, organization details,
              service preferences, and message content submitted through our contact and newsletter forms.
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.2 }}>How we use your data</Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>
              We use this information to respond to enquiries, manage newsletter subscriptions, provide requested services,
              and support legitimate business operations. We do not sell or rent personal data.
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.2 }}>Sharing and processors</Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>
              We may share data only with essential service providers such as email and hosting infrastructure providers,
              and only where appropriate protections are in place. We do not use advertising or behavioral analytics vendors.
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.2 }}>Retention and rights</Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>
              Contact enquiries are kept for up to 24 months after last interaction unless longer retention is required for
              legal or contractual reasons. Newsletter records are kept until you unsubscribe. You may request access,
              correction, deletion, restriction, or objection by emailing info@guecyber.com.
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.2 }}>Lawful basis</Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>
              We process enquiry data under legitimate interests and contract-related steps when you ask us to provide a
              service. Newsletter communication is sent only where you have given consent.
            </Typography>

            <Typography variant="h5" sx={{ mb: 1.2 }}>International operations</Typography>
            <Typography sx={{ color: "var(--text-muted)" }}>
              We serve clients across multiple jurisdictions. Where cross-border data processing applies, lawful safeguards
              and appropriate data protection mechanisms are used to ensure compliance with all applicable regulations.
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
              Questions about privacy?
            </Typography>
            <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760, mb: 3.2 }}>
              Contact our team for any privacy request, clarification, or compliance concern.
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
