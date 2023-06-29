import { Box, Typography } from "@mui/material";
import React from "react";

const FoodCard = (props) => {
  return (
    <Box
      sx={{ width: 236, height: 262, borderRadius: 8, background: "#FAF0E4", mx:3, my:2}}
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
      <Box sx={{display:"flex", justifyContent:'space-between', m:1}}>
        <Typography sx={{fontSize:22}}>Cheese {props.foodName}</Typography>
        <Typography sx={{fontSize:22}}><span style={{color:"rgb(255, 132, 0)"}}>₹</span>{props.price}</Typography>
      </Box>
      <Typography sx={{mx:1, fontSize:14, color:"rgb(59 59 59)", whiteSpace:'normal'}}>{props.foodDesc}</Typography>
    </Box>
  );
};

export default FoodCard;
