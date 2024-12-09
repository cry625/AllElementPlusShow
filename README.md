main分支为系统主题色测试
1.方案一：使用vueuse+elementPlus/theme-chalk使用scss文件替换颜色
优点：不同主题颜色用文件划分开，直接在scss文件中定义蓝+明、蓝+暗、红+明、红+暗
缺点：速度慢、有未解决的随机未知报错；仅element项目可复用
2.方案二：使用vueuse+use-element-plus-theme修改组件
优点：方便快捷
缺点：仅组件的primary颜色为主题色，其他颜色不会被修改；仅element项目可复用

themeByCss分支为系统主题色测试
3.方案三：在css中设置theme匹配不同颜色
优点：方便；可定制化高，elementPlus和vant项目在修改基础变量后能互用
