import React from "react";
import MessageBubble from "./MessageBubble";

const SenderBubble = ({ time, text, images }) => {
  return (
    <MessageBubble
      text={text}
      time={time}
      images={images}
      dir="rtl"
      alignItems="flex-end"
      color="#91A3C0"
      borderRadius="10px 10px 0 10px"
    />
  );
};

export default SenderBubble;
