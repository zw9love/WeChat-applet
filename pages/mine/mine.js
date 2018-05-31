// pages/mine/mine.js
const app = getApp()

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
    orderData: [
      { src: '../../assets/img/order1.png', info: '待付款' },
      { src: '../../assets/img/order2.png', info: '待使用' },
      { src: '../../assets/img/order3.png', info: '待评价' },
      { src: '../../assets/img/order4.png', info: '退款/售后' }
    ],
    userInfoData: [
      { name: '威哥卷', num: 100 },
      { name: '评价', num: 99 },
      { name: '收藏', num: 88 },
    ],
    logoSrc: '../../assets/img/wei.png',
    username: '请登录'
  },

  clickMoreCell(e) {
    let { name, fnName } = e.currentTarget.dataset.item
    console.debug(e.currentTarget.dataset.item)
    if (fnName) {
      this[fnName]()
    }
  },
  login(res){
    // console.log(111)
    // console.log(res.detail.userInfo)
    let { avatarUrl, nickName } = res.detail.userInfo
    if (avatarUrl) {
      this.setData({ logoSrc: avatarUrl, username: nickName })
    }
    // wx.login({
    //   success: function (res) {
    //     if (res.code) {
    //       console.log(res)
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // });
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
    // console.log(111)
    // let { avatarUrl, nickName } = app.globalData.userInfo
    // if (avatarUrl) {
    //   this.setData({ logoSrc: avatarUrl, username: nickName })
    // }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // let { avatarUrl, nickName } = app.globalData.userInfo
    // if (avatarUrl) {
    //   this.setData({ logoSrc: avatarUrl, username: nickName })
    // }
    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        // console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // this.triggerEvent('login')
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              // console.log(res.userInfo)
              let { avatarUrl, nickName } = res.userInfo
              if (avatarUrl) {
                this.setData({ logoSrc: avatarUrl, username: nickName })
              }
            }
          })
        }
      }
    })
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