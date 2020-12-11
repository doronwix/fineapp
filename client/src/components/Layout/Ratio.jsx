import * as React from "react";
import { useState, useContext, useRef } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { usd } from "../../utilities/currencyFormat";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 2,
  },
});

export default function Ratio(props) {
  var refDcf = useRef(0);
  var expectedInterest = 0.02;
  const sum = props.secData
    ? props.secData
        .map((data, index) => data.WorkingCapital)
        .reduce((total, currentValue, index) => {
          return total + currentValue / Math.pow(1 + expectedInterest, index);
        })
    : 0;
  const sharesOutstanding = props.secData
    ? props.secData
        .map((data, index) => data.NumberOfShares)
        .reduce((total, currentValue, index) => {
          return total > currentValue ? total : currentValue;
        })
    : 0;
  refDcf = sum / sharesOutstanding;

  const PE =
    props.secData &&
    typeof props.secData[props.secData.length - 1].EPS !== "undefined"
      ? props.rates / props.secData[props.secData.length - 1].EPS
      : 0;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} direction="column">
        <Grid item xs={3}>
          <div>Current Price: {props.rates}</div>
          <div>
            EPS: {props.secData[props.secData.length - 1].EPS.toFixed(2)}
          </div>
          <div>Current Price: {props.rates}</div>
        </Grid>
        <Grid item xs={3}>
          <div>DCF Price: {refDcf.toFixed(2)}</div>
          <div>
            ROE: {props.secData[props.secData.length - 1].ROE.toFixed(2)}
          </div>
          <div>
            ROS: {props.secData[props.secData.length - 1].ROS.toFixed(2)}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>P/E:{PE.toFixed(2)}</div>
          <div>
            ROA: {props.secData[props.secData.length - 1].ROA.toFixed(2)}
          </div>
          <div>
            SGR: {props.secData[props.secData.length - 1].SGR.toFixed(2)}
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
