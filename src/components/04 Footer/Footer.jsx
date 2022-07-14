import React from "react";
import FavoriteIcon from "@material-ui/icons//Favorite";
function Footer() {
  return (
    <div className="footer">
      <p>
        © Islom's portfolio 2021 - {new Date().getFullYear()} | Made with{" "}
        <FavoriteIcon />{" "}
      </p>
    </div>
  );
}

export default Footer;
