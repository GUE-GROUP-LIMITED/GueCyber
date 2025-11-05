import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Card, CardContent } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What services does GUE Cyber offer?",
    answer:
      "GUE Cyber provides cyber security, digital transformation and infrastructure services for MSMEs and enterprises. We offer vulnerability assessments, infrastructure hardening, secure migrations and training to improve resilience.",
    icon: "security"
  },
  {
    question: "How can I request a consultation or project quote?",
    answer:
      "To request a consultation or a personalized project quote, simply fill out our contact form or email us at info@guecyber.com. Our team will get back to you to discuss your requirements and next steps.",
    icon: "request_quote"
  },
  {
    question: "Do you provide security training and incident response exercises?",
    answer:
      "Yes — we provide security awareness, tabletop incident response exercises and hands-on technical training like secure coding and log analysis to build internal security capabilities.",
    icon: "school"
  },
  {
    question: "Is GUE Cyber a remote-first company?",
    answer:
      "Yes, we operate a distributed model to support clients globally — combining remote security monitoring with on-site consulting when required to harden critical infrastructure.",
    icon: "public"
  },
  {
    question: "How does GUE Cyber ensure data security?",
    answer:
      "We follow best practices including zero-trust principles, least-privilege access, regular patching, monitoring and incident response planning. Our programs are designed to reduce attack surface and improve detection and recovery.",
    icon: "security"
  },
  {
    question: "What makes GUE Cyber different from other firms?",
    answer:
      "Our focus on practical security for MSMEs, combined with infrastructure engineering and training, helps organisations adopt pragmatic, maintainable security practices that fit their context.",
    icon: "star"
  }
];

const FAQ = () => (
  <Box>
        <Card sx={{ mb: 4, background: 'var(--card-bg)', boxShadow: 3 }}>
      <CardContent sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={700} gutterBottom color="primary" sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          mb: 2
        }}>
          <span className="material-icons" style={{ fontSize: '2.5rem' }}>help_center</span>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--muted-text)', fontSize: '1.1rem', maxWidth: 600, mx: 'auto' }}>
          Find answers to common questions about our services, processes, and company. Can't find what you're looking for? Feel free to contact us directly.
        </Typography>
      </CardContent>
    </Card>

    <Box sx={{ '& .MuiAccordion-root': { mb: 2, borderRadius: 2, boxShadow: 2 } }}>
      {faqs.map((faq, idx) => (
        <Accordion
          key={idx}
          sx={{
            '&:before': { display: 'none' },
            borderRadius: '12px !important',
            background: 'var(--card-bg)',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'var(--accent-1)', fontSize: '1.8rem' }} />}
            sx={{
              borderRadius: '12px',
              '&:hover': {
                bgcolor: 'rgba(25, 118, 210, 0.04)'
              },
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                gap: 2
              }
            }}
          >
            <span className="material-icons" style={{
              color: 'var(--accent-1)',
              fontSize: '24px',
              marginRight: '8px'
            }}>
              {faq.icon}
            </span>
            <Typography variant="h6" fontWeight={600} sx={{ color: 'var(--hero-text)', fontSize: '1.1rem' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
            <Box sx={{ ml: 5 }}>
              <Typography variant="body1" sx={{
                color: 'var(--muted-text)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                pl: 1,
                borderLeft: 3,
                borderLeftColor: 'var(--accent-1)'
              }}>
                {faq.answer}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Box>
);

export default FAQ;
