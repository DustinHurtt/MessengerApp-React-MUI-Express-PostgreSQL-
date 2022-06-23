import React from "react";

import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material/";

import Image from "./assets/bg-img.png";
import Bubble from "./assets/bubble.svg";

const SideImage = () => {
  return (
    <Grid
      item
      xs={0}
      sm={5}
      sx={{
        display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(#3A8DFF, #86B9FF)",
          opacity: "85.32%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            bgcolor: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "26.5%",
            width: "63.3%",
            marginTop: "46.8%",
            overflow: "visible",
            padding: "0",
          }}
          elevation={0}
        >
          <CardMedia
            component="img"
            image={Bubble}
            alt="Not here"
            style={{ width: "25%" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                font: "Open Sans",

                fontWeight: "400",
                fontSize: "26px",
                lineHeight: "40px",
                align: "center",
                verticalAlign: "center",
                width: "100%",
                textAlign: "center",
              }}
            >
              Converse with anyone with any language
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default SideImage;
