//SOLID - PADRÃO D
//DEPENDENCY INVERSION

class CreditCardService {
    processPayment(fromUser, toUser, amount) {
      console.log(`[CreditCardService]: Charging $${amount} to ${fromUser.name}'s card...`);
      console.log(`[CreditCardService]: Sending payment to ${toUser.name}.`);
      return true;
    }
}
  
class PixService {
    processPayment(fromUser, toUser, amount) {
      console.log(`[PixService]: Generating Pix QR Code for $${amount} for ${fromUser.name}.`);
      console.log(`[PixService]: Awaiting payment confirmation...`);
      return true;
    }
}
  
class BankTransferService {
    processPayment(fromUser, toUser, amount) {
      console.log(`[BankTransferService]: Initiating transfer of $${amount} from ${fromUser.name}'s account.`);
      return true;
    }
}
  
class PaymentService {
    constructor(paymentMethod) {
      this.paymentMethod = paymentMethod;
    }
   
    processOrderPayment(order, fromUser, toUser) {
      console.log(`Processing payment for order ${order.id}...`);
      
      const amount = order.totalAmount;
      
      const success = this.paymentMethod.processPayment(fromUser, toUser, amount);
      
      if (success) {
        console.log(`Order ${order.id} paid successfully!`);
      } else {
        console.log(`Payment failed for order ${order.id}.`);
      }
    }
}
  
  
const userAlice = { name: "Alice" };
const storeBob = { name: "Bob's Electronics" };
const order1 = { id: "A123", totalAmount: 150.00 };

console.log("--- PAGAMENTO COM CARTÃO ---");
const creditCardProcessor = new CreditCardService();
const paymentWithCredit = new PaymentService(creditCardProcessor);
paymentWithCredit.processOrderPayment(order1, userAlice, storeBob);


console.log("\n--- PAGAMENTO COM PIX ---");
const order2 = { id: "B456", totalAmount: 75.50 };

const pixProcessor = new PixService();
const paymentWithPix = new PaymentService(pixProcessor);
paymentWithPix.processOrderPayment(order2, userAlice, storeBob);