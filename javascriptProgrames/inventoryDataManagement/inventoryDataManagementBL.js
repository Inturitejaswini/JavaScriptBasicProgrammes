/**
 * @author: Tejaswini
 * @purpose : This function is use to find total cost for the inventory
 * @Since : 10-07-2020
 */
exports.inventory=()=>{
    const fs=require('fs');
    try{
      let text=fs.readFileSync('./inventoryDataManagement.json').toString('utf-8');
      let jsonText=JSON.parse(text);
      console.log(jsonText)
      if(text == '') throw "File is Empty"
      for(let data in jsonText.Grocery){
          for(let i=0;i<jsonText.Grocery[data].length;i++){
              let name = jsonText.Grocery[data[i]].Name;
              let weight = jsonText.Grocery[data[i]].Weigth;
              let price = jsonText.Grocery[data[i]].PricePerKg;
              console.log('Name is : ' + name + ' ; Weight is : ' + weight + ' ; Prices is : ' + price + ' ; Total price is : ' + price * weight);
          }
      }
    }catch(err){
        console.log(err);
    }
}