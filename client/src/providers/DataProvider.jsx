// @flow
import React from "react";
import { createContext, useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

const financialContext = createContext();
const rateContext = createContext();

async function fetchSecData(l_symbol) {
  let response = await fetch(`/api/sec/${l_symbol}`, {
    headers: {
      accepts: "application/json",
    },
  });
  let res = await response.json();
  return res;
}

async function fetchRateData(l_symbol) {
  let response = await fetch(`/api/rate/${l_symbol}`, {
    headers: {
      accepts: "application/json",
    },
  });
  let res = await response.json();
  return res;
}

const DataProvider = ({ children }) => {
  const [symbol, setSymbol] = useState();

  const [secData, setSecData] = useState();

  const [chartsData, setChartsData] = useState([]);

  const [rate, setRate] = useState();

  const updateSymbol = (value) => {
    setChartsData([]);
    setSymbol(value);
    setRate();
  };
  useEffect(() => {
    if (!symbol) {
      return;
    }
    fetchSecData(symbol)
      .then((data) => {
        data.financialData.sort(function (a, b) {
          let first = parseInt(a.BalanceSheetDate.substring(0, 4));
          let second = parseInt(b.BalanceSheetDate.substring(0, 4));
          if (first < second) {
            return -1;
          }
          if (second < first) {
            return 1;
          }
          return 0;
        });
        setSecData(data.financialData);
        setChartsData(data.extrapolations);
      })
      .catch((error) => {
        setChartsData([]);
        setSymbol();
        setRate();
        alert("Error:" + error);
        return;
      });
  }, [symbol]);

  useEffect(() => {
    if (!symbol) {
      return;
    }
    fetchRateData(symbol).then((result) => {
      setRate(result.price);
    });
  }, [symbol]);

  const financialStore = {
    symbol: symbol,
    secData: secData,
    chartsData: chartsData,
    updateSymbol: updateSymbol,
  };
  const ratesStore = {
    symbol: symbol,
    rate: rate,
  };
  return (
    <financialContext.Provider value={financialStore}>
      <rateContext.Provider value={ratesStore}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </rateContext.Provider>
    </financialContext.Provider>
  );
};

export { financialContext, rateContext, DataProvider };
