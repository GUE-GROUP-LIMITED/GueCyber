import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IconButton, Drawer, List, ListItemButton, ListItemText, Box, Divider, Button, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
        { to: "/careers", label: "Careers" },
        { to: "/blog", label: "Case Studies" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header>
            <Box component="nav" sx={{
                background: scrolled ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                minHeight: { xs: 70, md: 90 },
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.05)' : 'none',
            }}>
                <Box sx={{ width: '100%', maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 6 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Brand */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}>
                        <Box component="img" src={logo} alt="GUE Cyber" sx={{ height: { xs: 36, md: 48 }, width: 'auto' }} />
                        <Typography sx={{
                            fontFamily: 'Outfit',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            color: '#1a1a1a',
                            fontSize: { xs: '1.1rem', md: '1.4rem' },
                            display: { xs: 'none', lg: 'block' }
                        }}>
                            GUE CYBER
                        </Typography>
                    </Box>

                    {/* Desktop Navigation */}
                    <Stack direction="row" spacing={1} sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        p: 1,
                        background: scrolled ? 'transparent' : 'rgba(0,0,0,0.03)',
                        borderRadius: '100px',
                        border: scrolled ? 'none' : '1px solid rgba(0,0,0,0.05)'
                    }}>
                        {navLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                style={({ isActive }) => ({
                                    color: isActive ? '#1a1a1a' : '#666',
                                    fontWeight: isActive ? 700 : 500,
                                    fontSize: '0.9rem',
                                    padding: '8px 24px',
                                    borderRadius: '100px',
                                    textDecoration: 'none',
                                    transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                                    background: isActive ? '#fff' : 'transparent',
                                    boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.05)' : 'none'
                                })}
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
                                px: 4, py: 1.5,
                                background: '#1a1a1a',
                                color: '#fff',
                                borderRadius: '100px',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                '&:hover': { background: '#10B981', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)' }
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        onClick={() => setMobileOpen(true)}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            color: '#1a1a1a',
                            background: 'rgba(0,0,0,0.05)',
                            '&:hover': { background: 'rgba(0,0,0,0.1)' }
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
                    PaperProps={{ sx: { width: '85%', maxWidth: 360, p: 4, background: '#fff' } }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                        <Box component="img" src={logo} sx={{ height: 40 }} />
                        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#1a1a1a' }}>
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
                                    '&.active': { background: 'rgba(16, 185, 129, 0.05)', color: '#10B981' }
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
                        sx={{ mt: 4, py: 2, borderRadius: '16px', background: '#1a1a1a', fontWeight: 700 }}
                    >
                        Get Started
                    </Button>
                </Drawer>
            </Box>
        </header>
    );
}