Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList: [],
    index: 110000,
    // 下面的区
    twoIndex: 110010,
    // 城市是否显示默认显示
    isShow: '',
    quShow: '',
    colorIndex: '',
    province: '',
    city: '',
    mySheng: '',
    myShi: '',
    isChecked: false,
    num:110000,
    numQu:110010,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用接口
    wx.request({
      url: 'http://10.11.0.59:8090/yaoyue-app/api/common/area/city/1',
      success: (backData) => {
        // console.log(backData)
        this.setData({
          cateList: backData.data.data,
        })
      },

    });
    // 默认出现的城市
    wx.request({
      url: `http://10.11.0.59:8090/yaoyue-app/api/common/area/city/${this.data.index}`,
      success: (backData) => {
        // console.log(backData)
        this.setData({
          myList: backData.data.data
        })
      },
    })

  },
  // 点击省份
  changeTab(event) {
    console.log(event);
    // 重新修改index的值
    this.setData({
      // 保存数据
      index: event.target.dataset.index,
      mySheng: event.target.dataset.name,
      isShow: '',
      quShow: true,
      isChecked: true,
      num:event.target.dataset.index,

    })
    wx.request({
      url: `http://10.11.0.59:8090/yaoyue-app/api/common/area/city/${this.data.index}`,
      success: (backData) => {
        // console.log(backData)
        this.setData({
          myList: backData.data.data
        })
      },

    })
    wx.setStorage({
      key: "mySheng",
      data: this.data.mySheng
    });
  },
  // 点击城市
  changeShi(event) {
    // console.log(event);
    this.setData({
      // 保存数据
      twoIndex: event.target.dataset.index,
      myShi: event.target.dataset.name,
    })
    wx.request({
      url: `http://10.11.0.59:8090/yaoyue-app/api/common/area/city/${this.data.twoIndex}`,
      success: (backData) => {
        console.log(backData);
        this.setData({
          twoList: backData.data.data,
          isShow: true,
          quShow: '',

        })
      },

    })
    wx.setStorage({
      key: "myShi",
      data: this.data.myShi
    });
  },
  // 点击区
  changColor(event) {
    // console.log(event);
    this.setData({
      colorIndex: event.target.dataset.index,
      province: this.data.index,
      city: this.data.twoIndex,
      numQu:event.target.dataset.index,

    });

    wx.setStorage({
      key: "province",
      data: this.data.index
    });

    wx.setStorage({
      key: "city",
      data: this.data.twoIndex
    });

    wx.navigateTo({
      url: '/pages/course/course',
      success: (result) => {},
      fail: () => {},
      complete: () => {}
    });
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