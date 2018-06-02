// import moreCell from "../../components/moreCell/moreCell.js"

Page({
  // moreCell,
  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    mainData: [
      {
        name: "扫一扫",
        style: "margin:20px 0",
        fnName: 'scan'
      }, {
        name: "省流量模式",
        switchActive: true
      }, {
        name: "消息提醒",
        url: '../../pages/messageRemind/messageRemind'
      }, {
        name: "邀请好友",
        url: '../../pages/invitation/invitation'
      }, {
        name: "清空缓存",
        fnName: 'clearCache'
      }, {
        name: "省流量模式详情",
        url: '../../pages/flow/flow'
      }, {
        name: "意见反馈",
        style: "margin-top: 20px",
        url: '../../pages/suggest/suggest'
      }, {
        name: "问卷调查",
        url: '../../pages/investigation/investigation'
      }, {
        name: "支付帮助",
        url: '../../pages/payhelp/payhelp'
      }, {
        name: "网络诊断",
        url: '../../pages/network/network'
      }, {
        name: "关于威哥",
        url: '../../pages/about/about'
      }
    ]
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
  clearCache() {
    wx.showLoading({
      title: '清除緩存中',
      mask: true
      // icon: 'success',
      // duration: 2000
    })


    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1000,
        mask: true
      })
    }, 2000)

    // wx.getNetworkType({
    //   success: function (res) {
    //     // 返回网络类型, 有效值：
    //     // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
    //     var networkType = res.networkType
    //     console.log(networkType)
    //   }
    // })
    // wx.getSystemInfo({
    //   success: function (res) {
    //     console.log(res.model)
    //     console.log(res.pixelRatio)
    //     console.log(res.windowWidth)
    //     console.log(res.windowHeight)
    //     console.log(res.language)
    //     console.log(res.version)
    //     console.log(res.platform)
    //   }
    // })

    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })

  },

  // components: {
  //   moreCell: {
  //     text: "moreCell demo"
  //   }
  // },
  // clickMoreCell(e) {
  //   let { name, fnName } = e.currentTarget.dataset.item
  //   console.debug(e.currentTarget.dataset.item)
  //   if (fnName) {
  //     this[fnName]()
  //   }
  // },
  switchChange(e) {
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