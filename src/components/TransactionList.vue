<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactions" :class="transaction.type">
            {{ transaction.name }} <span v-if="transaction.type == 'minus'">-${{Math.abs(transaction.amount)}}</span>
            <span v-else>${{ Math.abs(transaction.amount) }}</span>
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type ITransaction from '@/interfaces/ITransaction';

const emit = defineEmits(['transactionDeleted'])

const props = defineProps({
    transactions: {
        type: Array<ITransaction>,
        required: true
    }
});

function deleteTransaction(id:number){
    emit('transactionDeleted', id);
}
</script>