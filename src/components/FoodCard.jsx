import { Box, Typography, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  return (
    <Link to="/">
      <Box
        sx={{
          display: "inline-block",
          width: 224,
          height: 290,
          borderRadius: 8,
          background: "#FAF0E4",
          mx: 2,
          my: 2,
          overflow: "hidden",
        }}
      >
        <img
          src={props.imgSrc}
          alt={props.imgName}
          style={{
            height: "50%",
            width: "100%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
          <Typography
          title={props.foodName}
            sx={{ fontSize: 16, whiteSpace:"nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {props.foodName}
          </Typography>
          <Typography sx={{ fontSize: 16 }}>
            <span style={{ color: "rgb(255, 132, 0)" }}>₹</span>
            {props.price}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", height:"30px", mb:1}}>
          <Button variant="contained" size="small" sx={{fontSize:"9px", backgroundColor:"coral", ":hover": { backgroundColor: "rgb(255, 102, 46)" }}}><ShoppingCartOutlinedIcon fontSize="small"/>Add to cart</Button>
          <Button variant="contained" size="small" sx={{fontSize:"9px", backgroundColor:"coral", ":hover": { backgroundColor: "rgb(255, 102, 46)" }}}><ShoppingCartOutlinedIcon fontSize="small"/>Order Now</Button>
        </Box>
        <Typography
          sx={{
            mx: 1,
            fontSize: 12,
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
