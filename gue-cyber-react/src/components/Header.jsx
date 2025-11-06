import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IconButton, Drawer, List, ListItemButton, ListItemText, Box, Divider, Button, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu and move focus to main when route changes
    useEffect(() => {
        if (mobileOpen) setMobileOpen(false);
        const main = document.getElementById('main');
        if (main) main.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/services", label: "Services" },
        { to: "/contact", label: "Contact" },
        { to: "/careers", label: "Careers" },
        { to: "/blog", label: "Blog" },
    ];

    return (
        <header>
            <Box component="nav" role="navigation" aria-label="Main navigation" sx={{
                background: 'linear-gradient(120deg, rgba(2,31,63,0.95) 0%, rgba(7,16,41,0.95) 100%)',
                color: 'var(--chip-text)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backdropFilter: 'saturate(150%) blur(6px)',
                minHeight: { xs: 64, sm: 72 },
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.04)'
            }}>
                <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', px: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2, flex: '0 0 auto' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <Box component="img" src={logo} alt="GUE Cyber Logo" loading="lazy" sx={{ height: { xs: 36, sm: 48 }, borderRadius: 1 }} />
                        </Link>
                        {!isMobile && (
                            <Typography variant="subtitle1" sx={{ fontWeight: 800, letterSpacing: 1 }}>GUE CYBER</Typography>
                        )}
                    </Box>

                    <Stack direction="row" spacing={3} sx={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                        {/* Desktop nav */}
                        <Stack direction="row" spacing={2} sx={{ display: isMobile ? 'none' : 'flex', alignItems: 'center' }}>
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                    style={({ isActive }) => ({
                                        color: 'var(--chip-text)',
                                        fontWeight: 600,
                                        fontSize: 13,
                                        textTransform: 'uppercase',
                                        padding: isMobile ? '10px 12px' : '8px 10px',
                                        minHeight: 44,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        borderRadius: 8,
                                        textDecoration: 'none',
                                        transition: 'all 160ms ease-in-out',
                                        opacity: isActive ? 1 : 0.92
                                    })}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </Stack>

                        {/* CTA */}
                        {!isMobile && (
                            <Button aria-label="Request consultation" component={Link} to="/contact" variant="contained" sx={{ textTransform: 'none', px: 3, background: 'var(--btn-grad)', color: 'var(--chip-text)' }}>Request Consultation</Button>
                        )}

                        {/* Mobile menu */}
                        <IconButton aria-label="Open navigation menu" aria-expanded={mobileOpen} sx={{ color: 'var(--chip-text)', display: isMobile ? 'inline-flex' : 'none' }} onClick={() => setMobileOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Box>

                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ sx: { background: 'linear-gradient(180deg, rgba(2,31,63,0.98), rgba(7,16,41,0.98))', width: { xs: '80vw', sm: 360 }, p: 2 }, role: 'navigation', 'aria-label': 'Mobile navigation' }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
                            <Box component="img" src={logo} alt="GUE Cyber" loading="lazy" sx={{ height: 36 }} />
                            <Typography sx={{ color: 'var(--chip-text)', fontWeight: 800 }}>GUE CYBER</Typography>
                        </Box>
                        <IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)} sx={{ color: 'var(--chip-text)' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.06)' }} />
                    <List>
                        {navLinks.map((link) => (
                            <ListItemButton key={link.to} component={NavLink} to={link.to} onClick={() => setMobileOpen(false)} sx={{ py: 1.5, textTransform: 'uppercase', color: 'var(--chip-text)' }}>
                                <ListItemText primary={link.label} sx={{ '& .MuiListItemText-primary': { fontWeight: 700, letterSpacing: 0.8 } }} />
                            </ListItemButton>
                        ))}
                        <Box sx={{ mt: 2, px: 1 }}>
                            <Button component={Link} to="/contact" variant="contained" fullWidth sx={{ background: 'var(--btn-grad)', color: 'var(--chip-text)' }} onClick={() => setMobileOpen(false)}>Request Consultation</Button>
                        </Box>
                    </List>
                </Drawer>
            </Box>
        </header>
    );
}