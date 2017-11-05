Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    mainData:[
      {
        name:"扫一扫",
        style:"margin:20px 0"
      },{
        name:"省流量模式"
      },{
        name: "消息提醒"
      }, {
        name: "邀请好友"
      }, {
        name: "清空缓存"
      }, {
        name: "省流量模式详情"
      }, {
        name: "意见反馈",
        style: "margin-top: 20px"
      }, {
        name: "问卷调查"
      }, {
        name: "支付帮助"
      }, {
        name: "网络诊断"
      },{
        name: "关于威哥"
      }
    ]
  },
  clickMoreCell(e){
    let { name } = e.currentTarget.dataset.item
    console.debug(name)
  },
  
  tap() {
    console.log('tap')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})