import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CatergoryItem = (props) => {
  return (
    <Link to="/">
      <Box
        sx={{
          display: "inline-block",
          width: 209,
          height: 204,
          position: "relative",
          borderRadius: 10,
          background: "black",
          my: 2,
          mx: 3,
        }}
      >
        <img
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: 40, opacity: "50%" }}
          src={props.imgSrc}
          alt={props.imgName}
        />
        <Typography
          sx={{
            position: "absolute",
            top: 84,
            left: '20%',
            right: '20%',
            textAlign:'center',
            fontSize: 28,
            fontFamily: "cursive",
            color: "white",
          }}
        >
          {props.foodName}
        </Typography>
      </Box>
    </Link>
  );
};

export default CatergoryItem;
