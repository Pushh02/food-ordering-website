import { Box, Fab, Typography } from "@mui/material";
import arr from "../data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CatergoryItem from "./CatergoryItem";

const CatergoryScroll = () => {
  // window.onload = function () {
  //   const buttonRight = document.getElementById("slideRight");
  //   const buttonLeft = document.getElementById("slideLeft");
  //   buttonRight.onClick = function () {
  //     document.getElementById("scroll").scrollLeft += 5;
  //   };
  //   buttonLeft.onClick = function () {
  //     document.getElementById("scroll").scrollLeft -= 20;
  //   };
  // };

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
          sx={{ position: "absolute", top: 184 }}
          onClick={()=>document.getElementById("slide").scrollLeft -= 100}
        >
          <KeyboardArrowLeftIcon />
        </Fab>
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
        <Fab
          size="medium"
          component="button"
          className="slideLeft"
          sx={{ position: "absolute", top: 184, right: 0 }}
          onClick={()=>document.getElementById("slide").scrollLeft += 100}
        >
          <KeyboardArrowRightIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default CatergoryScroll;
