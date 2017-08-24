// index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '战狼2电影地址',
    description: '你想要的看的电影资源',
    backgroup_image: 'https://pic4.zhimg.com/v2-483400f02570f9d6b29887ff4334888f_xs.jpg',
    content: '你想要隐藏的内容',
    price: '200',
    expirate_time: '3',
  },

  formSubmit: function(e) {
    console.log('submit')
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('提交到服务器')
    console.log('跳转到成功页面')
    this.jumpToSuccess()
  },

  jumpToSuccess: function() {
    wx.navigateTo({
      url: '/pages/success/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUpload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPull')
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
