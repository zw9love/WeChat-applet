// pages/address/address.js

// let changeData = require('../../assets/json/address.json');
// let sortData = require('../../assets/json/addressSort.json');

import { changeData, sortData} from '../../utils/address.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainData: [],
    letterData: [],
    windowHeight: 0,
    scrollTop: 0,
    scrollActive: true,
  },

  jump(e){
    // console.log(e.currentTarget.dataset.key)
    let {key, mainData} = e.currentTarget.dataset
    let data = mainData.slice(0, key)
    // console.log(data)
    let cityHeight = 0
    for (let i in data){
      cityHeight +=data[i].city.length * 61
    }
    // let cityHeight = data.city.length * 61
    let titleHeight = data.length * 50
    this.setData({
      scrollTop: cityHeight + titleHeight
    })
  },

  selectCity(e){
    let { entry } = e.currentTarget.dataset
    // console.log(entry)
    app.globalData.cityName = entry.name
    wx.navigateBack()
    // wx.navigateTo({
    //   url: '../search/search'
    // })
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
    let letterData = []
    for (var i in sortData) {
      letterData.push(sortData[i].title)
      for (var j in changeData) {
        if (changeData[j]['pinyin'].charAt(0) === sortData[i]['title']) {
          sortData[i]['city'].push(changeData.splice(j, 1)[0]);
        }
      }
    }
    // console.log(sortData)

    wx.getSystemInfo({
      success: (res) => {
        console.log(res)
        let { windowHeight } = res
        this.setData({
          windowHeight: windowHeight,
          mainData: sortData,
          letterData
        })
      }
    })

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