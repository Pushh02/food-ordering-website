import { Box, Fab, Typography } from "@mui/material";
import arr from "../data";
import FoodCard from "../components/FoodCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FoodCardScroll = () => {
  return (
    <div style={{position:'relative'}}>
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
      <br />
      <Box
        className="scroll"
        id="slide2"
        sx={{
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Fab
          size="medium"
          className="slideRight"
          sx={{ position: "absolute", top: 200 }}
          onClick={() => (document.getElementById("slide2").scrollLeft -= 250)}
        >
          <KeyboardArrowLeftIcon />
        </Fab>
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
        <Fab
          size="medium"
          component="button"
          className="slideLeft"
          sx={{ position: "absolute", top: 200, right: 0 }}
          onClick={() => (document.getElementById("slide2").scrollLeft += 250)}
        >
          <KeyboardArrowRightIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default FoodCardScroll;
