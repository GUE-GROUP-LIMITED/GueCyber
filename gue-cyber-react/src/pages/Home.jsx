import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FAQ from "../components/FAQ";

function CarouselArrow({ direction = "left" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {direction === "left" ? (
        <>
          <path d="M24.4 16H7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 24.4L7.6 16L16 7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M7.6 16H24.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 7.6L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

function SolutionIcon({ type }) {
  const common = { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  if (type === "cyber") {
    return (
      <svg {...common}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
        <circle cx="16" cy="16" r="4" fill="#022C22" />
        <circle cx="24" cy="32" r="4" fill="#022C22" />
        <circle cx="32" cy="16" r="4" fill="#022C22" />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg {...common}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
        <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22" />
        <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22" />
        <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22" />
        <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22" />
        <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22" />
        <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22" />
        <rect x="26.1213" y="27.5355" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5355)" fill="#022C22" />
        <rect x="11.9792" y="13.3934" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3934)" fill="#022C22" />
      </svg>
    );
  }

  if (type === "software") {
    return (
      <svg {...common}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
        <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22" />
        <path fillRule="evenodd" clipRule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22" />
        <path fillRule="evenodd" clipRule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22" />
        <path fillRule="evenodd" clipRule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22" />
        <path fillRule="evenodd" clipRule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22" />
        <path fillRule="evenodd" clipRule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22" />
        <path fillRule="evenodd" clipRule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white" />
      <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22" />
    </svg>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const sectionY = { xs: 9, md: 13 };
  const limePanelRadius = { xs: 4, md: 5 };
  const limePanelPadding = { xs: 2.5, md: 6 };

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const capabilityCards = [
    { icon: "cyber", titleKey: "capability1.title", textKey: "capability1.text" },
    { icon: "cloud", titleKey: "capability2.title", textKey: "capability2.text" },
    { icon: "software", titleKey: "capability3.title", textKey: "capability3.text" },
    { icon: "enablement", titleKey: "capability4.title", textKey: "capability4.text" },
  ];

  const trustStats = [
    { value: "2010", labelKey: "stat1" },
    { value: "Global", labelKey: "stat2" },
    { value: "3", labelKey: "stat3" },
    { value: "8+", labelKey: "stat4" },
  ];

  const testimonials = [
    {
      quoteKey: "testimonial1.text",
      nameKey: "testimonial1.author",
      roleKey: "testimonial1.author",
      image: "/img/gue (4).jpg",
    },
    {
      quoteKey: "testimonial2.text",
      nameKey: "testimonial2.author",
      roleKey: "testimonial2.author",
      image: "/img/gue (6).jpg",
    },
    {
      quoteKey: "testimonial1.text",
      nameKey: "testimonial1.author",
      roleKey: "testimonial1.author",
      image: "/img/gue (5).jpg",
    },
  ];

  const previousTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <Box
        sx={{
          background: "#042f2e",
          position: "relative",
          overflow: "hidden",
          pt: { xs: 16, md: 19 },
          pb: { xs: 13, md: 18 },
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
            opacity: 0.45,
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

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Chip
            label={t('home.hero.subtitle')}
            sx={{ mb: 3, bgcolor: "rgba(163,230,53,0.2)", color: "#d9f99d", fontWeight: 700 }}
          />
          <Typography
            variant="h1"
            sx={{
              color: "#f8fafc",
              fontSize: { xs: "2.8rem", sm: "4.2rem", md: "6.1rem" },
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              mb: 3,
            }}
          >
            <Box component="span" sx={{ display: "inline" }}>
              {t('home.hero.title')}
            </Box>{" "}
            <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
              {t('home.hero.subtitle')}
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "rgba(226,232,240,0.9)",
              fontSize: { xs: "1rem", md: "1.12rem" },
              maxWidth: 760,
              mx: "auto",
              mb: 4.8,
            }}
          >
            {t('home.description')}
          </Typography>
          <Button
            component={Link}
            to="/services"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#a3e635",
              color: "#0f172a",
              fontWeight: 800,
              px: 4,
              py: 1.45,
              borderRadius: 999,
              textTransform: "none",
              "&:hover": { bgcolor: "#bef264" },
            }}
          >
            {t('common.contactUs')}
          </Button>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, borderBottom: "1px solid var(--border)", background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {trustStats.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.label}>
                <Box sx={{ textAlign: "center", py: 1.5 }}>
                  <Typography sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, fontWeight: 800, color: "var(--primary)", mb: 1.2 }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ color: "#4b5563", fontSize: { xs: "0.98rem", md: "1.05rem" } }}>{t(`home.${item.labelKey}`)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background: "#a3e635",
              borderRadius: limePanelRadius,
              px: limePanelPadding,
              pt: { xs: 5.5, md: 8 },
              pb: { xs: 6.5, md: 10 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#022c22" }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#052e2b" }}>{t('common.services')}</Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid rgba(4,47,46,0.32)", pt: { xs: 4.5, md: 7.5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.35rem", sm: "3rem", md: "3.8rem" },
                  lineHeight: 1.07,
                  color: "#052e2b",
                  maxWidth: 760,
                  mb: { xs: 7, md: 11 },
                }}
              >
                {t('home.cta.title')}
              </Typography>

              <Grid container spacing={{ xs: 4.5, md: 8 }}>
                {capabilityCards.map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <Box>
                      <SolutionIcon type={item.icon} />
                  <Typography variant="h5" sx={{ mt: 3, mb: 1.2, fontWeight: 800, color: "#052e2b", fontSize: { xs: "1.75rem", md: "2rem" } }}>
                    {t(`home.${item.titleKey}`)}
                  </Typography>
                  <Typography sx={{ color: "#10403d", mb: 2.6 }}>{t(`home.${item.textKey}`)}</Typography>
                      <Button
                        component={Link}
                        to="/services"
                        variant="text"
                        sx={{
                          p: 0,
                          minWidth: 0,
                          color: "#052e2b",
                          fontWeight: 800,
                          textTransform: "none",
                          "&:hover": { background: "transparent", color: "#0f172a" },
                        }}
                      >
                        {t('common.readMore')}
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, borderTop: "1px solid var(--border)", background: "#ffffff", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 980, mx: "auto", textAlign: "center", mb: { xs: 6, md: 9 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3.8rem" }, mb: 2.2, lineHeight: 1.06 }}>
              <Box component="span" sx={{ display: "inline" }}>
                {t('home.cta.description')}
              </Box>{" "}
              <Box component="span" sx={{ display: { xs: "inline", md: "block" } }}>
                {t('common.services')}
              </Box>
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", maxWidth: 820, mx: "auto", mb: 4 }}>
              {t('home.faqIntro')}
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                bgcolor: "#022c22",
                color: "#fff",
                borderRadius: 999,
                px: 3.8,
                py: 1.25,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { bgcolor: "#064e3b" },
              }}
            >
              {t('common.contactUs')}
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, md: 2 },
              overflowX: "auto",
              px: { xs: 0, md: 1 },
              pb: 1,
              "&::-webkit-scrollbar": { height: 8 },
              "&::-webkit-scrollbar-thumb": { backgroundColor: "rgba(15,23,42,0.18)", borderRadius: 999 },
            }}
          >
            {["/img/gue (4).jpg", "/img/gue (6).jpg", "/img/gue (5).jpg", "/img/gue (4).jpg"].map((img, index) => (
              <Box
                key={`${img}-${index}`}
                component="img"
                src={img}
                alt={t(`common.companyName`)}
                sx={{
                  minWidth: { xs: 240, sm: 320, md: 360 },
                  width: { xs: 240, sm: 320, md: 360 },
                  height: { xs: 175, sm: 235, md: 270 },
                  objectFit: "cover",
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, mb: 1.5 }}>
              {t('home.faqTitle')}
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", maxWidth: 700, mx: "auto" }}>
              {t('home.faqDescription')}
            </Typography>
          </Box>
          <FAQ />
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: "hidden", maxWidth: 520, mx: "auto", boxShadow: "0 12px 30px rgba(2,44,34,0.12)" }}>
                <Box
                  component="img"
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  sx={{ width: "100%", height: { xs: 300, md: 360 }, objectFit: "cover", display: "block" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 560 }}>
                <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, lineHeight: 1.35, mb: 3.5, color: "#0f172a", fontWeight: 500 }}>
                  "{t(`home.${testimonials[activeTestimonial].quoteKey}`)}"
                </Typography>
                <Typography sx={{ fontWeight: 800, color: "#052e2b" }}>{t(`home.${testimonials[activeTestimonial].nameKey}`)}</Typography>
                <Typography sx={{ color: "#6b7280", mb: 4 }}>{t(`home.${testimonials[activeTestimonial].roleKey}`)}</Typography>
                <Box sx={{ display: "flex", gap: 1.2 }}>
                  <Button
                    onClick={previousTestimonial}
                    sx={{
                      minWidth: 46,
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      border: "1px solid rgba(15,23,42,0.2)",
                      color: "#374151",
                      p: 0,
                      "&:hover": { borderColor: "#a3e635", color: "#1f2937", background: "transparent" },
                    }}
                  >
                    <CarouselArrow direction="left" />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    sx={{
                      minWidth: 46,
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      border: "1px solid rgba(15,23,42,0.2)",
                      color: "#374151",
                      p: 0,
                      "&:hover": { borderColor: "#a3e635", color: "#1f2937", background: "transparent" },
                    }}
                  >
                    <CarouselArrow direction="right" />
                  </Button>
                </Box>
              </Box>
            </Grid>
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
                  {t('home.cta.title')}
                </Typography>
                <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760 }}>
                  {t('home.cta.description')}
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
                  Start consultation
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
