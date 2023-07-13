import { Box, Fab, Typography } from "@mui/material";
// import arr from "../data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import CatergoryItem from "./CatergoryItem";

const CatergoryScroll = () => {
  const [cats,setCats] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
        const response = await fetch("http://localhost:8000/categories",{
          method:"GET"
        })
        const cat = await response.json()
        setCats(cat)
        console.log(cat)
      }
      fetchData()
  },[]) 

  return (
    <div style={{position: "relative",}}>
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
      <br />
      <Box
        className="scroll"
        id="slide"
        sx={{
          overflowX: "scroll",
          whiteSpace: "nowrap",
        }}
      >
        <Fab
          size="medium"
          className="slideRight"
          sx={{ position: "absolute", top: 179 }}
          onClick={()=>document.getElementById("slide").scrollLeft -= 250}
        >
          <KeyboardArrowLeftIcon />
        </Fab>
        {cats.map((s) => {
          return (
            <CatergoryItem
              key={s.id}
              imgSrc={s.img}
              // imgName={s.name} 
              foodName={s.name}
            />
          );
        })}
        <Fab
          size="medium"
          component="button"
          className="slideLeft"
          sx={{ position: "absolute", top: 179, right: 0 }}
          onClick={()=>document.getElementById("slide").scrollLeft += 250}
        >
          <KeyboardArrowRightIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default CatergoryScroll;
