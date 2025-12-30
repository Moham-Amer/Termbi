import React, { useState } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Avatar, Typography, Paper, Divider } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";
import MyOrders from "../components/MyOrders";
import MyReviews from "../components/MyReviews";
import MyBookings from "../components/MyBookings";
import Breadcrumb from "../../../shared/components/Breadcrumb";
import { userInfoStorage } from "../../auth/storage";

const sections = [
  { key: 'profile', label: 'Profile Info', component: ProfileInfo },
  { key: 'orders', label: 'My Orders', component: MyOrders },
  { key: 'reviews', label: 'My Reviews', component: MyReviews },
  { key: 'bookings', label: 'My Bookings', component: MyBookings },
];

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState('profile');
  const user = userInfoStorage.get() || {};

  const ActiveComponent = sections.find(s => s.key === activeSection)?.component || ProfileInfo;

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#f5f5f5', padding: 4 }}>
      <Breadcrumb show={true} items={['Home', 'Profile']} />
      <Paper sx={{ maxWidth: 1200, margin: '0 auto', display: 'flex', minHeight: 600 }}>
        {/* Sidebar */}
        <Box sx={{ width: 300, backgroundColor: '#fff', padding: 2, borderRight: '1px solid #e0e0e0' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <Avatar
              src={user.avatar || '/default-avatar.png'}
              sx={{ width: 80, height: 80, mb: 1 }}
            />
            <Typography variant="h6">{user.name || 'User'}</Typography>
            <Typography variant="body2" color="text.secondary">{user.email || ''}</Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {sections.map((section) => (
              <ListItem key={section.key} disablePadding>
                <ListItemButton
                  selected={activeSection === section.key}
                  onClick={() => setActiveSection(section.key)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <ListItemText primary={section.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Content */}
        <Box sx={{ flex: 1, padding: 3 }}>
          <ActiveComponent />
        </Box>
      </Paper>
    </Box>
  );
}