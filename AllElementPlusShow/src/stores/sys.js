// src/stores/sys/index.js  
import { defineStore } from 'pinia'  
  
export const useSysStore = defineStore('sys', {  
  state: () => {  
    return{
        themeColor: '',  //主题色控制组件的颜色配比
        systemColor: '',  //系统颜色(dark、light)
    }
  },  
  getters: {  
    // 你可以添加一个 getter 来获取当前的 theme，但不需要修改状态  
    getTheme: (state) => state.themeColor,  
    getSystem: (state) => state.systemColor,  
  },  
  actions: {  
    setThemeColor(newTheme) {  
      // 在 actions 中修改组件色状态  
      this.themeColor = newTheme;  
    },
    setSystemColor(newSystem) {  
      // 在 actions 中修改背景色状态  
      this.systemColor = newSystem;  
    }  
  }, 
  persist:{
    enabled: true,
  } 
})