import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import "./Box.scss";

interface BoxProps {
  stats: number;
  title: string;
  Icon: SvgIconComponent;
}

const Box: React.FC<BoxProps> = ({ Icon, stats, title }) => {
  return (
    <div className="Box">
      <div className="container">
        <div className="col-icon">
          <span>
            <Icon />
          </span>
        </div>
        <div className="col-text">
          <div className="statsNum">{stats}+</div>
          <div className="title-box">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Box;
