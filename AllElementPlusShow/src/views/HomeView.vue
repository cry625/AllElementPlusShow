<template>
  <div>
    <div>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <el-icon>
      <Edit />
    </el-icon>
    <div>
      <el-text class="mx-1">Default</el-text>
      <el-text class="mx-1" type="primary">Primary</el-text>
      <el-text class="mx-1" type="success">Success</el-text>
      <el-text class="mx-1" type="info">Info</el-text>
      <el-text class="mx-1" type="warning">Warning</el-text>
      <el-text class="mx-1" type="danger">Danger</el-text>
    </div>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />\
    <div>
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />
    </div>
    <div>
      <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div>
      <el-badge :value="12" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" color="green">
        <el-button>custom background</el-button>
      </el-badge>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me
          <el-icon class="el-icon--right"><caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              comments
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              replies
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="flex gap-2">
      <el-tag type="primary">Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="info">Tag 3</el-tag>
      <el-tag type="warning">Tag 4</el-tag>
      <el-tag type="danger">Tag 5</el-tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
const checked1 = ref(true)
const checked2 = ref(false)
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },]
</script>
