import React from "react";
import PhotoSlider from "./PhotoSlider/PhotoSlider";
import useStyles from "./styles";

const PhotoSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.galleryWrap}>
      <PhotoSlider />
    </div>
  );
};

export default PhotoSection;
