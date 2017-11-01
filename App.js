App({
  onLaunch: function() {
    // Do something initial when launch.
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    

  },
  onShow: function() {
      // Do something when show.
      console.log('onshow')
      this.getAccountInfoDetail();
  },
  onHide: function() {
      // Do something when hide.
  },
  // 获取用户的信息，包括弹窗申请信息，注册用户，更新用户基本信息
  getAccountInfoDetail: function(){
    this.validateUserSetting();
    if(!this.validateUserSession()){
      this.fetchLoginCode();
      this.fetchUserDetailInfo();
    }else{
      this.fetchUserDetailInfo();
    }
  },
  
  // 检查用户的session是否过期
  validateUserSession: function(){  
    var sessionOk = false;
    wx.checkSession({
      success: function () {
        console.log('session is ok')
        sessionOk = true;
      },
      fail: function () {
        console.log('session is broken');
        sessionOk = false;
      }
    })
    return sessionOk;
  },

  // 获取登录的用户
  fetchLoginCode: function(){
    var that = this;
    wx.login({
      success: function (res) {
        console.log(res)
        var code = res.code
        if (code) {
          console.log("获取了登录凭证", code)
          // --------- 发送凭证 ------------------
          wx.request({
            url: 'http://localhost:4000/api/gold/accounts',
            method: 'POST',
            data: {
              code: code
            },
            success: function (res) {
              console.log('current_user', res.data)
              that.userData = res.data.gold_account;
            },
            fail: function (res) {
              console.log(res.data)
            }
          })
        } else {
          console.log("获取失败")
        }
      }
    })
  },

  fetchUserDetailInfo: function(){
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var raw_data = res.rawData;
        
        wx.request({
          url: 'http://localhost:4000/api/gold/accounts/update_info',
          method: 'PUT',
          data: {
            token: that.userData.token,
            raw_data: raw_data,
          },
          success: function (res) {
            that.userData = res.data.gold_account;
            console.log("global data", that.userData)
          },
          fail: function (res) {
            console.log("更新用户信息失败")
          }
        })
      }
    })
    
  },

  // 获取用户的权限
  validateUserSetting: function(){
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              console.log('获取授权成功');            
            }
          })
        } else {
          console.log("授权的有", res);
        }
      }
    })
  },

  fetchUserInfo: function(cb) {
    var that = this;    
           
  },

  globalData: {
    systemInfo: null
  },
  userData: {

  }
})
