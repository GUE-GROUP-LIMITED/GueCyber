import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export default function Careers() {
  const { t } = useTranslation();
  const openings = [
    {
      titleKey: "job1Title",
      type: "Hybrid",
      level: "Mid-Senior",
      skills: ["Risk Assessment", "Penetration Testing", "Security Governance"],
    },
    {
      titleKey: "job2Title",
      type: "Hybrid",
      level: "Mid",
      skills: ["AWS or Azure", "CI/CD", "Infrastructure Automation"],
    },
    {
      titleKey: "job3Title",
      type: "Remote",
      level: "Mid",
      skills: ["React", "Node.js", "API Integration"],
    },
    {
      titleKey: "job4Title",
      type: "On-site",
      level: "Junior-Mid",
      skills: ["Enterprise Support", "System Administration", "User Enablement"],
    },
  ];

  const values = [
    {
      icon: <Groups2OutlinedIcon />,
      titleKey: "benefit2",
      descKey: "benefit2Desc",
      index: 0,
    },
    {
      icon: <GppGoodOutlinedIcon />,
      titleKey: "benefit3",
      descKey: "benefit3Desc",
      index: 1,
    },
    {
      icon: <SchoolOutlinedIcon />,
      titleKey: "benefit1",
      descKey: "benefit1Desc",
      index: 2,
    },
  ];

  return (
    <main>
      <div className="mesh-bg">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
      </div>

      <Box sx={{ pt: { xs: "var(--hero-pt-mobile)", md: "var(--hero-pt-desktop)" }, pb: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box className="reveal-up" sx={{ textAlign: "center", mb: { xs: 6, md: 9 }, maxWidth: 760, mx: "auto" }}>
            <Typography sx={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "0.75rem", mb: 2 }}>
              {t('common.careers')}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" }, lineHeight: 1.05, mb: 2.4 }}>
              {t('careers.careersSubtitle')}
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", fontSize: { xs: "1rem", md: "1.1rem" } }}>
              {t('careers.careersDescription')}
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
            {values.map((item) => (
              <Grid item xs={12} md={4} key={item.index} className={`reveal-up delay-${item.index + 1}`}>
                <Box className="glass-card" sx={{ p: 3.2, borderRadius: 4, textAlign: "center", height: "100%" }}>
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      mx: "auto",
                      mb: 1.8,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1.1, fontWeight: 800, fontSize: "1.2rem" }}>
                    {t(`careers.${item.titleKey}`)}
                  </Typography>
                  <Typography sx={{ color: "var(--text-muted)" }}>{t(`careers.${item.descKey}`)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h3" sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, fontSize: { xs: "1.9rem", md: "2.5rem" } }}>
            {t('careers.openPositions')}
          </Typography>

          <Grid container spacing={3}>
            {openings.map((job, idx) => (
              <Grid item xs={12} md={6} key={job.titleKey} className={`reveal-up delay-${(idx % 2) + 1}`}>
                <Box className="glass-card" sx={{ p: { xs: 3.2, md: 4.2 }, borderRadius: 5, height: "100%" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box>
                      <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", md: "1.7rem" }, mb: 0.7 }}>
                        {t(`careers.${job.titleKey}`)}
                      </Typography>
                      <Typography sx={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.92rem" }}>
                        {job.level} • {job.type}
                      </Typography>
                    </Box>
                    <Chip label={t('careers.openLabel')} sx={{ bgcolor: "var(--accent-soft)", color: "var(--accent)", fontWeight: 700 }} />
                  </Stack>

                  <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                    {job.skills.map((skill) => (
                      <Box key={skill} sx={{ px: 1.5, py: 0.6, borderRadius: 999, border: "1px solid var(--border)", color: "var(--text-muted)", fontWeight: 600, fontSize: "0.8rem" }}>
                        {skill}
                      </Box>
                    ))}
                  </Stack>

                  <Button fullWidth variant="contained">{t('careers.applyNow')}</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
