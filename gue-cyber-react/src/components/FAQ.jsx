import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecurityIcon from '@mui/icons-material/Security';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';

const faqData = [
  { questionKey: "q1", answerKey: "a1", icon: <SecurityIcon /> },
  { questionKey: "q2", answerKey: "a2", icon: <RequestQuoteIcon /> },
  { questionKey: "q3", answerKey: "a3", icon: <SchoolIcon /> },
  { questionKey: "q4", answerKey: "a4", icon: <StarIcon /> },
];

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = faqData.map((item) => ({
    question: t(`faq.${item.questionKey}`),
    answer: t(`faq.${item.answerKey}`),
    icon: item.icon,
  }));

  return (
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
            border: '1px solid var(--border)',
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
                  color: 'var(--primary)',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }}
              />
            }
            sx={{
              borderRadius: '16px',
              minHeight: 64,
              '&:hover': {
                bgcolor: 'rgba(15, 23, 42, 0.03)'
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
                background: 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
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
                color: 'var(--primary)',
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
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  pl: 2,
                  borderLeft: '3px solid var(--accent)'
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
  }

export default FAQ;
