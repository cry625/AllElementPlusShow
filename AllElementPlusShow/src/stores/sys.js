// src/stores/sys/index.js  
import { defineStore } from 'pinia'  
  
export const useSysStore = defineStore('sys', {  
  state: () => {  
    return{
        theme: '',  
    }
  },  
  getters: {  
    // 你可以添加一个 getter 来获取当前的 theme，但不需要修改状态  
    getTheme: (state) => state.theme,  
  },  
  actions: {  
    setTheme(newTheme) {  
      // 在 actions 中修改状态  
      this.theme = newTheme;  
    }  
  }, 
  persist:{
    enabled: true,
  } 
})