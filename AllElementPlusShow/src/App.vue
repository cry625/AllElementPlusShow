<script setup>
import { ref,watch } from 'vue';
import { useSysStore } from "@/stores/sys";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);

const sysStore = useSysStore()
const colorList = ref([
  { name: '蓝色', value: 'blue', id: 2, path: 'public/icon/color_icon/blue.png' },
  { name: '红色', value: 'red', id: 4, path: 'public/icon/color_icon/red.png' },
  { name: '灰色', value: 'grey', id: 3, path: 'public/icon/color_icon/grey.png' },
  // { name: '黑暗模式', value: 'dark', id: 0, path: 'public/icon/color_icon/black.png' },
])
const showLight = ref(true)
const theme = ref('');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// 初始化主题
if (sysStore.theme) {
  setTheme(sysStore.theme);
} else {
  setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
}

// 页面加载时设置初始值
window.onload = function () {
  const savedClass = localStorage.getItem('htmlClass');
  console.log("savedClass", savedClass);
  if (!savedClass) {
    document.documentElement.className = 'blue'; // 设置初始值为 'blue'
    localStorage.setItem('htmlClass', 'blue'); // 存储到 localStorage
  } else {
    document.documentElement.className = savedClass; // 使用保存的类
  }
};

// 监听系统颜色模式变化
prefersDarkScheme.addEventListener('change', (e) => {
  const newTheme = e.matches ? 'dark' : 'light';
  // 仅在用户未手动设置主题时自动切换
  if (theme.value !== 'dark' && theme.value !== 'light') {
    setTheme(newTheme);
  }
});

// 手动控制主题切换
watch(() => showLight.value, changeTheme);

function setTheme(theme) {
  window.document.documentElement.setAttribute('theme', theme);
  sysStore.setTheme(theme);
}

function changeTheme() {
  theme.value = window.document.documentElement.getAttribute('theme');
  let newTheme = theme.value === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

function changeSysColor(value) {
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
  console.log("className",className)
  document.documentElement.className = className; // 设置 <html> 的类
  localStorage.setItem('htmlClass', className); // 存储到 localStorage
}

</script>

<template>
  <el-container style="height: 100vh;">
    <el-header>
      <el-row>
        <el-col :span="12">
          <el-dropdown>
            <el-button> 修改颜色 </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(item, index) in colorList" :key="index" @click="changeSysColor(item.value)"
                  value="item.value">
                  <template #default>
                    <div>{{ item.name }}</div>
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
