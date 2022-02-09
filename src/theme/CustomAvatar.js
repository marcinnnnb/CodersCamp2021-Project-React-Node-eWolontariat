import * as React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    avatarBackgroundTertiary: {
        backgroundColor: theme.palette.tertiary.main,
    },
    avatarBackgroundPrimary: {
        backgroundColor: theme.palette.primary.main,
    },
    avatarBackgroundSecondary: {
      backgroundColor: theme.palette.secondary.main,
    }
  }));

  const CustomAvatar= React.forwardRef(function CustomAvatar(
    {variant = "text",  backgroundcolor , className, ...other},
    ref
  ) {
    const classes = useStyles();
    return (
      <Avatar
          {...other}
          className={clsx(className, {
          [classes[`${variant}Tertiary`]]:  backgroundcolor === "tertiary",
          [classes[`${variant}Primary`]]:  backgroundcolor === "primary",
          [classes[`${variant}Secondary`]]:  backgroundcolor === "secondary"
        })}
        ref={ref}
      />
    );
  });

  export default CustomAvatar;