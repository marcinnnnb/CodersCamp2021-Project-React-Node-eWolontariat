import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent, Box, Typography, Divider, IconButton } from '@material-ui/core'
import { closeDialog } from "./store/dialogSlice";
import { getDialogEl } from "./dialog.utils";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  customizedButton: {
    position: 'absolute',
    marginLeft: '85%',
  }
});

const Dialogs = (props) => {
  const classes = useStyles();
  const { isOpen, formType } = useSelector((state) => state.dialog);

  const dispatch = useDispatch();
  if (!formType) return null;
  const { title, component, width } = getDialogEl(formType);


  return(
    <Dialog open={isOpen} maxWidth={width} fullWidth>
      {title && (
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
              <Typography
                variant="h4">
                {title}
              </Typography>
              <IconButton
                className={classes.customizedButton}
                color="primary"
                size="small"
                onClick={() => dispatch(closeDialog())}>
                <CancelOutlinedIcon  />
              </IconButton>
          </Box>
        </DialogTitle>
      )}
      <Divider
        variant="fullWidth"/>
      <DialogContent>{component}</DialogContent>
    </Dialog>
  );
};

export default Dialogs;