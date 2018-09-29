// components/settings/settings.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    settings:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  // attached(){
  //   console.log(this.data)
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    clickSettings(e){
      if (!e.currentTarget.dataset.navigateTo) return

      // console.log(e.currentTarget.dataset.navigateTo)
      //子组件通过触发自定义事件，传值给父页面
      this.triggerEvent('goToSettingsPage', e.currentTarget.dataset.navigateTo)
    }
  }
})
