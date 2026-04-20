import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function Services() {
  const { t } = useTranslation();
  const sectionY = { xs: 9, md: 13 };
  const limePanelRadius = { xs: 4, md: 5 };
  const limePanelPadding = { xs: 2.5, md: 6 };

  const serviceCategories = [
    {
      icon: <GppGoodOutlinedIcon />,
      titleKey: "service1.title",
      itemsKey: "service1.items",
      featured: true,
      index: 0,
    },
    {
      icon: <HubOutlinedIcon />,
      titleKey: "service2.title",
      itemsKey: "service2.items",
      index: 1,
    },
    {
      icon: <LanguageOutlinedIcon />,
      titleKey: "service3.title",
      itemsKey: "service3.items",
      index: 2,
    },
    {
      icon: <SchoolOutlinedIcon />,
      titleKey: "service4.title",
      itemsKey: "service4.items",
      index: 3,
    },
    {
      icon: <ShoppingCartOutlinedIcon />,
      title: "Tech Procurement and Sales",
      deliverables: [
        "Technology sourcing and vendor advisory",
        "Hardware and software procurement support",
        "Commercial comparisons and selection guidance",
        "Procurement planning for scale and continuity",
      ],
      index: 4,
    },
    {
      icon: <UpdateOutlinedIcon />,
      title: "Digital Transformation Programs",
      deliverables: [
        "Legacy modernization strategy",
        "Business process digitization",
        "Cloud migration and optimization roadmap",
        "Operational resilience and AI-readiness improvement",
      ],
      index: 5,
    },
  ];

  const process = [
    { index: 0, stepKey: "step1", titleKey: "step1Title", textKey: "step1Text" },
    { index: 1, stepKey: "step2", titleKey: "step2Title", textKey: "step2Text" },
    { index: 2, stepKey: "step3", titleKey: "step3Title", textKey: "step3Text" },
    { index: 3, stepKey: "step4", titleKey: "step4Title", textKey: "step4Text" },
  ];

  return (
    <main>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "#042f2e",
          pt: { xs: 16, md: 19 },
          pb: { xs: 13, md: 16 },
        }}
      >
        <Box
          component="img"
          src="/images/header-bg-waves.png"
          alt=""
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.42,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 60% at 12% 35%, rgba(134,239,172,0.28) 0%, rgba(134,239,172,0) 75%), radial-gradient(40% 60% at 92% 78%, rgba(134,239,172,0.25) 0%, rgba(134,239,172,0) 72%), linear-gradient(180deg, #042f2e 0%, #022c22 100%)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.3,
            backgroundImage:
              "repeating-linear-gradient(126deg, transparent 0, transparent 14px, rgba(163,230,53,0.65) 15px, transparent 17px)",
            backgroundSize: "180% 180%",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box className="reveal-up" sx={{ maxWidth: 920, mx: "auto", textAlign: "center" }}>
            <Typography sx={{ color: "#d9f99d", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem", mb: 2 }}>
              {t('common.services')}
            </Typography>
            <Typography variant="h1" sx={{ color: "#f8fafc", fontSize: { xs: "2.6rem", sm: "3.9rem", md: "4.9rem" }, lineHeight: 1.03, mb: 2.2 }}>
              {t('services.hero.title')}
            </Typography>
            <Typography sx={{ color: "rgba(226,232,240,0.9)", fontSize: { xs: "1rem", md: "1.12rem" }, maxWidth: 760, mx: "auto" }}>
              {t('services.description')}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {serviceCategories.map((item) => (
              <Grid item xs={12} lg={4} key={item.index} className={`reveal-up delay-${(item.index % 3) + 1}`}>
                <Box
                  className="hover-lift"
                  sx={{
                    position: "relative",
                    pt: 6,
                    pb: 4,
                    px: 3.2,
                    borderRadius: 5,
                    overflow: "hidden",
                    background: item.featured ? "#a3e635" : "#fff7ed",
                    height: "100%",
                  }}
                >
                  {item.featured ? (
                    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, py: 0.45, textAlign: "center", bgcolor: "#022c22" }}>
                      <Typography sx={{ color: "#fff", fontSize: "0.72rem", lineHeight: 1.7 }}>{t('services.featured')}</Typography>
                    </Box>
                  ) : (
                    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, bgcolor: "#a3e635" }} />
                  )}

                  <Box sx={{ width: 46, height: 46, borderRadius: 2.5, bgcolor: "#ffffff", color: "#022c22", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    {item.icon}
                  </Box>

                  <Typography sx={{ fontSize: "1.55rem", fontWeight: 700, mb: 2.2, color: "#111827" }}>
                    {item.titleKey ? t(`services.${item.titleKey}`) : item.title}
                  </Typography>

                  <Box sx={{ mb: 2.8 }}>
                    {item.itemsKey ? (
                      t(`services.${item.itemsKey}`, { returnObjects: true }).map((entry) => (
                        <Box key={entry} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1.05 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 17, mt: 0.15, color: "#064e3b" }} />
                          <Typography sx={{ color: "#1f2937", fontSize: "0.95rem" }}>{entry}</Typography>
                        </Box>
                      ))
                    ) : (
                      item.deliverables.map((entry) => (
                        <Box key={entry} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1.05 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 17, mt: 0.15, color: "#064e3b" }} />
                          <Typography sx={{ color: "#1f2937", fontSize: "0.95rem" }}>{entry}</Typography>
                        </Box>
                      ))
                    )}
                  </Box>

                  <Button
                    component={Link}
                    to="/contact"
                    variant="text"
                    sx={{ p: 0, minWidth: 0, textTransform: "none", fontSize: "1.02rem", fontWeight: 700, color: "#111827", "&:hover": { bgcolor: "transparent", color: "#064e3b" } }}
                  >
                    {t('common.contactUs')}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box className="reveal-up" sx={{ bgcolor: "#a3e635", borderRadius: limePanelRadius, px: limePanelPadding, pt: { xs: 5, md: 7 }, pb: { xs: 6, md: 8 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#022c22" }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#052e2b" }}>{t('services.processTitle')}</Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid rgba(4,47,46,0.32)", pt: { xs: 4, md: 6 } }}>
              <Grid container spacing={{ xs: 3.5, md: 5 }}>
                {process.map((item) => (
                  <Grid item xs={12} sm={6} key={item.index}>
                    <Typography sx={{ color: "#065f46", fontWeight: 800, mb: 0.55 }}>{t(`services.${item.stepKey}`)}</Typography>
                    <Typography sx={{ fontWeight: 800, mb: 0.6, color: "#052e2b", fontSize: "1.26rem" }}>{t(`services.${item.titleKey}`)}</Typography>
                    <Typography sx={{ color: "#14532d" }}>{t(`services.${item.textKey}`)}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 }, background: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box
            className="reveal-up delay-1"
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
            <Box
              component="img"
              src="/images/footer-waves-left-bottom.png"
              alt=""
              sx={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: { xs: 220, md: 340 },
                opacity: 0.35,
                pointerEvents: "none",
              }}
            />
            <Grid container spacing={3} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
              <Grid item xs={12} md={8}>
                <Typography variant="h2" sx={{ color: "#fff", fontSize: { xs: "2rem", md: "2.9rem" }, mb: 1.5, lineHeight: 1.08 }}>
                  {t('services.cta.title')}
                </Typography>
                <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760 }}>
                  {t('services.cta.description')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
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
                  {t('common.contactUs')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
