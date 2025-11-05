import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { IconButton, Drawer, List, ListItemButton, ListItemText, Box, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <nav className="nav-wrapper" style={{
                background: "linear-gradient(120deg, var(--new-brown) 0%, var(--dark-teal) 100%)",
                color: "var(--bg-grey)",
                boxShadow: "0 2px 8px rgba(66,128,236,0.10)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                minHeight: 72,
                display: "flex",
                alignItems: "center",
                borderBottom: "2px solid var(--new-grey)",
                padding: "0 1rem"
            }}>
                <div className="container" style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: 0
                }}>
                    <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", minWidth: 0 }}>
                        <Link to="/" className="brand-logo" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                            <img src={logo} alt="GUE Cyber Logo" style={{
                                height: isMobile ? 36 : 48,
                                maxWidth: isMobile ? 100 : 240,
                                width: "auto",
                                objectFit: "contain",
                                borderRadius: 8,
                                boxShadow: "0 1px 4px rgba(66,128,236,0.10)"
                            }} />
                            <div style={{ display: isMobile ? 'none' : 'block', color: 'var(--bg-grey)', fontWeight: 800, letterSpacing: 1, fontSize: isMobile ? 14 : 16 }}>
                                GUE CYBER
                            </div>
                        </Link>
                    </div>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", minWidth: 0 }}>
                        <ul className="nav-links" style={{
                            display: isMobile ? "none" : "flex",
                            gap: 20,
                            alignItems: "center",
                            listStyle: "none",
                            margin: 0
                        }}>
                            {navLinks.map(link => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className="nav-link"
                                        style={({ isActive }) => ({
                                            color: isActive ? "var(--bg-grey)" : "var(--bg-grey)",
                                            fontWeight: 600,
                                            fontSize: 14,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.7,
                                            padding: "8px 12px",
                                            borderRadius: 8,
                                            background: isActive ? 'var(--btn-outline-hover-bg)' : 'none',
                                            boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                                            transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                                            position: "relative",
                                            outline: isActive ? "2px solid var(--bg-grey)" : "none",
                                            whiteSpace: "nowrap",
                                            textDecoration: "none"
                                        })}
                                        tabIndex={0}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <IconButton
                            aria-label="Open navigation menu"
                            aria-expanded={mobileOpen}
                            sx={{
                                display: isMobile ? 'inline-flex' : 'none',
                                color: 'var(--bg-grey)',
                                position: 'relative',
                                zIndex: 1400
                            }}
                            onClick={() => setMobileOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ sx: { background: 'rgba(18,20,20,0.96)', width: { xs: '80vw', sm: 360 }, p: 2 } }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)} sx={{ color: 'var(--chip-text)' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.06)' }} />
                    <List>
                        {navLinks.map((link) => (
                            <ListItemButton
                                key={link.to}
                                component={NavLink}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                sx={{ py: 1.5, textTransform: 'uppercase', color: 'var(--chip-text)' }}
                            >
                                <ListItemText primary={link.label} sx={{ '& .MuiListItemText-primary': { fontWeight: 700, letterSpacing: 0.8 } }} />
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
            </nav>
        </header>
    );
}