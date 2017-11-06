// import moreCell from "../../components/moreCell/moreCell.js"

Page({
  // moreCell,
  /**
   * 页面的初始数据
   */
  data: {
    mainData:[
      {
        name:"扫一扫",
        style:"margin:20px 0"
      },{
        name:"省流量模式",
        switchActive: true
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
  components: {
      moreCell: {
        text: "moreCell demo"
      }
  },
  clickMoreCell(e){
    let { name } = e.currentTarget.dataset.item
    console.debug(name)
  },
  switchChange(e){
    console.debug(e.detail.value)
  },
  
  tap() {
    console.log('tap')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.childrens)
    let app = getApp()
    // console.debug(getCurrentPages())
    // console.log(app.moreCell)
    // new app.moreCell()
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