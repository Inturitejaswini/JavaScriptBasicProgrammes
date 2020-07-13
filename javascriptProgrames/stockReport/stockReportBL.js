
/**
 * @Auther :Tejaswini
 * @module stockReport
 * @param { User input } data
 * @purpose : this function is use to check entered user input data is to find total share of each stock and total price of all the stock.
 * @Since : 13-07-2020
 */
exports.stockAccountManagement = (data) => {
  /**
   * .StockAccountManagement
   */
  class StockAccountManagement {
    /**
     *
     * @param {string} stockName
     * @param {number} noOfShare
     * @param {number} sharePrice
     */
    constructor(stockName, noOfShare, sharePrice) {
      this.stockName = stockName;
      this.sharePrice = sharePrice;
      this.noOfShare = noOfShare;
      this.totalShare = this.totalShare();
    }
    totalShare() {
      return this.sharePrice * this.noOfShare;
    }
  }
  let allStock = []; 
  let i = 0;
  while (i < data.stocks.length) {
    let stock = new StockAccountManagement(
      data.stocks[i].stockName,
      data.stocks[i].noOfShares,
      data.stocks[i].stockPrice
    ); 
    allStock.push(stock); 
    i++;
  }
  console.log(allStock);
  let j = 0;
  let grandTotal = 0; 
  while (j < allStock.length) {
    grandTotal += allStock[j].totalShare; 
    j++;
  }
  console.log("Grand Total for stock is " + grandTotal);
};
