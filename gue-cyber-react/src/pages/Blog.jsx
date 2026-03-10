import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function Blog() {
  const posts = [
    {
      title: "Cybersecurity Hardening Program for a Multi-Branch Business",
      summary:
        "Delivered vulnerability assessment, identity control improvements, and incident response readiness for a distributed operations team.",
      date: "Feb 12, 2026",
      tags: ["Cybersecurity", "Case Study"],
      image: "/img/gue (1).jpg",
    },
    {
      title: "Corporate Website and Intranet Modernization",
      summary:
        "Designed and deployed a modern web presence and internal intranet workflows to improve communication and operational efficiency.",
      date: "Jan 27, 2026",
      tags: ["Software Development", "Web & Intranet"],
      image: "/img/gue (2).jpg",
    },
    {
      title: "Cloud and DevOps Enablement for Product Delivery",
      summary:
        "Implemented cloud deployment pipelines, environment standardization, and operational monitoring to improve release confidence.",
      date: "Dec 19, 2025",
      tags: ["Cloud", "DevOps"],
      image: "/img/gue (5).jpg",
    },
    {
      title: "Enterprise IT Training and Support Rollout",
      summary:
        "Delivered role-based technical training and support operating model to strengthen internal capability and reduce downtime.",
      date: "Nov 03, 2025",
      tags: ["IT Consulting", "Training"],
      image: "/img/gue (4).jpg",
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
          <Box className="reveal-up" sx={{ textAlign: "center", mb: { xs: 6, md: 9 }, maxWidth: 780, mx: "auto" }}>
            <Typography sx={{ color: "var(--accent)", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "0.75rem", mb: 2 }}>
              Projects & Case Studies
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" }, lineHeight: 1.05, mb: 2.4 }}>
              Real delivery outcomes across cyber and technology services.
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", fontSize: { xs: "1rem", md: "1.1rem" } }}>
              Explore selected projects covering cybersecurity, software, cloud, DevOps, and enterprise IT support.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3.5, md: 4 }}>
            {posts.map((post, idx) => (
              <Grid item xs={12} md={6} key={post.title} className={`reveal-up delay-${(idx % 3) + 1}`}>
                <Box className="glass-card" sx={{ borderRadius: 5, overflow: "hidden", height: "100%" }}>
                  <Box
                    sx={{
                      height: { xs: 220, md: 280 },
                      backgroundImage: `url('${post.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <Stack direction="row" spacing={1} sx={{ position: "absolute", top: 16, left: 16 }}>
                      {post.tags.map((tag) => (
                        <Chip key={tag} label={tag} sx={{ bgcolor: "rgba(15, 23, 42, 0.86)", color: "#fff", fontWeight: 700 }} />
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ p: { xs: 3, md: 4 } }}>
                    <Stack direction="row" alignItems="center" spacing={1.1} mb={1.8}>
                      <CalendarTodayOutlinedIcon sx={{ fontSize: 17, color: "var(--text-muted)" }} />
                      <Typography sx={{ color: "var(--text-muted)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase" }}>
                        {post.date}
                      </Typography>
                    </Stack>
                    <Typography variant="h4" sx={{ fontSize: { xs: "1.4rem", md: "1.85rem" }, lineHeight: 1.2, mb: 1.5 }}>
                      {post.title}
                    </Typography>
                    <Typography sx={{ color: "var(--text-muted)", mb: 3 }}>{post.summary}</Typography>
                    <Button variant="text" sx={{ p: 0, color: "var(--accent)", fontWeight: 700 }}>
                      View case
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
