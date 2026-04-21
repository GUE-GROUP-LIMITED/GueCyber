import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { supabase } from "../lib/supabase";

const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function sanitizeForPath(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

async function sendNewApplicationAlert(payload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const toEmail = import.meta.env.VITE_APPLICATION_ALERT_TO_EMAIL || "hr@guecyber.com";

  if (!serviceId || !templateId || !publicKey) {
    return;
  }

  await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        to_email: toEmail,
        applicant_name: payload.fullName,
        applicant_email: payload.email,
        applicant_phone: payload.phone || "-",
        job_title: payload.jobTitle,
        cover_letter: payload.coverLetter || "-",
        submitted_at: new Date().toISOString(),
      },
    }),
  });
}

async function sendCandidateAcknowledgment(payload) {
  const functionName = import.meta.env.VITE_SUPABASE_ACK_FUNCTION_NAME || "send-application-ack";

  const { error } = await supabase.functions.invoke(functionName, {
    body: {
      fullName: payload.fullName,
      email: payload.email,
      jobTitle: payload.jobTitle,
      submittedAt: new Date().toISOString(),
    },
  });

  if (error) {
    throw error;
  }
}

export default function Careers() {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    website: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState("");
  const [applicationMessageType, setApplicationMessageType] = useState("success");

  const openings = [
    {
      id: "security-engineer",
      titleKey: "job1Title",
      type: "Hybrid",
      level: "Mid-Senior",
      skills: ["Risk Assessment", "Penetration Testing", "Security Governance"],
    },
    {
      id: "cloud-devops-engineer",
      titleKey: "job2Title",
      type: "Hybrid",
      level: "Mid",
      skills: ["AWS or Azure", "CI/CD", "Infrastructure Automation"],
    },
    {
      id: "fullstack-software-engineer",
      titleKey: "job3Title",
      type: "Remote",
      level: "Mid",
      skills: ["React", "Node.js", "API Integration"],
    },
    {
      id: "enterprise-training-specialist",
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

  const selectedJobTitle = useMemo(() => {
    if (!selectedJob) return "";
    return t(`careers.${selectedJob.titleKey}`);
  }, [selectedJob, t]);

  const resetFormState = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
      website: "",
    });
    setCvFile(null);
    setFormError("");
    setSubmitting(false);
  };

  const openApplicationDialog = (job) => {
    setSelectedJob(job);
    setFormError("");
    setDialogOpen(true);
  };

  const closeApplicationDialog = () => {
    setDialogOpen(false);
    setSelectedJob(null);
    resetFormState();
  };

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setFormError("");
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] ?? null;
    setCvFile(file);
    setFormError("");
  };

  const validateApplicationForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) return t("careers.form.fullNameRequired");
    if (!formData.email.trim()) return t("careers.form.emailRequired");
    if (!emailPattern.test(formData.email.trim())) return t("careers.form.emailInvalid");
    if (!cvFile) return t("careers.form.cvRequired");
    if (!ALLOWED_CV_TYPES.includes(cvFile.type)) return t("careers.form.cvInvalidType");
    if (cvFile.size > MAX_CV_SIZE_BYTES) return t("careers.form.cvTooLarge");

    return "";
  };

  const handleSubmitApplication = async (event) => {
    event.preventDefault();

    if (!selectedJob) {
      setFormError(t("careers.form.generalError"));
      return;
    }

    if (formData.website.trim()) {
      setApplicationMessage(t("careers.form.successMessage"));
      setApplicationMessageType("success");
      closeApplicationDialog();
      return;
    }

    const validationError = validateApplicationForm();
    if (validationError) {
      setFormError(validationError);
      return;
    }

    const normalizedEmail = formData.email.trim().toLowerCase();
    const fileExtension = cvFile.name.includes(".") ? cvFile.name.split(".").pop().toLowerCase() : "file";
    const fileName = `${Date.now()}-${sanitizeForPath(normalizedEmail)}.${fileExtension}`;
    const filePath = `${selectedJob.id}/${fileName}`;

    setSubmitting(true);
    setFormError("");

    try {
      const { error: uploadError } = await supabase.storage.from("candidate-cv").upload(filePath, cvFile, {
        cacheControl: "3600",
        upsert: false,
      });

      if (uploadError) {
        setFormError(t("careers.form.uploadFailed"));
        return;
      }

      const payload = {
        full_name: formData.fullName.trim(),
        email: normalizedEmail,
        phone: formData.phone.trim() || null,
        job_key: selectedJob.id,
        job_title: selectedJobTitle,
        cover_letter: formData.coverLetter.trim() || null,
        cv_file_path: filePath,
        status: "new",
      };

      const { error: insertError } = await supabase.from("job_applications").insert([payload]);

      if (insertError) {
        if (insertError.code === "23505") {
          setFormError(t("careers.form.duplicateApplication"));
        } else {
          setFormError(t("careers.form.submitFailed"));
        }

        await supabase.storage.from("candidate-cv").remove([filePath]);
        return;
      }

      // Alert email is sent only after a new application is saved successfully.
      try {
        await sendNewApplicationAlert({
          fullName: payload.full_name,
          email: payload.email,
          phone: payload.phone,
          jobTitle: payload.job_title,
          coverLetter: payload.cover_letter,
        });
      } catch (alertError) {
        console.warn("Application saved but email alert failed.", alertError);
      }

      // Candidate acknowledgment is sent after successful persistence.
      try {
        await sendCandidateAcknowledgment({
          fullName: payload.full_name,
          email: payload.email,
          jobTitle: payload.job_title,
        });
      } catch (ackError) {
        console.warn("Application saved but acknowledgment email failed.", ackError);
      }

      setApplicationMessage(t("careers.form.successMessage"));
      setApplicationMessageType("success");
      closeApplicationDialog();
    } catch {
      setFormError(t("careers.form.unexpectedError"));
    } finally {
      setSubmitting(false);
    }
  };

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

          {applicationMessage ? (
            <Alert severity={applicationMessageType} sx={{ mb: 3.5 }}>
              {applicationMessage}
            </Alert>
          ) : null}

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

                  <Button fullWidth variant="contained" onClick={() => openApplicationDialog(job)}>
                    {t('careers.applyNow')}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Dialog open={dialogOpen} onClose={closeApplicationDialog} fullWidth maxWidth="sm">
            <DialogTitle>
              {t("careers.form.title", { jobTitle: selectedJobTitle })}
            </DialogTitle>
            <DialogContent>
              <Stack component="form" spacing={1.8} sx={{ pt: 1 }} onSubmit={handleSubmitApplication}>
                {formError ? <Alert severity="error">{formError}</Alert> : null}

                <TextField
                  label={t("careers.form.fullName")}
                  value={formData.fullName}
                  onChange={handleInputChange("fullName")}
                  fullWidth
                  required
                />

                <TextField
                  label={t("careers.form.email")}
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  type="email"
                  fullWidth
                  required
                />

                <TextField
                  label={t("careers.form.phone")}
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  fullWidth
                />

                <TextField
                  label={t("careers.form.coverLetter")}
                  value={formData.coverLetter}
                  onChange={handleInputChange("coverLetter")}
                  fullWidth
                  multiline
                  minRows={4}
                />

                <TextField
                  label={t("careers.form.honeypot")}
                  value={formData.website}
                  onChange={handleInputChange("website")}
                  autoComplete="off"
                  tabIndex={-1}
                  sx={{ display: "none" }}
                />

                <Stack spacing={0.7}>
                  <Button variant="outlined" component="label" sx={{ justifyContent: "flex-start" }}>
                    {cvFile ? cvFile.name : t("careers.form.uploadCv")}
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </Button>
                  <Typography sx={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {t("careers.form.cvHint")}
                  </Typography>
                </Stack>

                <DialogActions sx={{ px: 0, pt: 0.5 }}>
                  <Button onClick={closeApplicationDialog} disabled={submitting}>
                    {t("careers.form.cancel")}
                  </Button>
                  <Button type="submit" variant="contained" disabled={submitting}>
                    {submitting ? t("careers.form.submitting") : t("careers.form.submit")}
                  </Button>
                </DialogActions>
              </Stack>
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    </main>
  );
}
