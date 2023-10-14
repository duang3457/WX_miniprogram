// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iptValue:"",
    listArr:[
      {id:123, 
       title:"这是主题1",
       tPStart:"2023.10.9",
       tPEnd:"2023.10.10",
       desc:"这是描述1",
       pic:"这里放图片1URL"},
       {id:234, 
        title:"这是主题2",
        tPStart:"2023.10.9",
        tPEnd:"2023.10.10",
        desc:"这是描述2",
        pic:"这里放图片2URL"}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '这里是编辑商品界面',
    })
    wx.setNavigationBarColor({
      backgroundColor: '#eee',
      frontColor: '#000',
    })
  },

  //添加商品信息
  onSubmit(){
    let value = this.data.iptValue;
    let arr = this.data.listArr;
    arr.push({
      id:"",
      title: value
    })
    this.setData({
      listArr: arr,
      iptValue:""
    })
    wx.showToast({
      title: '添加成功'
    })

  },

  //删除商品信息
  clickClose(e){
    wx.showModal({
      title: '是否确认删除？',
      success:res=>{
        if(res.confirm){
          let {index} = e.currentTarget.dataset;
          let arr = this.data.listArr;
          arr.splice(index, 1);
          this.setData({
            listArr: arr
          })
        }
      }

    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})