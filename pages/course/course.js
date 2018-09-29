const courses = require('../../datas/courses.js')
var verifiction = require('../../utils/verifiction.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShow: '',
        name: "",
        phone: "",
        company: "",
        job: "",
        label: "",
        mySheng: [],
        myShi:[],
        myJob:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */

    onLoad: function (options) {
        var that =this;
        wx.getStorage({
            key: "mySheng",
            // success 成功
            success: res => {
                console.log(res);
                // this.mySheng = res.data;
                that.setData({
                    mySheng : res.data
                })

            },
            // 失败触发
            fail: res => {
                console.log(res);
            }
        });
        wx.getStorage({
            key: "myShi",
            // success 成功
            success: res => {
                console.log(res);
                // this.mySheng = res.data;
                that.setData({
                    myShi : res.data
                })

            },
            // 失败触发
            fail: res => {
                console.log(res);
            }
        });
        wx.getStorage({
            key: "myJob",
            // success 成功
            success: res => {
                console.log(res);
                // this.mySheng = res.data;
                that.setData({
                    myJob : res.data
                })

            },
            // 失败触发
            fail: res => {
                console.log(res);
            }
        });
    },



    setTitle(event) {
        wx.showToast({
            title: '请填写必填项!',
            icon: 'none',
            duration: 1500,
            mask: false,
        });
    },

    toDataone() {
        wx.navigateTo({
            url: '/pages/dataOne/dataOne',
            success: (result) => {},
            fail: () => {},
            complete: () => {}
        });
    },
    toDatatwo() {
        wx.navigateTo({
            url: '/pages/dataTwo/dataTwo',
            success: (result) => {},
            fail: () => {},
            complete: () => {}
        });
    },




    formSubmit: function (e) {
        console.log(e.detail.value);
        var name = e.detail.value.name;
        var phone = e.detail.value.phone;
        var job = e.detail.value.job;
        var label = e.detail.value.label;
        var company = e.detail.value.mobile;
        if (name == "" || phone == "" || phone == "" || company == "" || job == "" || label == "") {
            wx.showModal({
                title: '提示',
                content: '请输入完整信息！',
                success: function (res) {
                    if (res.confirm) {}
                }
            })
        } else {}
    },
    inputjob: function (e) {
        this.setData({
            isShow: true
        });
    },
    inputPhoneNum: function (e) {
        let phoneNumber = e.detail.value
        if (phoneNumber.length === 11) {
            let checkedNum = this.checkPhoneNum(phoneNumber)
        } else {}
    },
    checkPhoneNum: function (phoneNumber) {
        let str = /^1\d{10}$/
        if (str.test(phoneNumber)) {
            return true
        } else {
            wx.showToast({
                title: '请填写手机!',
                icon: 'none',
                duration: 1500,
                mask: false,
            });
            return false
        }
    },
    turnBlue() {
        // var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        // if(phone.length===0){
        //     wx.showToast({
        //         title: '输入的手机号为空',
        //         icon: 'none',
        //         duration: 1500
        //     });
        //     return false;
        // }else if (phone.length < 11) {
        //     wx.showToast({
        //         title: '手机号长度有误！',
        //         icon: 'none',
        //         duration: 1500
        //     });
        //     return false;
        // } else if (!myreg.test(phone)) {
        //     wx.showToast({
        //         title: '手机号有误！',
        //         icon: 'none',
        //         duration: 1500
        //     });
        //     return false;
        // }
    },

    myNext(e) {
        console.log(e.detail.value);

        wx.navigateTo({
            url: '/pages/photo/photo',
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