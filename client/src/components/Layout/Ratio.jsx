import * as React from "react";
import { useState, useContext, useRef } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  rateContext,
  financialContext,
} from "../../providers/DataProvider";
import Title from "./Title";
import { usd } from "../../utilities/currencyFormat";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 2,
  },
});

export default function Ratio() {
  const [date, setDate] = useState(new Date().toDateString());
  const { rate } = useContext(rateContext);
  const { secData } = useContext(financialContext);
  var refDcf = useRef(0);
  var expectedInterest = 0.02;
  const sum = secData
    ? secData
        .map((data, index) => data.WorkingCapital)
        .reduce((total, currentValue, index) => {
          return total + currentValue / Math.pow(1 + expectedInterest, index);
        })
    : 0;
  const sharesOutstanding = secData
    ? secData
        .map((data, index) => data.NumberOfSharesOutstanding)
        .reduce((total, currentValue, index) => {
          return total > currentValue ? total : currentValue;
        })
    : 0;
  refDcf = sum / sharesOutstanding;

  const multiplePE =
    secData && typeof secData[secData.length - 1].EPS !== "undefined"
      ? rate / secData[secData.length - 1].EPS
      : 0;

  const classes = useStyles();
  return (
   
    <React.Fragment>
    
      <div width={350} height={150}> 
      <Title>Current Price</Title>
      <Typography component="p" variant="h6">
        {rate}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date}
      </Typography>
      <Title>DCF Price</Title>
      <Typography component="p" variant="h6">
        {refDcf.toFixed(2)}
      </Typography>
      <Title>P/E</Title>
      <Typography component="p" variant="h6">
        {multiplePE.toFixed(2)}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
     
      </div>
     
    </React.Fragment>
  
    
  );
}
