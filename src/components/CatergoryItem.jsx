import { Box, Typography } from "@mui/material";
import React from "react";

const CatergoryItem = (props) => {
  return (
    <Box
      sx={{
        display:'inline-block',
        width: 236,
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
        style={{ borderRadius: 40, opacity:'50%' }}
        src={props.imgSrc}
        alt={props.imgName}
      />
      <Typography
        sx={{
          position: "absolute",
          top: 84,
          left: 77,
          fontSize: 28,
          fontFamily: "cursive",
          color: "white",
        }}
      >
        {props.foodName}
      </Typography>
    </Box>
  );
};

export default CatergoryItem;
