import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  const sectionY = { xs: 9, md: 13 };
  const limePanelRadius = { xs: 4, md: 5 };
  const limePanelPadding = { xs: 2.5, md: 6 };

  const values = [
    {
      title: "Business-First Technology",
      text: "We align cybersecurity and engineering decisions to measurable business outcomes.",
    },
    {
      title: "Integrated Service Delivery",
      text: "From software development to technical support, we deliver complete solutions across the IT lifecycle.",
    },
    {
      title: "Capability Development",
      text: "We build long-term internal strength through enterprise training, advisory, and implementation support.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "GABBITO ICT WORLD",
      text: "Business Name RC - MK3593. Registered on Mar 11, 2010.",
    },
    {
      year: "2025",
      title: "GUE CYBER LIMITED",
      text: "Company RC - 8341363. Registered on Mar 15, 2025 as an expanded cyber business and technology company.",
    },
  ];

  const stats = [
    { value: "2010", label: "First registration" },
    { value: "2025", label: "LLC registration" },
    { value: "2520712608582", label: "Tax ID" },
  ];

  const activities = [
    "Providing IT consulting and technical support",
    "Delivering cybersecurity services and governance support",
    "Cloud and DevOps solutions for modern infrastructure",
    "Enterprise IT training and capability development",
    "Technology procurement and sales support",
  ];

  return (
    <main>
      <Box sx={{ position: "relative", py: { xs: 12, md: 18 }, overflow: "hidden", background: "#ffffff" }}>
        <Box
          component="img"
          src="/images/about-lines.svg"
          alt=""
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: { xs: 180, md: 300 },
            opacity: 0.45,
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 940, mx: "auto", textAlign: "center" }}>
            <Typography sx={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem", mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", sm: "3.9rem", md: "4.9rem" }, lineHeight: 1.02, mb: 3 }}>
              From ENTERPRISE to LLC.
            </Typography>
            <Typography sx={{ maxWidth: 760, mx: "auto", fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.62, color: "#111827", mb: 5 }}>
              Our company evolved from a registered ICT business into a broader cyber business focused on secure,
              practical technology delivery for organizations.
            </Typography>
            <Button
              component={Link}
              to="/services"
              variant="outlined"
              sx={{
                borderColor: "#022c22",
                color: "#022c22",
                borderRadius: 999,
                px: 3.8,
                py: 1.2,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { borderColor: "#022c22", bgcolor: "#022c22", color: "#fff" },
              }}
            >
              Read more
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="start" sx={{ mb: { xs: 8, md: 11 } }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3.8rem" }, lineHeight: 1.05 }}>
                About us
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.32rem" }, fontWeight: 500, lineHeight: 1.62, mb: 4 }}>
                Our company evolved from a registered ICT business into a broader cyber business focused on secure,
                practical technology delivery for organizations.
              </Typography>
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
                  "&:hover": { bgcolor: "#84cc16" },
                }}
              >
                Contact Team
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", gap: { xs: 1.5, md: 2 }, overflowX: "auto", pb: 1 }}>
            {["/img/gue (4).jpg", "/img/gue (2).jpg", "/img/gue (5).jpg", "/img/gue (4).jpg"].map((img, index) => (
              <Box
                key={`${img}-${index}`}
                component="img"
                src={img}
                alt={`GUE Cyber gallery ${index + 1}`}
                sx={{
                  minWidth: { xs: 220, sm: 300, md: 340 },
                  width: { xs: 220, sm: 300, md: 340 },
                  height: { xs: 160, sm: 210, md: 240 },
                  objectFit: "cover",
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, borderY: "1px solid var(--border)", background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((item) => (
              <Grid item xs={12} md={4} key={item.label}>
                <Box sx={{ textAlign: "center", py: 1.2 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: { xs: "2.1rem", md: "2.8rem" }, mb: 0.8, color: "#022c22" }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ color: "#4b5563", fontWeight: 500 }}>{item.label}</Typography>
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
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, color: "#052e2b" }}>Core Values</Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid rgba(4,47,46,0.32)", pt: { xs: 4, md: 6 } }}>
              <Grid container spacing={{ xs: 4, md: 6 }}>
                {values.map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Typography variant="h5" sx={{ mb: 1.2, fontWeight: 800, color: "#052e2b" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#10403d" }}>{item.text}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, borderY: "1px solid var(--border)", background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
            <Typography sx={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.75rem", mb: 1.4 }}>
              Corporate Profile
            </Typography>
            <Typography variant="h4" sx={{ mb: 1.4 }}>
              Registered Company Details
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 1 }}>
              <strong>Nature of Business:</strong> Software Development, Web Design and Intranet Development
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", mb: 2.4 }}>
              <strong>Tax ID:</strong> 2520712608582
            </Typography>
            <Typography sx={{ fontWeight: 700, mb: 1.1 }}>Principal Business Activity</Typography>
            <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
              {activities.map((item) => (
                <Typography key={item} component="li" sx={{ color: "var(--text-muted)", mb: 0.8 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: sectionY, background: "#ffffff" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: "center", mb: { xs: 5, md: 8 }, fontSize: { xs: "2.1rem", md: "3.2rem" } }}>
            Our journey
          </Typography>
          <Grid container spacing={3.5}>
            {milestones.map((item) => (
              <Grid item xs={12} md={6} key={item.year}>
                <Box sx={{ p: { xs: 3.5, md: 5 }, borderRadius: 4, height: "100%", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
                  <Typography sx={{ color: "var(--accent)", fontWeight: 800, fontSize: "0.9rem", mb: 0.6 }}>{item.year}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.3 }}>{item.title}</Typography>
                  <Typography sx={{ color: "var(--text-muted)" }}>{item.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
