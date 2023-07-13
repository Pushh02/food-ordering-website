import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  return (
    <Link to="/">
      <Box
        sx={{
          display: "inline-block",
          width: 209,
          height: 270,
          borderRadius: 8,
          background: "#FAF0E4",
          mx: 3,
          my: 2,
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        <img
          src={props.imgSrc}
          alt={props.imgName}
          style={{
            height: "60%",
            width: "100%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
          <Typography
          title={props.foodName}
            sx={{ fontSize: 20, textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {props.foodName}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            <span style={{ color: "rgb(255, 132, 0)" }}>₹</span>
            {props.price}
          </Typography>
        </Box>
        <Typography
          sx={{
            mx: 1,
            fontSize: 14,
            color: "rgb(59 59 59)",
            whiteSpace: "normal",
            mb: 1,
          }}
        >
          {props.foodDesc}
        </Typography>
      </Box>
    </Link>
  );
};

export default FoodCard;
