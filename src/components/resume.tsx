import React from "react";
import { Grid, Cell } from "react-mdl";

export const Resume: React.FC = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>Left Side</Cell>
        <Cell className="resume-right-col" col={8}>
          Right Side
        </Cell>
      </Grid>
    </div>
  );
};
