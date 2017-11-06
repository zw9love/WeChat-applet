// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainData: [
      {
        name: "我的订单",
        src: "../../assets/img/collect.png",
        rightInfo: "查看全部订单"
      }, {
        name: "威哥钱包",
        // switchActive: true,
        style: "margin-top:20px",
        src: "../../assets/img/draft.png",
        rightInfo: "账户余额:￥3679.51"
      }, {
        name: "抵用券",
        src: "../../assets/img/like.png",
        rightInfo: "0"
      }, {
        name: "积分商城",
        style: "margin-top:20px",
        src: "../../assets/img/card.png",
        rightInfo: ""
      }, {
        name: "今日推荐",
        style: "margin-top:20px",
        src: "../../assets/img/new_friend.png",
        rightInfo: "",
        rightSrc: "../../assets/img/me_new.png"
      }, {
        name: "我要合作",
        style: "margin-top: 20px",
        src: "../../assets/img/pay.png",
        rightInfo: "轻松开店招财进宝"
      }
    ],
    orderData:[
      { src: '../../assets/img/order1.png', info: '待付款'},
      { src: '../../assets/img/order2.png', info: '待使用' },
      { src: '../../assets/img/order3.png', info: '待评价' },
      { src: '../../assets/img/order4.png', info: '退款/售后' }
    ]
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