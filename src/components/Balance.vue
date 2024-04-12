<template>
    <h4>Your Balance</h4>
    <h1 id="balance">${{ balance }}</h1>
</template>
<script lang="ts" setup>

import { defineProps } from 'vue';

const props = defineProps({
    balance: {
        type: String,
        required: true,
    }
});
</script>