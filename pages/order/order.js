// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      {
        "name": "炸鸡",
        "time": '2019-7-30',
        "foodImgSrc": "../../images/food1.png",
        "id": 1,
        "foodList": [
          { "name": '鲜香玉米粉', 'num': 1, 'fee': '14.0'},
          { "name": '五谷招牌鱼粉', 'num': 1, 'fee': '14.0' },
          { "name": '招牌鱼粉', 'num': 1, 'fee': '28.0' }
        ],
        "lunchboxfee": '8.0',
        "Discountfee": '2.0',
        'Deliveryfee': '3.0',
        'sumfee': '65.00',
        'num': '1'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 支付
  pay: function() {
    console.log('支付')
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