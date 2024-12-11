<template>
  <div>
    <div>
      <h3>这是一段测试文字</h3>
      测试一下到底能不能正常显示
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">button1</div>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <div>
      <div style="margin: 10px;font-size: 24px;">button2</div>
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">icon</div>
      <el-icon>
        <Edit />
      </el-icon>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">link</div>
      <el-link href="https://element-plus.org" target="_blank">default</el-link>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <el-link type="info">info</el-link>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">text</div>
      <el-text class="mx-1">Default</el-text>
      <el-text class="mx-1" type="primary">Primary</el-text>
      <el-text class="mx-1" type="success">Success</el-text>
      <el-text class="mx-1" type="info">Info</el-text>
      <el-text class="mx-1" type="warning">Warning</el-text>
      <el-text class="mx-1" type="danger">Danger</el-text>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">cascader</div>
      <el-cascader v-model="cascadervalue" :options="cascaderoptions" @change="cascaderhandleChange" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">checkbox</div>
      <el-checkbox v-model="checked1" label="Option 1" size="large" />
      <el-checkbox v-model="checked2" label="Option 2" size="large" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">date-picker</div>
      <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">datetime-picker</div>
      <el-date-picker v-model="value2" type="datetime" placeholder="Select date and time" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">form</div>
      <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign" style="max-width: 600px">
        <el-form-item label="Form Align" label-position="right">
          <el-radio-group v-model="labelPosition" aria-label="label position">
            <el-radio-button value="left">Left</el-radio-button>
            <el-radio-button value="right">Right</el-radio-button>
            <el-radio-button value="top">Top</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Form Item Align" label-position="right">
          <el-radio-group v-model="itemLabelPosition" aria-label="item label position">
            <el-radio-button value="">Empty</el-radio-button>
            <el-radio-button value="left">Left</el-radio-button>
            <el-radio-button value="right">Right</el-radio-button>
            <el-radio-button value="top">Top</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Name" :label-position="itemLabelPosition">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="Activity zone" :label-position="itemLabelPosition">
          <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item label="Activity form" :label-position="itemLabelPosition">
          <el-input v-model="formLabelAlign.type" />
        </el-form-item>
      </el-form>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">input</div>
      <el-input v-model="input" style="width: 240px" placeholder="Please input" />
      <div style="margin: 10px;font-size: 24px;">input-number</div>
      <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
      <div style="margin: 10px;font-size: 24px;">input-tag</div>
      <el-input-tag v-model="inputtag" placeholder="Please input" aria-label="Please click the Enter key after input" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">radio</div>
      <el-radio-group v-model="radio1">
        <el-radio value="1" size="large">Option 1</el-radio>
        <el-radio value="2" size="large">Option 2</el-radio>
      </el-radio-group>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">select</div>
      <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">slider</div>
      <span class="demonstration">Default value</span>
      <el-slider v-model="slidervalue" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">switch</div>
      <el-switch v-model="switchvalue1" />
      <el-switch v-model="switchvalue2" class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
    </div>
    <el-divider></el-divider>


    <div>
      <div style="margin: 10px;font-size: 24px;">dialog</div>
      <el-button @click="dialogVisible = true">dialog?</el-button>
      <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">timepicker</div>
      <el-time-picker v-model="timepickervalue1" placeholder="Arbitrary time" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">timeselect</div>
      <el-time-select v-model="timeselectvalue" style="width: 240px" start="08:30" step="00:15" end="18:30"
        placeholder="Select time" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">transfer</div>
      <el-transfer v-model="transfervalue" :data="transferdata" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">tree-select</div>
      <el-tree-select v-model="treeselectvalue" :data="treeselectdata" :render-after-expand="false" style="width: 240px" />
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">badge</div>
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
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">calendar</div>
      <el-calendar v-model="myDate" />
    </div>
    <el-divider></el-divider>

<!-- 到 折叠面板 了 -->




    <div>
      <div style="margin: 10px;font-size: 24px;">message</div>
      <el-button :plain="true" @click="open2">Success</el-button>
      <el-button :plain="true" @click="open3">Warning</el-button>
      <el-button :plain="true" @click="open1">Message</el-button>
      <el-button :plain="true" @click="open4">Error</el-button>
    </div>
    <el-divider></el-divider>

    <div>
      <div style="margin: 10px;font-size: 24px;">tag</div>
      <el-tag type="primary">Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="info">Tag 3</el-tag>
      <el-tag type="warning">Tag 4</el-tag>
      <el-tag type="danger">Tag 5</el-tag>
    </div>
    <el-divider></el-divider>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
const input = ref('')
const checked1 = ref(true)
const checked2 = ref(false)
const value = ref('')
const dialogVisible = ref(false)

const handleClose = () => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },]

const myDate = ref(new Date())

const open1 = () => {
  ElMessage('This is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}

const cascadervalue = ref([])

const cascaderhandleChange = (value) => {
  console.log(value)
}

const cascaderoptions = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]

const value1 = ref('')

const value2 = ref('')

const labelPosition = ref('right')
const itemLabelPosition = ref('')
const formLabelAlign = ref({
  name: '',
  region: '',
  type: '',
})
const num = ref(1)
const handleChange = () => {
  console.log(value)
}
const inputtag = ref('')

const radio1 = ref('1')

const slidervalue = ref(0)

const switchvalue1 = ref(true)
const switchvalue2 = ref(true)

const timepickervalue1 = ref()

const timeselectvalue = ref('')

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const transferdata = ref(generateData())
const transfervalue = ref([])

const treeselectvalue = ref()

const treeselectdata = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
</script>
