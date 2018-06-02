// components/loveCell/loveCell.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这里定义了data属性，属性值可以在组件使用时指定
    data: {
      type: Object,
      value: {},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goShow(){
      // console.log(this.data.data)
      // console.log(app.globalData)
      app.globalData.showData  = this.data.data
    }
  }
})
