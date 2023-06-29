import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import CatergoryScroll from "../components/CatergoryScroll";
import FoodCardScroll from "../components/FoodCardScroll";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box component={"main"} sx={{ my: 3, mx: 7 }}>
        <CatergoryScroll />
        <FoodCardScroll/>
      </Box>
    </>
  );
};

export default Home;
