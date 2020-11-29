import {AppBar, Toolbar, Typography, makeStyles, Button} from "@material-ui/core";
  import React from "react";
  import { Link as RouterLink } from "react-router-dom";
  
  const headersData = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Education",
      href: "/education",
    },
    {
      label: "Portofolio",
      href: "/portofolio",
    },
  ];
                       
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#F5F5F5",
    },
    logo: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 100,
      color: "#151515",
      textAlign: "left",
    },
    menuButton: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 100,
        color: "#151515",
        size: "18px",
        marginLeft: "50px",
     },
     toolbar: {
    display: "flex",
    justifyContent: "space-between"
    }
  }));
                       
  export default function Header() {
    const { header, logo, menuButton } = useStyles();
                       
    const displayDesktop = () => {
      return (
        <Toolbar classname="toolbar">
          {designLogo}
          {getMenuButtons()}
        </Toolbar>
      );
    };
                       
    const designLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        Rachel Smith
      </Typography>
    );
                       
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
            <Button
            {...{
               key: label,
               color: "inherit",
               to: href,
               component: RouterLink,
               className: menuButton
            }}>
            {label}
          </Button>
        );
      });
    };
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }
  

