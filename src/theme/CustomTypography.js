import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    typographycolorTertiary: {
        color: theme.palette.tertiary.main,
    },
  }));

  const CustomTypography= React.forwardRef(function CustomTypography(
    {variantcolor = "text",  color, className, ...other},
    ref
  ) {
    const classes = useStyles();
    return (
      <Typography
          {...other}
          color={color === "tertiary" ? "primary" : color}
          className={clsx(className, {
        [classes[`${variantcolor}Tertiary`]]: color === "tertiary"
      })}
      ref={ref}
      />
  );
});

  export default CustomTypography;