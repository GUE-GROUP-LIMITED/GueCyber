import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecurityIcon from '@mui/icons-material/Security';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';

const faqs = [
  {
    question: "What services does GUE Cyber offer?",
    answer: "GUE Cyber provides cyber security, digital transformation and infrastructure services for MSMEs and enterprises. We offer vulnerability assessments, infrastructure hardening, secure migrations and training to improve resilience.",
    icon: <SecurityIcon />
  },
  {
    question: "How can I request a consultation or project quote?",
    answer: "To request a consultation or a personalized project quote, simply fill out our contact form or email us at info@guecyber.com. Our team will get back to you to discuss your requirements and next steps.",
    icon: <RequestQuoteIcon />
  },
  {
    question: "Do you provide security training and incident response exercises?",
    answer: "Yes — we provide security awareness, tabletop incident response exercises and hands-on technical training like secure coding and log analysis to build internal security capabilities.",
    icon: <SchoolIcon />
  },
  {
    question: "Is GUE Cyber a remote-first company?",
    answer: "Yes, we operate a distributed model to support clients globally — combining remote security monitoring with on-site consulting when required to harden critical infrastructure.",
    icon: <PublicIcon />
  },
  {
    question: "How does GUE Cyber ensure data security?",
    answer: "We follow best practices including zero-trust principles, least-privilege access, regular patching, monitoring and incident response planning. Our programs are designed to reduce attack surface and improve detection and recovery.",
    icon: <SecurityIcon />
  },
  {
    question: "What makes GUE Cyber different from other firms?",
    answer: "Our focus on practical security for MSMEs, combined with infrastructure engineering and training, helps organisations adopt pragmatic, maintainable security practices that fit their context.",
    icon: <StarIcon />
  }
];

const FAQ = () => (
  <Box>
    <Box sx={{ '& .MuiAccordion-root': { mb: 2 } }}>
      {faqs.map((faq, idx) => (
        <Accordion
          key={idx}
          elevation={0}
          sx={{
            '&:before': { display: 'none' },
            borderRadius: '16px !important',
            background: '#fff',
            border: '1px solid #eee',
            overflow: 'hidden',
            '&.Mui-expanded': {
              margin: '0 0 16px 0'
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: '#1a1a1a',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }}
              />
            }
            sx={{
              borderRadius: '16px',
              minHeight: 64,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.02)'
              },
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                gap: 2,
                my: 1.5
              }
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10B981',
                flexShrink: 0,
                '& svg': { fontSize: 20 }
              }}
            >
              {faq.icon}
            </Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                color: '#1a1a1a',
                fontSize: { xs: '0.95rem', md: '1rem' }
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
            <Box sx={{ ml: { xs: 0, sm: 7 } }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  pl: 2,
                  borderLeft: '3px solid #10B981'
                }}
              >
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
