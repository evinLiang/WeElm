//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    keyWord: '',
    orderlist: [],
    shopNum: 0,
    foodList: [
      {
        "name": "炸鸡",
        "rate": 4,
        "distributionFee": 2,
        "distributionTime": 35,
        "foodImgSrc": "../../images/food1.png",
        "id": 1,
        "checked": false
      },
      {
        "name": "麻辣烫",
        "rate": 4,
        "distributionFee": 2,
        "distributionTime": 35,
        "foodImgSrc": "../../images/food1.png",
        "id": 2,
        "checked": false
      }      
    ],
    onAdditionalList: [
      { 'name': '是否加辣', 'key': 'hot' },
      { 'name': '是否加饭', 'key': 'meal' }
    ],
    onAdditionalResult: []
  },
  //事件处理函数
  onSearch: function() {
    let keyWord = this.data.keyWord;
    // 判断是否关键字是否为空
    if(keyWord === '') {
      wx.showToast({
        title: '请输入搜索关键词',
        icon: 'none',
        duration: 2000
      })
      return false
    } 
    // ajax...
  },

  //选择
  onFoodChange: function(event) {
    let index = event.currentTarget.dataset['index']; // 获取当前食物index
    let id = event.currentTarget.dataset['id']; // 获取当前食物的id
    let orderlist = this.data.orderlist;  // 获取当前已选的订单列表
    
    // 获取当前订单id是否在已选的订单列表内，在则删除，不在添加
    let theIndex =  orderlist.indexOf(id); // 
    if (theIndex === -1) {
      orderlist.push(id)
    } else {
      orderlist.splice(theIndex, 1);
    }

    // 单选框反选
    let foodList = this.data.foodList;
    foodList[index]['checked'] = !foodList[index]['checked'];
    
    // 更改数据
    this.setData({
      foodList: foodList,
      orderlist: orderlist
    });
  },
  // 输入框输入
  onTextChange: function(event) {
    this.setData({
      keyWord: event.detail
    })
  },

  // 规格监听
  onAdditionalChange(event) {
    console.log(event.detail)
    this.setData({
      onAdditionalResult: event.detail
    });
  },

  // 规格选择
  additionalToggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() { }, 

  // 加入购物车
  addCart: function() {
    let orderlist = this.data.orderlist;
    // 判断是否有选择商品
    if (orderlist.length === 0) {
      wx.showToast({
        title: '你还没有选择商品哦',
        icon: 'none',
        duration: 2000
      })
      return false;
    } else {
      console.log('选中的订单id', this.data.orderlist);  // 选中的订单id
      console.log('是否加辣.加饭',this.data.onAdditionalResult);  // 是否加辣.加饭
      // 把单选框取消选中
      let foodList = this.data.foodList;
      for (let i = 0; i < foodList.length; i++) {
        foodList[i]['checked'] = false
      }
      this.setData({
        shopNum: this.data.shopNum + orderlist.length,
        orderlist: [],
        foodList: foodList,
        onAdditionalResult: []
      })
    }
  }, 
  // 提交订单
  submitOrder: function() {
    console.log('选中的订单id', this.data.orderlist);  // 选中的订单id
    console.log('是否加辣.加饭', this.data.onAdditionalResult);  // 是否加辣.加饭
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