// pages/invitation/invitation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainData: [
      { src: '../../assets/img/share_wechat.png', name: '微信好友' },
      { src: '../../assets/img/share_wechatfriend.png', name: '微信朋友'},
      { src: '../../assets/img/share_weibo.png', name: '新浪微博' },
      { src: '../../assets/img/share_qq.png', name: 'QQ' },
      { src: '../../assets/img/share_zone.png', name: 'QQ空间' },
      { src: '../../assets/img/share_more.png', name: '更多' },
    ],
    margin: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: ({ screenWidth, screenHeight }) => {
        this.setData({
          margin: Math.floor((screenWidth - 60 * 3) / 6)
        })
      }
    })
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