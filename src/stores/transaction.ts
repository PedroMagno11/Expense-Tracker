import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type ITransaction from '@/interfaces/ITransaction';
import type { Ref } from 'vue';

export const useTransactionStore = defineStore('transaction', () => {
  
  const transactions:Ref<Array<ITransaction>> = ref([]);

  // Get balance
  function balance(){
    return transactions.value
    .reduce((acc, transaction)=>{
      if(transaction.type == 'plus'){
        acc+=transaction.amount;
      }
      else{
        acc-=transaction.amount;
      }
      return acc;
    },0);
  }

  // Get income
  function income(){
    return transactions.value
    .filter((transaction)=>transaction.type == 'plus')
    .reduce((acc, transaction)=>{
      acc+= transaction.amount;
      return acc;
    },0);
  }

  // Get expense
  function expense(){
    return transactions.value
    .filter((transaction)=>transaction.type == 'minus')
    .reduce((acc, transaction)=>{
      acc += transaction.amount;
      return acc;
    },0);
  }


  // Add transaction
  function addTransaction(transaction:ITransaction){
    transactions.value.push(transaction);
  }

  // Delete transaction
  function deleteTransaction(transaction_id:number){
    transactions.value = transactions.value.filter(transaction=>transaction.id != transaction_id);
  }

  // Save to localStorage
  function saveTransactionsToLocalStorage(){
    localStorage.setItem('transactions', JSON.stringify(transactions.value));
  }

  return{
    transactions,
    balance,
    income,
    expense,
    addTransaction,
    deleteTransaction,
    saveTransactionsToLocalStorage,
  };
});
