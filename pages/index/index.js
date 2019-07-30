//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    keyWord: '',
    foodList: [{
      "name": "炸鸡",
      "rate": 4,
      "distributionFee": 2,
      "distributionTime": 35,
      "foodImgSrc": "../../images/food1.png"
    }]
  },
  //事件处理函数
  onSearch: function() {
    console.log(this.data)
  },

  onLoad: function() {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})