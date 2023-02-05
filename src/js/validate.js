//module.exports = { Validate }
export default class Validate{

    validate(card_number) {
        let checkSum = Number(card_number[card_number.length-1]);
        let cardnumbers = card_number.split('').map(Number);
        console.log(cardnumbers)
        let result = 0;
        cardnumbers = cardnumbers.slice(0,-1)
        cardnumbers = cardnumbers.reverse();
        for (let [index, value] of cardnumbers.entries()){
          if (index%2!=0){
            result += value;
          } else {
            let item = value *2;
            if (item>9){
              item = item - 9
          }
            result += item
        }
      }
      console.log((result+checkSum)%10 === 0 ? true : false)
      return (result+checkSum)%10 === 0 ? true : false
    }
  
  
  
    definPaymentSystem(value){
      let partNumber = '';
      for (let i = 0; i < 6; i++){
        partNumber+=value[i]
        let result = this.findInSystems(partNumber)
        if (result){
          return result
        }
      }
  
    }
  
    findInSystems(value){
  
      const PaymentSystem = {
        diners:[300, 301, 302, 303, 304, 305, 36, 54, 55],
        visa:[4,4026, 417500, 4508, 4844, 4913, 4917],
        discover:[6011, 644, 645, 646, 647, 648, 649, 65], //622126 - 622925
        mir:[2],
        mastercard:[51, 52, 53, 54, 55], 
        americanExpress:[34, 37]
      }
        for(let i in PaymentSystem){
          for (let item in PaymentSystem[i]){
            if(value ==  PaymentSystem[i][item]){
              return String (i)
            }
          } 
        }
          if(622126 < Number(value) && Number(value) < 622925){
            return ('discover1')
          }
          if(222100 < Number(value) && Number(value) < 272099) {
            return 'mastercard1';
          }
          if (3528 < Number(value) && Number(value) < 3589){
            return 'jcb'
          }
      }
}
