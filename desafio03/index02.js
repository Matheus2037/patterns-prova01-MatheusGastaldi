//SOLID - PADRÃO L
//LISKOV

class PaymentProcessor {
    processPayment(amount) {
      throw new Error("processPayment() deve ser implementado por subclasse.");
    }
}

class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount) {
      if (amount <= 0) {
        return { success: false, message: "Quantidade inválida" };
      }
  
      console.log(`Processando $${amount} por cartão de crédito...`);
  
      return {
        success: true,
        message: "Pagamento por cartão de crédito aprovado",
      };
    }
}

class CryptoProcessor extends PaymentProcessor {
    processPayment(amount) {
      if (amount <= 0) {
        return { success: false, message: "Quantidade inválida" };
      }
  
      console.log(`Processando $${amount} por criptomoeda...`);
      return { success: true, message: "Transação de criptomoeda aprovada" };
    }
}

function completeCheckout(processor, amount) {
    const result = processor.processPayment(amount);
  
    if (result.success) {
      console.log("✅ Pagamento bem-sucedido:", result.message);
    } else {
      console.log("❌ Pagamento falhou:", result.message);
    }
}
  
const credit = new CreditCardProcessor();
const crypto = new CryptoProcessor();

completeCheckout(credit, 100);
completeCheckout(crypto, 500);