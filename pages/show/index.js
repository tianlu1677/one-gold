const app = getApp()
// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gold_post: {
      id: '222',
      gold_account_id: '',
      title: '222',
      description: '',
      content: '',
      price: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchPost(options.id)
  },

  // 重新拉取post信息
  fetchPost: function(post_id = 37){
    var that = this;
    wx.request({
      url: app.globalData.base_url + '/api/gold/posts/' + post_id,
      method: 'GET',
      data: {
        token: app.userData.token,
      },
      success: function(res){
        console.log(res)
        var gold_post = res.data.gold_post;
        that.setData({
          gold_post: {
            id:           gold_post.id,
            gold_account_id: gold_post.gold_account_id,
            title:        gold_post.title,
            description:  gold_post.description,
            content:      gold_post.content,
            price:        gold_post.price,
          }
        })
      },
      fail: function(res){
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log('button', res.target)
    }
    return {
      title: '我有一个密码分享给你',
      path: '/page/success/index?id=' + this.data.gold_post.id,
      // imageUrl: '',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})
