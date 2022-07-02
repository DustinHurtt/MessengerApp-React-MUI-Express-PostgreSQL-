import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar } from "@material-ui/core";
import MessageBubble from "./MessageBubble";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
}));

const OtherUserBubble = ({ text, time, otherUser, images }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />

      <MessageBubble
        text={text}
        time={time}
        images={images}
        alignItems="flex-start"
        backgroundImage="linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)"
        borderRadius="0 10px 10px 10px"
        color="#FFFFFF"
      />
    </Box>
  );
};

export default OtherUserBubble;
