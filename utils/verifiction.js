// verifiction.js
module.exports = {
  // 验证并提示表单必填项
  // data为form数据，dataName为key对应的描述 var dataName = {'desc' : '描述','title' : '标题',...};
  isRequired: function (data, dataName) {
    for (let key in data) {
      data[key] = data[key].toString().replace(/ /g, '');
      if (!data[key]) { // {'code':'true','data':''}
        var name = dataName[key];
        //showModal 可以放在具体页面的js去实现
        wx.showModal({
          title: '提示',
          content: '请输入必选项',
          showCancel: false,
        });
        return { 'code': false, 'data': key };
        return false;
      }
    }

  }
}

/**
 * 具体使用 xxx.js
 * var verifiction = require('../../../utils/verifiction.js');
 
  formSubmit: function (e) {
    var dataName = {'desc' : '描述',,'title' : '标题'};
    var form = e.detail.value;
    var that = this;
    //验证表单数据
    var result = verifiction.isRequired(form, dataName);
     if (!result.code) {
        //有必填项未填 ，do something
        //eg.wx.showModal
    } else {
      //提交
      wx.request({
        url: "https://...",
        data: form,
        success: function (res) {
          console.log(res.data)
        }
      })
    }
  }
 */