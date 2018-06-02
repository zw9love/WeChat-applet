// pages/show/show.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loveData: [
      {
        src: '../../assets/img/eat1.png',
        title: '美食美食1',
        info: '100元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4666',
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat2.png',
        title: '美食美食2',
        info: '101元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4777',
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat3.png',
        title: '美食美食3',
        info: '102元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4888',
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat4.png',
        title: '美食美食4',
        info: '103元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '4999',
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat5.png',
        title: '美食美食5',
        info: '104元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '5099',
        needOrder: true,
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat6.png',
        title: '美食美食6',
        info: '105元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '5199',
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat7.png',
        title: '美食美食7',
        info: '106元代金券一张，可叠加',
        price: '70',
        index: '100',
        sellNum: '5399',
        needOrder: true,
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat8.png',
        title: '美食美食8',
        info: '666元代金券一张，可叠加',
        price: '66',
        index: '100',
        sellNum: '5599',
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat9.png',
        title: '美食美食9',
        info: '777元代金券一张，可叠加',
        price: '77',
        index: '100',
        sellNum: '5699',
        url: '../../pages/show/show'
      },
      {
        src: '../../assets/img/eat10.png',
        title: '美食美食10',
        info: '888元代金券一张，可叠加',
        price: '88',
        index: '100',
        sellNum: '5899',
        url: '../../pages/show/show'
      }
    ],
    showData: null,
    height: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // JSON.stringify(options.data, 4)
    // console.log(app.globalData.showData)
    // console.log(options)
    let showData = app.globalData.showData
    console.log(showData)
    wx.getSystemInfo({
      success: (res) => {
        // console.log(res)
        let { screenWidth } = res
        this.setData({
          height: Math.floor(screenWidth * 0.5),
          showData: showData
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