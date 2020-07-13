exports.inventory = (data) => {
  class inventory {
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
    let stock = new inventory(
      data.inventoryDetaills[i].name,
      data.inventoryDetaills[i].weight,
      data.inventoryDetaills[i].pricePerKg
    );
    allStock.push(stock);
    i++;
  }
  return JSON.stringify(allStock);
};
