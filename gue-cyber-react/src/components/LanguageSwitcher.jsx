import { useTranslation } from 'react-i18next';
import { Box, Menu, MenuItem, Button } from '@mui/material';
import { useState } from 'react';

export default function LanguageSwitcher({ scrolled, faunaHeroMode }) {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'fr', label: 'Français' },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    handleClose();
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          color: faunaHeroMode ? '#f8fafc' : 'var(--primary)',
          fontWeight: 600,
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          padding: '8px 12px',
          backgroundColor: faunaHeroMode ? 'transparent' : 'transparent',
          '&:hover': {
            backgroundColor: faunaHeroMode ? 'rgba(255,255,255,0.1)' : 'rgba(2,44,34,0.08)',
          },
        }}
      >
        {currentLanguage?.label || 'Language'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            selected={lang.code === i18n.language}
            sx={{ fontSize: '0.9rem' }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
