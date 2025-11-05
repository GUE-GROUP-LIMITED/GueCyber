import { Typography, Card, CardContent, Grid, Box, Divider, Chip } from "@mui/material";

export default function Privacy() {
  return (
    <main>
      {/* Hero Section */}
      <Box sx={{
        background: 'var(--hero-bg)',
        color: 'var(--hero-text)',
        py: 8,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract background shapes */}
        <div style={{
          position: "absolute",
          top: -50,
          left: -80,
          width: 300,
          height: 300,
          background: "linear-gradient(135deg, #43a047 0%, #1976d2 100%)",
          opacity: 0.08,
          borderRadius: "50%",
          filter: "blur(6px)"
        }} />
        <div style={{
          position: "absolute",
          bottom: -70,
          right: -70,
          width: 250,
          height: 250,
          background: "linear-gradient(135deg, #1976d2 0%, #43a047 100%)",
          opacity: 0.06,
          borderRadius: "50%",
          filter: "blur(6px)"
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" fontWeight={800} letterSpacing={2} mb={2} sx={{ fontSize: { xs: '2.2rem', md: '3rem' } }}>
            Privacy <span style={{ color: 'var(--accent-1)' }}>Policy</span>
          </Typography>
          <Typography variant="h5" fontWeight={500} color="var(--accent-1)" mb={3} sx={{ letterSpacing: 0.5 }}>
            Privacy Above Profits
          </Typography>
          <Typography variant="body1" sx={{
            maxWidth: 750,
            mx: 'auto',
            mb: 4,
            color: 'var(--hero-text)',
            fontSize: '1.18rem',
            lineHeight: 1.7
          }}>
            At <b>GUE Cyber Limited</b> we value your privacy and are committed to protecting your personal information. Our privacy policy outlines how we collect, use, and protect your data in compliance with applicable regulations.
          </Typography>
          <Chip
            label="GDPR Compliant"
            sx={{
              bgcolor: 'var(--accent-2)',
              color: 'var(--chip-text)',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2,
              py: 1
            }}
            icon={<span className="material-icons" style={{ fontSize: '18px', color: 'var(--chip-text)' }}>verified_user</span>}
          />
        </div>
      </Box>

      {/* Content Section */}
  <Box sx={{ py: 6, background: 'var(--section-bg)' }}>
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
          {/* Introduction Card */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span className="material-icons">privacy_tip</span>
                  Our Commitment to Privacy
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--muted-text)' }}>
                  Your privacy is important to us. This privacy policy outlines how GUE Cyber collects, uses, and protects your personal information in compliance with applicable regulations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Information We Collect */}
          <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <span className="material-icons">data_usage</span>
                  Information We Collect
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'var(--muted-text)' }}>
                  We may collect and process the following types of personal data:
                </Typography>
                  <Box sx={{ '& > div': { mb: 2, p: 2, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: 'var(--accent-1)' } }}>
                  <div>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>Contact Details</Typography>
                    <Typography variant="body2" color="var(--muted-text)">
                      Your name, email address, phone number, and information you provide when contacting us.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>Browsing Data</Typography>
                    <Typography variant="body2" color="var(--muted-text)">
                      IP address, browser type, pages visited, and visit timestamps.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>Cookies</Typography>
                    <Typography variant="body2" color="var(--muted-text)">
                      Tracking technologies to enhance your website experience.
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* How We Use Information */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <span className="material-icons">settings</span>
                  How We Use Your Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'var(--muted-text)' }}>
                  We use your personal information for the following purposes:
                </Typography>
                  <Box sx={{ '& > div': { mb: 2, p: 2, bgcolor: 'var(--card-bg)', borderRadius: 2, borderLeft: 4, borderLeftColor: 'var(--accent-2)' } }}>
                  <div>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>Service Improvement</Typography>
                    <Typography variant="body2" color="var(--muted-text)">
                      Analyzing data to enhance our website and services for better user experience.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>Communication</Typography>
                    <Typography variant="body2" color="var(--muted-text)">
                      Sending updates, newsletters, and service-related information.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>Legal Compliance</Typography>
                    <Typography variant="body2" color="var(--muted-text)">
                      Processing data to comply with applicable laws and regulations.
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* GDPR Rights */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3, background: 'var(--card-bg)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <span className="material-icons">account_balance</span>
                  Your Rights Under GDPR
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'var(--muted-text)', fontSize: '1.1rem' }}>
                  As a data subject, you have the following rights under GDPR:
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { title: "Right to Access", desc: "Request copies of your personal data", icon: "visibility" },
                    { title: "Right to Rectification", desc: "Correct inaccurate or incomplete information", icon: "edit" },
                    { title: "Right to Erasure", desc: "Request deletion of your personal data", icon: "delete" },
                    { title: "Right to Restrict Processing", desc: "Limit how we process your data", icon: "pause_circle" },
                    { title: "Right to Data Portability", desc: "Transfer your data to another organization", icon: "import_export" },
                    { title: "Right to Object", desc: "Object to our processing of your data", icon: "block" }
                  ].map((right, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Box sx={{
                        p: 3,
                          bgcolor: 'var(--card-bg)',
                        borderRadius: 3,
                        borderLeft: 4,
                        borderLeftColor: 'var(--accent-1)',
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start'
                      }}>
                        <span className="material-icons" style={{ color: 'var(--accent-1)', fontSize: '24px', marginTop: '2px' }}>
                          {right.icon}
                        </span>
                        <Box>
                          <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                            {right.title}
                          </Typography>
                          <Typography variant="body2" color="#666">
                            {right.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
