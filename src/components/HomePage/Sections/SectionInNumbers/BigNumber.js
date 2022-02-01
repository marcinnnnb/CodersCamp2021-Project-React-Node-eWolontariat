import * as React from "react";
import { Typography } from "@material-ui/core";
import {makeStyles} from '@material-ui/core';
import { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor-v2';
import ReactDOM from "react-dom";

const useStyles = makeStyles({
    bigNumber: {
        fontSize: '4rem',
        fontWeight: '700',
        color: '#4DAF7B',
        height: 100 
    }
});

const BigNumber = React.forwardRef(function BigNumber({end = Number}, ref) {
        const classes = useStyles();
        const [loadingNumber, setLoading] = useState(false);
        const onStart = () => {setLoading(true)};
        const onEnd = () => {setLoading(false)};

        const containerProps = {
            'aria-busy': loadingNumber
        }

        return (
            
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ sensorRef,isVisible }) => (
                    <Typography className={classes.bigNumber} ref={sensorRef}>
                        {isVisible ?  <CountUp end={end} onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> : null}
                    </Typography>
                )}
            </VisibilitySensor>
            
        );
    }
);

export default BigNumber;