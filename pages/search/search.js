// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: ['自助', '代金券', '休闲娱乐', '电影', '旅游', '酒店', '运动健身', 'KTV', '丽人'],
    searchCellStyle: ""
  },

  goback(){
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: ({ screenWidth, screenHeight }) => {
        // console.log(screenWidth)
        // this.searchCellStyle = { width: (screenWidth - 40) / 3}
        this.setData({
          searchCellStyle: "width: " + Math.floor((screenWidth - 40) / 3) + "px"
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