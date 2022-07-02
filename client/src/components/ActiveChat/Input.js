import React, { useState, useEffect } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    if (attachments.length > 0) {
      handleSubmit();
    }
  }, [attachments]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addImages = async (e) => {
    let files = e.target.files;
    let filesArray = [];

    Object.values(files).forEach((file) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "kdswjxc8");
      filesArray.push(data);
    });

    let newImages = [];

    for await (const data of filesArray) {
      let response = await fetch(
        "https://api.cloudinary.com/v1_1/dt8b5pu9l/image/upload",
        {
          method: "post",
          body: data,
        }
      );

      response = await response.json();
      newImages.push(response.url);
    }
    setAttachments(newImages);
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const reqBody = {
      text: text ? text : "",
      recipientId: otherUser.id,
      conversationId,
      attachments: attachments,
      sender: conversationId ? null : user,
    };

    await postMessage(reqBody);

    setText("");
    setAttachments([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <SentimentSatisfiedAltOutlinedIcon style={{ color: "#91A3C0" }} />

              <input
                accept="image/*"
                style={{ display: "none" }}
                id="images-upload"
                multiple
                type="file"
                onChange={addImages}
              />
              <label htmlFor="images-upload">
                <IconButton variant="contained" component="span">
                  <ContentCopyOutlinedIcon style={{ color: "#91A3C0" }} />
                </IconButton>
              </label>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;

