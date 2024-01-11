import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem } from "@mui/material";

const drawerWidth = 300;
const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Team", link: "/team" },
  { text: "Contact", link: "/contact" },
];

const userItems = [
  { text: "Login", link: "/login" },
  { text: "Signup", link: "/signup" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ window, handleRouteChange, startLoading }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [auth, setAuth] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavLinkClick = () => {
    startLoading();
    setMobileOpen(false); // Close the drawer when a link is clicked on mobile
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: drawerWidth,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              onClick={() => {
                handleNavLinkClick();
                handleRouteChange();
              }}
              sx={{
                textAlign: "center",
                color: "black",
                textTransform: "capitalize",
              }}
            >
              {item.nestedItems ? (
                <>
                  {item.text}
                  <ArrowDropDownIcon />
                  <List>
                    {item.nestedItems.map((nestedItem) => (
                      <ListItem key={nestedItem.text} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={nestedItem.link}
                          onClick={() => {
                            handleNavLinkClick();
                            handleRouteChange();
                          }}
                          sx={{ color: "black" }}
                        >
                          <ListItemText primary={nestedItem.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </>
              ) : (
                <ListItemText primary={item.text} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#8b3eea" }}>
          <Toolbar>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "#fff" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "block",
                textAlign: { xs: "center", sm: "left", md: "left" },
                color: "#fff",
              }}
            >
              <Link
                to="/"
                onClick={() => {
                  handleNavLinkClick();
                  handleRouteChange();
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                Logo
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                flex: 5,
                textAlign: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  to={item.link}
                  component={Link}
                  onClick={() => {
                    handleNavLinkClick();
                    handleRouteChange();
                  }}
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            {auth ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              userItems.map((items) => (
                <Button
                  key={items.text}
                  to={items.link}
                  component={Link}
                  onClick={() => {
                    handleNavLinkClick();
                    handleRouteChange();
                  }}
                  sx={{
                    color: "#fff",
                    textAlign: "right",
                    textTransform: "capitalize",
                  }}
                >
                  {items.text}
                </Button>
              ))
            )}
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            anchor="left"
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

export default Navbar;
