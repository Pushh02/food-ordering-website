import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-around",
          alignItems: "center",
          py: 3,
        }}
      >
        <NavLink style={{textDecoration:'none', color:"black",}} to="/">
          <Typography
            sx={{
              fontSize: 34,
              fontFamily: "jockey one",
              fontWeight: 500,
              textDecoration:'none',
            }}
          >
            EPIC CAFE
          </Typography>
        </NavLink>
        <TextField
          placeholder="Search for food"
          sx={{
            width: 635,
            height: 50,
            "& fieldset": { border: 0 },
            "&:focus": { border: 0 },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                border: 0,
              },
            },
            borderRadius: 28,
            boxShadow: "3px 7px 17px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
        <NavLink to="/" style={{textDecoration:'none', color:"black",}}>
          <Typography
            sx={{
              fontSize: 25,
              fontFamily: "Kanit",
              fontWeight: 600,
            }}
          >
            Menu
          </Typography>
        </NavLink>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <NavLink to="/" style={{textDecoration:'none', color:"black",}}>
            <Typography
              sx={{
                fontSize: 25,
                fontFamily: "Kanit",
                fontWeight: 600,
              }}
            >
              Login
            </Typography>
          </NavLink>
          <NavLink to="/" style={{textDecoration:'none', color:"black",}}>
            <Typography
              sx={{
                fontSize: 25,
                fontFamily: "Kanit",
                fontWeight: 600,
              }}
            >
              Signup
            </Typography>
          </NavLink>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
