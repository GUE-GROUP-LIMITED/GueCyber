import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function Services() {
  const sectionY = { xs: 9, md: 13 };
  const limePanelRadius = { xs: 4, md: 5 };
  const limePanelPadding = { xs: 2.5, md: 6 };

  const serviceCategories = [
    {
      icon: <GppGoodOutlinedIcon />,
      title: "Cybersecurity Services",
      deliverables: [
        "Infrastructure and application penetration testing",
        "Vulnerability discovery and prioritization",
        "OSINT and social engineering simulation",
        "Executive and technical risk reporting",
      ],
      featured: true,
    },
    {
      icon: <HubOutlinedIcon />,
      title: "Cloud and DevOps Solutions",
      deliverables: [
        "Cloud architecture across AWS, Azure, and GCP",
        "DevOps pipeline setup and deployment automation",
        "Infrastructure hardening and observability",
        "Identity and access controls for cloud operations",
      ],
    },
    {
      icon: <LanguageOutlinedIcon />,
      title: "Software, Web and Intranet Development",
      deliverables: [
        "Business software solutions and custom web platforms",
        "Corporate website design and redevelopment",
        "Intranet portals for internal operations",
        "Application maintenance and feature enhancement",
      ],
    },
    {
      icon: <SchoolOutlinedIcon />,
      title: "IT Consulting, Support and Training",
      deliverables: [
        "IT consulting aligned to business priorities",
        "Technical support for infrastructure and users",
        "Enterprise IT training and capability programs",
        "Governance and process improvement guidance",
      ],
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
    },
    {
      icon: <UpdateOutlinedIcon />,
      title: "Digital Transformation Programs",
      deliverables: [
        "Legacy modernization strategy",
        "Business process digitization",
        "Cloud migration and optimization roadmap",
        "Operational resilience improvement",
      ],
    },
  ];

  const process = [
    { step: "01", title: "Scope", text: "Define business priorities, assets, and threat profile." },
    { step: "02", title: "Assess", text: "Run structured technical evaluations and control validation." },
    { step: "03", title: "Implement", text: "Deploy practical fixes and measurable hardening controls." },
    { step: "04", title: "Operate", text: "Monitor, iterate, and continuously improve resilience." },
  ];

  return (
    <main>
      <Box sx={{ position: "relative", py: { xs: 12, md: 16 }, overflow: "hidden", background: "#ffffff" }}>
        <Box
          component="img"
          src="/images/pricing-waves-right-top.png"
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: 200, md: 360 },
            opacity: 0.42,
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 920, mx: "auto", textAlign: "center" }}>
            <Typography sx={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem", mb: 2 }}>
              Solutions
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", sm: "3.9rem", md: "4.9rem" }, lineHeight: 1.03, mb: 2.2 }}>
              Cyber business and IT solutions aligned to operations and growth goals.
            </Typography>
            <Typography sx={{ color: "#4b5563", fontSize: { xs: "1rem", md: "1.12rem" }, maxWidth: 760, mx: "auto" }}>
              Every engagement is tailored to your business context with clear outcomes and practical implementation.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {serviceCategories.map((item, index) => (
              <Grid item xs={12} lg={4} key={item.title}>
                <Box
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
                      <Typography sx={{ color: "#fff", fontSize: "0.72rem", lineHeight: 1.7 }}>Featured Service</Typography>
                    </Box>
                  ) : (
                    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, bgcolor: "#a3e635" }} />
                  )}

                  <Box sx={{ width: 46, height: 46, borderRadius: 2.5, bgcolor: "#ffffff", color: "#022c22", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    {item.icon}
                  </Box>

                  <Typography sx={{ fontSize: "1.55rem", fontWeight: 700, mb: 2.2, color: "#111827" }}>{item.title}</Typography>

                  <Box sx={{ mb: 2.8 }}>
                    {item.deliverables.map((entry) => (
                      <Box key={entry} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1.05 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 17, mt: 0.15, color: "#064e3b" }} />
                        <Typography sx={{ color: "#1f2937", fontSize: "0.95rem" }}>{entry}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    component={Link}
                    to="/contact"
                    variant="text"
                    sx={{ p: 0, minWidth: 0, textTransform: "none", fontSize: "1.02rem", fontWeight: 700, color: "#111827", "&:hover": { bgcolor: "transparent", color: "#064e3b" } }}
                  >
                    Get started
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 5 }, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#a3e635", borderRadius: limePanelRadius, px: limePanelPadding, pt: { xs: 5, md: 7 }, pb: { xs: 6, md: 8 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#022c22" }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#052e2b" }}>How we work</Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid rgba(4,47,46,0.32)", pt: { xs: 4, md: 6 } }}>
              <Grid container spacing={{ xs: 3.5, md: 5 }}>
                {process.map((item) => (
                  <Grid item xs={12} sm={6} key={item.step}>
                    <Typography sx={{ color: "#065f46", fontWeight: 800, mb: 0.55 }}>{item.step}</Typography>
                    <Typography sx={{ fontWeight: 800, mb: 0.6, color: "#052e2b", fontSize: "1.26rem" }}>{item.title}</Typography>
                    <Typography sx={{ color: "#14532d" }}>{item.text}</Typography>
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
                  Need a custom cyber and IT business program?
                </Typography>
                <Typography sx={{ color: "rgba(226,232,240,0.84)", maxWidth: 760 }}>
                  Speak with our team to shape an outcome-driven roadmap across security, software, cloud, and IT operations.
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
                  Get in touch
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
