import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const Like = () => {
  return (
    <div
      style={{
        margin: "-5.5%",
        display: "block",
        width: "fit-content",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
        }
      />
    </div>
  );
};

export default Like;
