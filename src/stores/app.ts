import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
    
    function generateUniqueId(){
        return Math.floor(Math.random()*1000000);
    }

    return{
        generateUniqueId,
    }
})