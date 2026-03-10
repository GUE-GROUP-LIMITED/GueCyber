import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export default function Careers() {
  const openings = [
    {
      title: "Cybersecurity Consultant",
      type: "Hybrid",
      level: "Mid-Senior",
      skills: ["Risk Assessment", "Penetration Testing", "Security Governance"],
    },
    {
      title: "Cloud and DevOps Engineer",
      type: "Hybrid",
      level: "Mid",
      skills: ["AWS or Azure", "CI/CD", "Infrastructure Automation"],
    },
    {
      title: "Full-Stack Software Engineer",
      type: "Remote",
      level: "Mid",
      skills: ["React", "Node.js", "API Integration"],
    },
    {
      title: "IT Support and Systems Specialist",
      type: "On-site",
      level: "Junior-Mid",
      skills: ["Enterprise Support", "System Administration", "User Enablement"],
    },
    {
      title: "Technical Trainer and Adoption Lead",
      type: "Hybrid",
      level: "Mid-Senior",
      skills: ["Enterprise Training", "Curriculum Design", "Change Enablement"],
    },
    {
      title: "Technology Procurement Coordinator",
      type: "On-site",
      level: "Junior-Mid",
      skills: ["Vendor Management", "Product Evaluation", "Commercial Analysis"],
    },
  ];

  const values = [
    {
      icon: <Groups2OutlinedIcon />,
      title: "Strong Collaboration",
      desc: "Work with teams across cyber, software, cloud, support, and consulting delivery.",
    },
    {
      icon: <GppGoodOutlinedIcon />,
      title: "Meaningful Missions",
      desc: "Contribute to practical programs that improve client resilience and operational outcomes.",
    },
    {
      icon: <SchoolOutlinedIcon />,
      title: "Continuous Growth",
      desc: "Grow through training, cross-functional delivery, and real project ownership.",
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
              Careers
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" }, lineHeight: 1.05, mb: 2.4 }}>
              Join a team building practical cyber and technology outcomes.
            </Typography>
            <Typography sx={{ color: "var(--text-muted)", fontSize: { xs: "1rem", md: "1.1rem" } }}>
              We are building a culture of ownership, precision, and delivery excellence across cybersecurity, cloud, software, and IT services.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
            {values.map((item, idx) => (
              <Grid item xs={12} md={4} key={item.title} className={`reveal-up delay-${idx + 1}`}>
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
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "var(--text-muted)" }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h3" sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, fontSize: { xs: "1.9rem", md: "2.5rem" } }}>
            Open roles
          </Typography>

          <Grid container spacing={3}>
            {openings.map((job, idx) => (
              <Grid item xs={12} md={6} key={job.title} className={`reveal-up delay-${(idx % 2) + 1}`}>
                <Box className="glass-card" sx={{ p: { xs: 3.2, md: 4.2 }, borderRadius: 5, height: "100%" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Box>
                      <Typography variant="h4" sx={{ fontSize: { xs: "1.3rem", md: "1.7rem" }, mb: 0.7 }}>
                        {job.title}
                      </Typography>
                      <Typography sx={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.92rem" }}>
                        {job.level} • {job.type}
                      </Typography>
                    </Box>
                    <Chip label="Open" sx={{ bgcolor: "var(--accent-soft)", color: "var(--accent)", fontWeight: 700 }} />
                  </Stack>

                  <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                    {job.skills.map((skill) => (
                      <Box key={skill} sx={{ px: 1.5, py: 0.6, borderRadius: 999, border: "1px solid var(--border)", color: "var(--text-muted)", fontWeight: 600, fontSize: "0.8rem" }}>
                        {skill}
                      </Box>
                    ))}
                  </Stack>

                  <Button fullWidth variant="contained">Apply</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
