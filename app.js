//app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })


    var openId = (wx.getStorageSync('openId'))
    if (openId) {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
          })
        },
        fail: function () {
          // fail
          console.log("获取失败！")
        },
        complete: function () {
          // complete
          console.log("获取用户信息完成！")
        }
      })
    } else {
      wx.login({
        success: function (res) {
          console.log(res.code)
          if (res.code) {
            wx.getUserInfo({
              withCredentials: true,
              success: function (res_user) {
                wx.request({
                 //后台接口地址
                  url: 'http://10.11.0.59:8090/yaoyue-app/api/person/info/{personid}',
                  data: {
                    code: res.code,
                    encryptedData: res_user.encryptedData,
                    iv: res_user.iv
                  },
                  method: 'GET',
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function (res) {
                    // this.globalData.userInfo = JSON.parse(res.data);
                    that.setData({
                      nickName: res.data.nickName,
                      avatarUrl: res.data.avatarUrl,
                    })
                    wx.setStorageSync('openId', res.data.openId);
    
                  }
                })
              },
              //  fail: function () {
              //   wx.showModal({
              //     title: '警告通知',
              //     content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
              //     success: function (res) {
              //       if (res.confirm) {
              //         wx.openSetting({
              //           success: (res) => {
              //             if (res.authSetting["scope.userInfo"]) {
              //               wx.login({
              //                 success: function (res_login) {
              //                   if (res_login.code) {
              //                     wx.getUserInfo({
              //                       withCredentials: true,
              //                       success: function (res_user) {
              //                         wx.request({
              //                          url: 'http://10.11.0.59:8090/yaoyue-app/api/person/info/{personid}',
              //                           data: {
              //                             code: res_login.code,
              //                             encryptedData: res_user.encryptedData,
              //                             iv: res_user.iv
              //                           },
              //                           method: 'GET',
              //                           header: {
              //                             'content-type': 'application/json'
              //                           },
              //                           success: function (res) {
              //                             that.setData({
              //                               nickName: res.data.nickName,
              //                               avatarUrl: res.data.avatarUrl,
    
              //                             })
              //                             wx.setStorageSync('openId', res.data.openId);
              //                           }
              //                         })
              //                       }
              //                     })
              //                   }
              //                 }
              //               });
              //             }
              //           }, fail: function (res) {
    
              //           }
              //         })
    
              //       }
              //     }
              //   })
              // }, complete: function (res) {
    
    
              // }
            })
          }
        }
      })
    }


  },
  globalData: {
    userInfo: null
  }
})