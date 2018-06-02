//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    // motto: '北京欢迎你',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'
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
    carouselData: [
      [
        { src: '../../assets/img/zlam.png', name: '足疗按摩' },
        { src: '../../assets/img/gw.png', name: '购物' },
        { src: '../../assets/img/jrxd.png', name: '今日新单' },
        { src: '../../assets/img/xckc.png', name: '小吃快餐' },
        { src: '../../assets/img/shfw.png', name: '生活服务' },
        { src: '../../assets/img/tdyp.png', name: '甜点饮品' },
        { src: '../../assets/img/mj.png', name: '美甲' },
        { src: '../../assets/img/jdmp.png', name: '景点门票' },
        { src: '../../assets/img/ly.png', name: '旅游' },
        { src: '../../assets/img/qbfl.png', name: '全部分类' },
      ],
      [
        { src: '../../assets/img/zlam.png', name: '足疗按摩' },
        { src: '../../assets/img/gw.png', name: '购物' },
        { src: '../../assets/img/jrxd.png', name: '今日新单' },
        { src: '../../assets/img/xckc.png', name: '小吃快餐' },
        { src: '../../assets/img/shfw.png', name: '生活服务' },
      ]
    ],
    loveEffectData: {
      title: '猜你喜欢',
      src: '../../assets/img/cnxh.png',
      info: '查看全部'
    },
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    screenWidth: 0,
    screenHeight: 0,
    cityName: ''
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goMessage(){
    wx.navigateTo({
      url: '../messageRemind/messageRemind'
    })
  },
  goAddress(){
    wx.navigateTo({
      url: '../address/address'
    })
  },
  goSearch() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  scan() {
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)
        wx.showToast({
          title: res.result,
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
    })
  },
  onLoad: function () {
    // 作为小程序的状管理器吧
    // app.globalData.userInfo = '改一下'
    // console.log(app.globalData)
    this.data.tempData = this.data.loveData.slice(0)
    // wx.startPullDownRefresh()
    // console.debug(this.data.tempData)
    wx.getSystemInfo({
      success: ({ screenWidth, screenHeight }) => {
        // let { screenWidth, screenHeight } = res
        this.setData({
          screenWidth: screenWidth,
          screenHeight: screenHeight,
        })
      }
    })

    // wx.showShareMenu({
    //   withShareTicket: true,
    //   success: function (res) {
    //     // 分享成功
    //     console.log('shareMenu share success')
    //     console.log('分享' + res)
    //   },
    //   fail: function (res) {
    //     // 分享失败
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      cityName: app.globalData.cityName
    })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
  },
  // onShareAppMessage(){
  //   return {
  //     title: '我的首页',
  //     path: '/page/user?id=123'
  //   }
  // },
  onReachBottom() {
    console.log('到达最低了')
    // wx.showLoading({ title: '加载中', mask: true})
    // setTimeout(() => {
    this.setData({ loveData: this.data.loveData.concat(this.data.tempData) })
    //   wx.hideLoading()
    // }, 1000)
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
    setTimeout(() => {
      wx.showLoading({ title: '重新加载中...', mask: true })
    }, 0)
    setTimeout(() => {
      wx.hideLoading()
    }, 3000)
  },
  onShareAppMessage() {
    return {
      title: '威哥电商首页',
      path: '/pages/index/index',
      success: function (res) {
        console.log(res.shareTickets[0])
        // console.log
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success: function (res) { console.log(res) },
          fail: function (res) { console.log(res) },
          complete: function (res) { console.log(res) }
        })
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
  }
})
