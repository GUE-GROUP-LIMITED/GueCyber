import { useEffect, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const STORAGE_KEY = "guecyber-privacy-notice";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    setVisible(storedValue !== "acknowledged");
  }, []);

  const acknowledge = () => {
    window.localStorage.setItem(STORAGE_KEY, "acknowledged");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <Box
      role="dialog"
      aria-label="Privacy notice"
      sx={{
        position: "fixed",
        left: { xs: 12, md: 20 },
        right: { xs: 12, md: 20 },
        bottom: { xs: 12, md: 20 },
        zIndex: 1400,
        pointerEvents: "none",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            pointerEvents: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: 2,
            borderRadius: 4,
            border: "1px solid rgba(15,23,42,0.12)",
            bgcolor: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 18px 50px rgba(2, 44, 34, 0.16)",
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 2.2 },
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 800, color: "#022c22", mb: 0.4 }}>
              Privacy notice
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: 860 }}>
              We do not use analytics or advertising cookies. We only use essential browser storage to remember this
              notice and keep your privacy preference visible on future visits.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} alignItems={{ xs: "stretch", sm: "center" }}>
            <Button
              component={Link}
              to="/cookie-policy"
              variant="outlined"
              sx={{
                borderColor: "rgba(2,44,34,0.2)",
                color: "#022c22",
                whiteSpace: "nowrap",
                "&:hover": { borderColor: "#022c22" },
              }}
            >
              Cookie Policy
            </Button>
            <Button
              onClick={acknowledge}
              variant="contained"
              sx={{
                bgcolor: "#a3e635",
                color: "#052e2b",
                whiteSpace: "nowrap",
                fontWeight: 800,
                "&:hover": { bgcolor: "#bef264" },
              }}
            >
              Got it
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}