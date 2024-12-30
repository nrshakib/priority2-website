"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import dashboardIcon from "@/../public/assets/logo/dashboardIcons/dashboardIcon.png";
import appoimtment from "@/../public/assets/logo/dashboardIcons/appoimtment.png";
import schedule from "@/../public/assets/logo/dashboardIcons/schedule.png";
import { RiLogoutBoxLine } from "react-icons/ri";

const sidebarWidth = "280px";

const DashboardSidebar = () => {
  const router = useRouter();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: (
        <Image
          src={dashboardIcon}
          alt="dashboardIcon"
          height={0}
          width={0}
          className="size-5"
        />
      ),
      href: "/dashboard",
    },
    {
      text: "Appointment",
      icon: (
        <Image
          src={appoimtment}
          alt="appointment icon"
          height={0}
          width={0}
          className="size-5"
        />
      ),
      href: "/dashboard/appointment",
    },
    {
      text: "Create Schedule",
      icon: (
        <Image
          src={schedule}
          alt="schedule"
          height={0}
          width={0}
          className="size-5"
        />
      ),
      href: "/dashboard/create-schedule",
    },
    {
      text: "User Profile",
      icon: <FaUser fontSize={20} color="#333333" />,
      href: "/dashboard/user-profile",
    },
    {
      text: "Log Out",
      icon: <RiLogoutBoxLine fontSize={20} color="#333333" />,
      href: "/dashboard/user-profile",
    },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: sidebarWidth,
        height: "100vh",
        backgroundColor: "#D0FBE4",
        display: "flex",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            href={item.href}
            sx={{
              backgroundColor:
                router.pathname === item.href ? "primary.light" : "inherit",
              borderRadius: 1,
            }}
            className="flex items-center"
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer Button */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1201,
        }}
      >
        <FaBars />
      </IconButton>

      {/* Permanent Sidebar for Larger Screens */}
      <Box
        sx={{
          width: sidebarWidth,
          height: "100vh",
          backgroundColor: "#D0FBE4",
          display: { xs: "none", sm: "block" },
        }}
      >
        {drawerContent}
      </Box>

      {/* Drawer for Smaller Screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default DashboardSidebar;
