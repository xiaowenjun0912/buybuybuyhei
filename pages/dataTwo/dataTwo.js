// pages/dataTwo/dataTwo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    twoList:[],
    num:110000,
    index:'',
    myJob:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
           // 调用接口
    wx.request({
      url: 'http://10.11.0.59:8090/yaoyue-app/api/common/industry/list',
      success: (backData) => {
        console.log(backData)
        this.setData({
          twoList: backData.data.list
        })
      },
   
    });
  },
  // 点击确认
  toCourse(){
    wx.navigateTo({
        url: '/pages/course/course',
        success: (result)=>{
            console.log('我去拍照了')
        },
        fail: ()=>{},
        complete: ()=>{}
    });
},

changeTab(event) {
  console.log(event);
  // 重新修改index的值
  this.setData({
    // 保存数据
    index: event.target.dataset.index,
    myJob: event.target.dataset.name,
    num: event.target.dataset.index,
  })
  wx.setStorage({
    key: "myJob",
    data: this.data.myJob
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