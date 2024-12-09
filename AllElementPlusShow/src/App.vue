<!-- <script>
</script> -->
<script setup>
import { ref,watch } from 'vue';
import { useSysStore } from "@/stores/sys";

const sysStore = useSysStore()
const colorList = ref([
  { name: '蓝色', value: 'blue', id: 2, path: 'public/icon/color_icon/blue.png' },
  { name: '红色', value: 'red', id: 4, path: 'public/icon/color_icon/red.png' },
  { name: '灰色', value: 'grey', id: 3, path: 'public/icon/color_icon/grey.png' },
])

const theme = ref('');

// 初始化主题
if (sysStore.theme) {
  setTheme(sysStore.theme);
}

function setTheme(theme) {
  window.document.documentElement.setAttribute('theme', theme);
  sysStore.setTheme(theme);
}

</script>
<!-- <template>
  <RouterView />
</template> -->
<template>
  <el-container style="height: 100vh;">
    <el-header>
      <div>
        <span>修改颜色：</span>
        <span v-for="(item, index) in colorList" :key="index" @click="setTheme(item.value)">{{item.name}}&ensp;</span>
      </div>
    </el-header>
    <el-main>

      <RouterView />
    </el-main>
  </el-container>

</template>

<style scoped lang="scss">
.tool-bar {
  display: flex;
}

.mr-right {
  margin: auto 0.8rem auto 0;
  line-height: 1;
}
</style>
