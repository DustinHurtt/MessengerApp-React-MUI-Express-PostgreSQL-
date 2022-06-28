import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: (props) => props.alignItems,
    flexWrap: "wrap",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: (props) => props.color,
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: (props) => props.borderRadius,
    backgroundImage: (props) => props.backgroundImage,
  },
  images: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    msGridColumns: "repeat(2, 1fr)",
    gap: "10px",
    gridAutoRows: "minmax(auto)",
    msGridRows: "minmax(auto)",
  },
  imageContainer: {
    width: "16vw",
  },
  image: {
    width: "90%",
    margin: "auto",
  },
}));

const MessageBubble = ({ children, time, text, images, dir, ...props }) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>

      {images && (
        <Box className={classes.images} dir={dir}>
          {images.map((photo) => {
            return (
              <Card key={photo} className={classes.imageContainer}>
                <CardMedia
                  component="img"
                  image={photo}
                  className={classes.image}
                />
              </Card>
            );
          })}
        </Box>
      )}

      {text && (
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MessageBubble;
