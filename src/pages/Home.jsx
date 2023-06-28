import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import CatergoryItem from "../components/CatergoryItem";
import arr from "../data";
import FoodCard from "../components/FoodCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box component={"main"} sx={{ my: 3, mx: 7 }}>
        <Typography
          sx={{
            display: "inline-block",
            fontSize: 31,
            fontFamily: "kanit",
            fontWeight: 900,
          }}
        >
          Catergories
          <hr style={{ borderBottom: "2px solid #FF8400" }} />
        </Typography>
        <Box sx={{ display: "flex" }}>
          {arr.map((s) => {
            return (
              <CatergoryItem
                key={s.id}
                imgSrc={s.imgSrc}
                imgName={s.imgName}
                foodName={s.foodName}
              />
            );
          })}
        </Box>
        <Typography
          sx={{
            display: "inline-block",
            fontSize: 31,
            fontFamily: "kanit",
            fontWeight: 900,
          }}
        >
          Recommended
          <hr style={{ borderBottom: "2px solid #FF8400" }} />
        </Typography>
        <Box sx={{ display: "flex" }}>
          {arr.map((s) => {
            return <FoodCard imgSrc={s.imgSrc} foodName={s.foodName} price={s.price} foodDesc={s.description} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Home;
