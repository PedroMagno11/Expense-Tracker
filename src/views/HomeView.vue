<script setup lang="ts">
import Header from '../components/Header.vue';
import Balance from '@/components/Balance.vue';
import IncomeExpenses from '@/components/IncomeExpenses.vue';
import TransactionList from '@/components/TransactionList.vue';
import AddTransaction from '@/components/AddTransaction.vue';
import { useTransactionStore } from '@/stores/transaction';
import type ITransaction from '@/interfaces/ITransaction';
import { useToast } from 'vue-toastification';
import { onMounted } from 'vue';

const transactionStore = useTransactionStore();
const toast = useToast();

// Add transacation
function handleTransactionSubmitted(transactionData:ITransaction){
  let transaction = {
    id: transactionData.id,
    name: transactionData.name,
    amount: transactionData.amount,
    type: transactionData.type
  }
  transactionStore.addTransaction(transaction);
  transactionStore.saveTransactionsToLocalStorage();
  toast.success('Transaction added');
}

// Delete transaction

function handleTransactionDeleted(id:number){
  console.log(id);
  transactionStore.deleteTransaction(id);
  transactionStore.saveTransactionsToLocalStorage();
  toast.success('Transaction deleted');
}

onMounted(()=>{
  const savedTransactions = JSON.parse(localStorage.getItem('transactions')|| '""');
  if (savedTransactions){
    transactionStore.transactions = savedTransactions;
  }
});

</script>

<template>
  <main>
    <Header/>
    <div class="container">
      <Balance :balance="transactionStore.balance().toFixed(2)"/>
      <IncomeExpenses :income="transactionStore.income().toFixed(2)" :expense="transactionStore.expense().toFixed(2)"/>
      <TransactionList :transactions="transactionStore.transactions" @transaction-deleted="handleTransactionDeleted"/>
      <AddTransaction @transaction-submitted="handleTransactionSubmitted"/>
    </div>
  </main>
</template>
