import logo from "../assets/logo.webp";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IconButton, Drawer, List, ListItemButton, ListItemText, Box, Button, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";
    const faunaHeroMode = isHome && !scrolled;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services", label: "Services" },
        { to: "/blog", label: "Projects & Cases" },
        { to: "/contact", label: "Contact" },
    ];

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? (faunaHeroMode ? '#f8fafc' : 'var(--primary)') : (faunaHeroMode ? 'rgba(226,232,240,0.9)' : '#475569'),
        fontWeight: isActive ? 700 : 600,
        fontSize: '0.9rem',
        padding: '10px 4px',
        borderBottom: `2px solid ${isActive ? (faunaHeroMode ? '#a3e635' : 'var(--accent)') : 'transparent'}`,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        background: 'transparent',
        boxShadow: 'none',
    });

    return (
        <header>
            <Box component="nav" sx={{
                background: faunaHeroMode ? 'transparent' : '#ffffff',
                backdropFilter: faunaHeroMode ? 'blur(16px)' : 'none',
                WebkitBackdropFilter: faunaHeroMode ? 'blur(16px)' : 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                minHeight: { xs: 70, md: 82, lg: 88 },
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.4s ease',
                borderBottom: faunaHeroMode ? '1px solid transparent' : '1px solid var(--border)',
                boxShadow: faunaHeroMode ? 'none' : 'none',
            }}>
                <Box sx={{ width: '100%', maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 5, lg: 6 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Brand */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.2, md: 2 }, textDecoration: 'none' }}>
                        <Box component="img" src={logo} alt="GUE Cyber" loading="eager" decoding="async" fetchPriority="high" sx={{ height: { xs: 36, md: 46, lg: 50 }, width: 'auto' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
                            <Box component="span" sx={{ color: faunaHeroMode ? '#f8fafc' : 'var(--primary)', fontWeight: 800, fontSize: { xs: '0.78rem', md: '0.95rem' }, letterSpacing: '0.04em' }}>
                                GUE CYBER
                            </Box>
                            <Box component="span" sx={{ display: { xs: 'none', sm: 'block' }, color: faunaHeroMode ? 'rgba(226,232,240,0.82)' : '#64748b', fontWeight: 600, fontSize: { xs: '0.64rem', md: '0.72rem' }, letterSpacing: '0.1em' }}>
                                LIMITED
                            </Box>
                        </Box>
                    </Box>

                    {/* Desktop Navigation */}
                    <Stack direction="row" spacing={3} sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        p: 0,
                        borderRadius: '999px',
                        background: 'transparent',
                        border: 'none',
                    }}>
                        {navLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                style={navLinkStyle}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </Stack>

                    {/* Desktop CTA */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button
                            component={Link} to="/contact"
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                px: { md: 3.4, lg: 4 }, py: { md: 1.25, lg: 1.5 },
                                background: faunaHeroMode ? 'transparent' : 'var(--primary)',
                                color: faunaHeroMode ? '#f8fafc' : '#fff',
                                border: faunaHeroMode ? '1px solid rgba(248,250,252,0.5)' : '1px solid transparent',
                                borderRadius: '100px',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                boxShadow: 'var(--shadow-sm)',
                                '&:hover': { background: 'var(--accent)', boxShadow: 'var(--shadow-md)' }
                            }}
                        >
                            Get in touch
                        </Button>
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        aria-label="Open navigation menu"
                        onClick={() => setMobileOpen(true)}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            color: faunaHeroMode ? '#f8fafc' : 'var(--primary)',
                            background: faunaHeroMode ? 'rgba(248,250,252,0.16)' : 'rgba(15,23,42,0.06)',
                            '&:hover': { background: faunaHeroMode ? 'rgba(248,250,252,0.24)' : 'rgba(15,23,42,0.12)' }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* Mobile Menu */}
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    PaperProps={{ sx: { width: '85%', maxWidth: 360, p: 4, background: '#fff', borderLeft: '1px solid var(--border)' } }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box component="img" src={logo} alt="GUE Cyber logo" loading="lazy" decoding="async" sx={{ height: 40 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
                                <Box component="span" sx={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.04em' }}>
                                    GUE CYBER
                                </Box>
                                <Box component="span" sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.1em' }}>
                                    LIMITED
                                </Box>
                            </Box>
                        </Box>
                        <IconButton aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} sx={{ color: 'var(--primary)' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {navLinks.map((link) => (
                            <ListItemButton
                                key={link.to}
                                component={NavLink} to={link.to}
                                onClick={() => setMobileOpen(false)}
                                sx={{
                                    py: 2.5, borderRadius: '16px',
                                    '&.active': { background: 'var(--accent-soft)', color: 'var(--accent)' }
                                }}
                            >
                                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 700, fontSize: '1.2rem' }} />
                            </ListItemButton>
                        ))}
                    </List>
                    <Button
                        component={Link} to="/contact"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 4, py: 2, borderRadius: '16px', background: 'var(--primary)', fontWeight: 700, '&:hover': { background: 'var(--accent)' } }}
                    >
                        Get Started
                    </Button>
                </Drawer>
            </Box>
        </header>
    );
}