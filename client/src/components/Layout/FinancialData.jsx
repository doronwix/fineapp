import React, { useRef } from "react";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { usd } from "../../utilities/currencyFormat";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  Head: {},
}));

export default function FinancialData(prop) {
  const classes = useStyles();

  const cells = prop.data ? prop.data : [];

  return (
    <React.Fragment>
      <Title>Financial Data</Title>
      <Table size="small">
        <TableBody>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            BalanceShDate
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"bs_" + index}>{cell.BalanceSheetDate}</TableCell>
          ))}
        </TableRow>

        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            DocumentType
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"dt_" + index}>{cell.DocumentType}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Equt
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"eq_" + index}>{usd(cell.Equity)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Revenue
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"rv_" + index}>{usd(cell.Revenues)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            CostOfRevenue(COGS + SG&A)
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"cor_" + index}>
              {usd(cell.CostOfRevenue)}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            % of Revenue
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"rvup_" + index}>
              {((cell.CostOfRevenue / cell.Revenues) * 100).toFixed(1)}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Tax
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"tax_" + index}>{usd(cell.TaxPaid)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Gross Profit
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"tax_" + index}>{usd(cell.GrossProfit)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            SGandAexpenses
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"sg_" + index}>
              {usd(cell.SGandAexpenses)}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            EBITDA
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"ebt_" + index}>{usd(cell.Ebitda)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Liabil
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"lil_" + index}>{usd(cell.Liabilities)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Capex
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"cpx_" + index}>{usd(cell.Capex)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Net Income
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"nin_" + index}>
              {usd(cell.NetIncomeLoss)}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Acquisitions
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"acq_" + index}>{usd(cell.Acquisitions)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            FCF
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"fcf_" + index}>{usd(cell.FCF)}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            no. of stocks
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"NumberOfSharesOutstanding" + index}>
              {cell.NumberOfSharesOutstanding}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            discounted cash flow
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"cf_" + index}>
              {usd(cell.WorkingCapital / Math.pow(1 + 0.02, index + 1))}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell variant="head" className={classes.Head}>
            Earning per Share
          </TableCell>
          {cells.map((cell, index) => (
            <TableCell key={"cf_" + index}>{cell.EPS}</TableCell>
          ))}
        </TableRow>
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
