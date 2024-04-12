<script lang="ts" setup>
import type ITransaction from '@/interfaces/ITransaction';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { useAppStore } from '@/stores/app';

const toast = useToast();
const appStore = useAppStore();
const text = ref('');
const amount = ref(0);
const emit = defineEmits(['transactionSubmitted']);


function onSubmit(){

    if(!text.value || !amount.value){
        toast.error('Both fields must be filled');
        return;
    }
    
    const transactionData:ITransaction = {
        id: appStore.generateUniqueId(),
        name: text.value,
        amount: Math.abs(amount.value),
        type: amount.value >= 0 ? 'plus' : 'minus'
    }

    emit('transactionSubmitted', transactionData);

    text.value = '';
    amount.value = 0;
}



</script>
<template>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" v-model="text" placeholder="Enter text..."/>
        </div>
        <div class="form-control">
            <label for="amount">Amount<br/>(negative - expense, positive - income)</label>
            <input type="number" step="0.01" id="amount" v-model="amount" placeholder="Enter amount..."/>
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>