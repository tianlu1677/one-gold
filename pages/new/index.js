// index.js
const app = getApp()

Page({

  data: {
    passedValidated: false
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    var gold_post = e.detail.value;
    this.sumitPost(gold_post);
  },

  sumitPost: function(gold_post){
    wx.request({
      url: app.globalData.base_url +  '/api/gold/posts',
      method: 'POST',
      data: {
        gold_post: gold_post,
        token: app.userData.token,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var post_id = res.data.gold_post.id;
        wx.navigateTo({
          url: '/pages/show/index?id=' + post_id
        })
      },
      fail: function (res) {
        console.log(res.data)
      }
    })
  },

  validatePost: function (gold_post) {
    if(gold_post.title == ''){

    } else {

    }
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
