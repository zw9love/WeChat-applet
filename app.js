//app.js

// import {moreCell} from 'components/moreCell/moreCell.js'

App({
  // moreCell,
  onLaunch: function ({ path, query, scene, referrerInfo }) {
    //console.log('path: ' + path)
    //console.log(query)
    //console.log('scene: ' + scene)
    //console.log(referrerInfo)
    // console.log('referrerInfo.appId: ' + referrerInfo.appId)
    // console.log('referrerInfo.extraData: ' + referrerInfo.extraData)
    // console.log(this)
    // console.log(this.getCurrentPages())
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    wx.setTabBarBadge({
      index: 2,
      text: '99'
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.getUserInfo({
          //   success: res => {
          //     // console.log(res.userInfo)
          //     // 可以将 res 发送给后台解码出 unionId
          //     this.globalData.userInfo = res.userInfo

          //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          //     // 所以此处加入 callback 以防止这种情况
          //     if (this.userInfoReadyCallback) {
          //       this.userInfoReadyCallback(res)
          //     }
          //   }
          // })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    name: '大熊',
    cityName:  '北京',
    showData: {
      src: '../../assets/img/eat2.png',
      title: '美食美食2',
      info: '101元代金券一张，可叠加',
      price: '70',
      index: '100',
      sellNum: '4777',
      url: '../../pages/show/show'
    },
  }
})