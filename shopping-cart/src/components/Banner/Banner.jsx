import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1700056212664-a2998bf82d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: -10,
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" color="white" fontWeight="bold" sx={{ mb: "1rem" }}>
        Bazaar
      </Typography>
      <Typography variant="h4" color="white" sx={{ mb: "1rem" }}>
        Discover the best products & clothes in Delhi NCR
      </Typography>
      <SearchBar />
    </Box>
  );
};

export default Banner;