import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import arr from "../data";
import FoodCard from "../components/FoodCard";
import CatergoryScroll from "../components/CatergoryScroll";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box component={"main"} sx={{ my: 3, mx: 7 }}>
        <CatergoryScroll />
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
        <Box
          className="scroll"
          sx={{
            display: "flex",
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {arr.map((s) => {
            return (
              <FoodCard
                key={s.id}
                imgSrc={s.imgSrc}
                foodName={s.foodName}
                price={s.price}
                foodDesc={s.description}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Home;
