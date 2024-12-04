<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useSysStore } from "@/stores/sys";
import { ElMessage } from 'element-plus/es';

const sysStore = useSysStore()
const colorList = ref([
  { name: '绿色', value: 'green', id: 1, },
  { name: '蓝色', value: 'blue', id: 2, },
  { name: '红色', value: 'red', id: 4, },
  { name: '灰色', value: 'grey', id: 3, },
])
const showLight = ref(true)
const systemColor = ref('');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// 初始化系统色
if (sysStore.systemColor) {
  setSystem(sysStore.systemColor);
} else {
  setSystem(prefersDarkScheme.matches ? 'dark' : 'light');
}

// 手动控制主题切换
watch(() => showLight.value, changeTheme);

// 页面加载时设置初始值
window.onload = function () {
  const savedClass = localStorage.getItem('htmlClass');
  if (!savedClass) {
    document.documentElement.className = 'blue'; // 设置初始值为 'blue'
    localStorage.setItem('htmlClass', 'blue'); // 存储到 localStorage
  } else {
    document.documentElement.className = savedClass; // 使用保存的类
  }
};

function setSystem(systemColor) {
  window.document.documentElement.setAttribute('systemColor', systemColor);
  sysStore.setSystemColor(systemColor);
}

function changeTheme() {
  systemColor.value = window.document.documentElement.getAttribute('systemColor');
  let nowThemeText = systemColor.value === 'dark' ? '深色' : '浅色';
  let newThemeText = nowThemeText === '深色' ? '浅色' : '深色';
  ElMessage({
    message: '当前主题为' + nowThemeText + ',切换主题为' + newThemeText,
    type: 'success'
  });
  let newTheme = systemColor.value === 'dark' ? 'light' : 'dark';
  setSystem(newTheme);
}

function changeSysColor(value) {
  console.log("value", value)
  if (value == 'dark') {
    setHtmlClass(value)
    // 当前为手动黑暗模式
    toggleDark();
  } else {
    // 明亮颜色调整
    // 设置 <html> 元素的类并存储到 localStorage
    setHtmlClass(value)
  }
}
// 函数：设置和存储当前类
function setHtmlClass(className) {
  document.documentElement.className = className; // 设置 <html> 的类
  localStorage.setItem('htmlClass', className); // 存储到 localStorage
}

</script>

<template>
  <el-container style="height: 100vh;">
    <el-header>
      <el-row >
        <el-col :span="12">
          <el-dropdown>
            <el-button> 修改颜色 </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(item, index) in colorList" :key="index" @click="changeSysColor(item.value)"
                  value="item.value">
                  <template #default>
                    <div><img :src="item.path" width="28">{{ item.name }}</div>
                  </template>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
        <el-col :span="12">
          <el-switch v-model="showLight">
          </el-switch>
        </el-col>
      </el-row>

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
