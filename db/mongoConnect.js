const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://doronw_user:LbkbQrgp2NmJ24u@cluster0.ceknr.mongodb.net/finapp_docs?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  seUnifiedTopology: true,
});

var Schema = mongoose.Schema;

var financialReportScheme = new Schema({
  EntityRegistrantName: String,
  CurrentFiscalYearEndDate: String,
  EntityCentralIndexKey: String,
  TradingSymbol: String,
  DocumentPeriodEndDate: String,
  DocumentFiscalYearFocus: String,
  DocumentFiscalPeriodFocus: String,
  DocumentType: String,
  BalanceSheetDate: String,
  IncomeStatementPeriodYTD: String,
  Assets: String,
  CurrentAssets: String,
  NoncurrentAssets: String,
  LiabilitiesAndEquity: String,
  Liabilities: String,
  CurrentLiabilities: String,
  NoncurrentLiabilities: String,
  CashAndCashEquivalents: String,
  DepreciationAndAmortization: String,
  Equity: String,
  EquityAttributableToNoncontrollingInterest: String,
  EquityAttributableToParent: String,
  Revenues: String,
  CostOfRevenue: String,
  RandDexpense: String,
  SGandAexpenses: String,
  OperatingIncome: String,
  TaxPaid: String,
  Capex: String,
  InterestExpense: String,
  GrossProfit: String,
  OperatingExpenses: String,
  CostsAndExpenses: String,
  OtherOperatingIncome: String,
  NumberOfShares: String,
  OperatingIncomeLoss: String,
  NonoperatingIncomeLoss: String,
  InterestAndDebtExpense: String,
  IncomeBeforeEquityMethodInvestments: String,
  IncomeFromEquityMethodInvestments: String,
  IncomeFromContinuingOperationsBeforeTax: String,
  IncomeTaxExpenseBenefit: String,
  IncomeFromContinuingOperationsAfterTax: String,
  IncomeFromDiscontinuedOperations: String,
  ExtraordaryItemsGainLoss: String,
  NetIncomeLoss: String,
  PaymentsOfDividends: String,
  NetIncomeAvailableToCommonStockholdersBasic: String,
  AccountsReceivable: String,
  Inventories: String,
  AccountsPayable: String,
  PreferredStockDividendsAndOtherAdjustments: String,
  NetIncomeAttributableToNoncontrollingInterest: String,
  NetIncomeAttributableToParent: String,
  Depreciation: String,
  AmortizationOfIntangibleAssets: String,
  Acquisitions: String,
  OtherComprehensiveIncome: String,
  ComprehensiveIncome: String,
  ComprehensiveIncomeAttributableToParent: String,
  ComprehensiveIncomeAttributableToNoncontrollingInterest: String,
  NonoperatingIncomeLossPlusInterestAndDebtExpense: String,
  NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: String,
  OperatingMargin: String,
  TaxRate: String,
  Ebitda: String,
  WorkingCapital: String,
  WorkingCapitalMMargin: String,
  WorkingCapitalPerRevenues: String,
  EPS: String,
  NetCashFlow: String,
  NetCashFlowsOperating: String,
  NetCashFlowsInvesting: String,
  NetCashFlowsFinancing: String,
  NetCashFlowsOperatingContinuing: String,
  NetCashFlowsInvestingContinuing: String,
  NetCashFlowsFinancingContinuing: String,
  NetCashFlowsOperatingDiscontinued: String,
  NetCashFlowsInvestingDiscontinued: String,
  NetCashFlowsFinancingDiscontinued: String,
  NetCashFlowsDiscontinued: String,
  ExchangeGainsLosses: String,
  NetCashFlowsContinuing: String,
  FCF: String,
  SGR: String,
  ROA: String,
  ROE: String,
  ROS: String,
});

mongoose
  .connect(
    "mongodb+srv://doronw_user:LbkbQrgp2NmJ24u@cluster0.ceknr.mongodb.net/finapp_docs?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }
  )
  .then(function () {
    const financialReportModel = mongoose.model(
      "financialReportModel",
      financialReportScheme,
      "finapp"
    );
    financialReportModel
      .find({ TradingSymbol: "ADSK" })
      .exec(function (err, result) {
        if (!err) {
          console.log(result);
        } else {
          console.log(err);
        }
      });
  })
  .catch(function () {
    console.log("Error :");
  });

function getFinancialData(symbol) {
  return client.connect((err) => {
    const collection = client
      .db("finapp_docs")
      .collection("finapp")
      .find({ symbol });
    // perform actions on the collection object
    return collection;
  });
}
//getFinancialData("ADSK");
module.exports = getFinancialData;
