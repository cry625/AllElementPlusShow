<template>
  <div style="margin: 10px">
    <el-button type="primary" @click="toggleDark()">
    {{ isDark ? 'Dark' : 'Light' }}
  </el-button>
    <span v-for="item in themeColors" :key="item.themeName" :style="{
      background: item.color,
      width: '20px',
      height: '20px',
      display: 'inline-block',
      marginRight: '10px',
      cursor: 'pointer',
      border: '1px solid #333',
      borderRadius: '10%',
    }" @click="changeThemeColor(item.color)"></span>
        <div>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
  </div>
  <div class="flex gap-2">
      <el-tag type="primary">Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="info">Tag 3</el-tag>
      <el-tag type="warning">Tag 4</el-tag>
      <el-tag type="danger">Tag 5</el-tag>
    </div>
    <div>
      <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import { useElementPlusTheme } from 'use-element-plus-theme';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();  // 检测当前是否为深色模式
const toggleDark = useToggle(isDark);  // 用于切换深色和浅色模式
const layoutThemeColor = useStorage('layout-theme-color', '#243db9');  // 默认主题色
const { changeTheme } = useElementPlusTheme(layoutThemeColor.value);  // 初始化主题色
const themeColors = [
  { color: '#1b2a47', themeName: '道奇蓝' },
  { color: '#722ed1', themeName: '深紫罗兰色' },
  { color: '#eb2f96', themeName: '深粉色' },
  { color: '#f5222d', themeName: '猩红色' },
  { color: '#fa541c', themeName: '橙红色' },
  { color: '#13c2c2', themeName: '绿宝石' },
  { color: '#52c41a', themeName: '酸橙绿' },
];
const changeThemeColor = (color) => {
  layoutThemeColor.value = color;  // 保存主题色
  changeTheme(color);  // 修改 Element Plus 组件主题色
};
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },]
</script>
