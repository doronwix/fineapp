import React, { useContext, useState, useRef } from "react";
import { financialContext } from "../../providers/DataProvider";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import Chart from "./Chart";
import Ratio from "./Ratio";
import FinancialData from "./FinancialData";
import Spinner from "./Spinner";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(95% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  
 
  content: {
    flexGrow: 1,
   
    
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    
    display: "flex",
    overflow: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 auto",
  },
  fixedHeight: { height: "25vh" },
  center: {
    margin: "0 auto",
   
    
    padding: "10px",
  }
}));

export default function Dashboard() {
  const { symbol, secData, chartsData } = useContext(financialContext);

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
     

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container direction="row" spacing={3}>
        
            {chartsData && (
              /* Chart */
      <React.Fragment>
              <Grid item xs={5} >
                  
                      <Paper >
                        {chartsData.revenuesExtrapolated && (
                          <Chart
                            data={chartsData.revenuesExtrapolated}
                            title={"Revenues"}
                          />
                        )}
                        {!chartsData.revenuesExtrapolated && symbol && (
                          <div className={classes.center}>
                            <Spinner></Spinner>
                          </div>
                        )}
                      </Paper>
                
                </Grid>
                 <Grid item xs={5} >
                <Paper>
                  {chartsData.revenuesExtrapolated && (
                    <Chart
                      data={chartsData.netIncomeExtrapolated}
                      title={"NetIncomeLoss"}
                    />
                  )}
                  {!chartsData.netIncomeExtrapolated && symbol && (
                    <div className={classes.center}>
                      <Spinner></Spinner>
                    </div>
                  )}
                </Paper>
                </Grid>
                <Grid item xs={5} >
                <Paper >
                  {chartsData.liabilities && (
                    <Chart
                      data={chartsData.liabilities}
                      title={"Liabilities"}
                    />
                  )}
                  {!chartsData.liabilities && symbol && (                    
                    <div className={classes.center}>
                      <Spinner></Spinner>
                    </div>
                    )}
                </Paper>
              </Grid>
                          {/* Recent Report */}
            {secData /* Financial Details */ && (
            <Grid item xs={3}>
           
              <Paper >
                <Ratio name={"P/E"} />
              </Paper>
                 
            </Grid>
            )}

            </React.Fragment>
            )}
         
         {secData /* Financial Details */ && (
              <Grid item xs={12} >
                <Paper >
                  <FinancialData data={secData} />
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
