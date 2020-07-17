/**
 * @author: Tejaswini
 * @purpose : This function is use to find total cost for the inventory
 * @Since : 10-07-2020
 */

exports.dataManagement = (data) => {
  class dataManagement {
    /**
     *
     * @param {string} name
     * @param {number} weight
     * @param {number} pricePerKg
     */
    constructor(name, weight, pricePerKg) {
      this.name = name;
      this.weight = weight;
      this.pricePerKg = pricePerKg;
      this.totalAmount = weight * pricePerKg;
    }
  }
  let allStock = [];
  let i = 0;
  while (i < data.inventoryDetails.length) {
    let stock = new dataManagement(
      data.inventoryDetails[i].name,
      data.inventoryDetails[i].weight,
      data.inventoryDetails[i].pricePerKg
    ); //creating new object
    allStock.push(stock);
    i++;
  }
  return JSON.stringify(allStock);
};
