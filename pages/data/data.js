// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "张三",
    isTest: true,
    num: 2,
    randNum: 0,
    color: "pink",
    size: "300",
    books: ["红楼梦","西游记","三国演义","水浒传"],
    picDetail:[{
      id: 1,
      petName: "皮卡丘",
      picUrl: "cloud://cloud1-7glnxfyw159bbf8b.636c-cloud1-7glnxfyw159bbf8b-1321340142/static/images/piKaQiu.png"
    },{
      id: 2,
      petName: "百变怪",
      picUrl: "cloud://cloud1-7glnxfyw159bbf8b.636c-cloud1-7glnxfyw159bbf8b-1321340142/static/images/baiBianGuai.jpg"

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(()=>{
      this.setData({
        name:"李四"
      })
    }, 2000)
  },

  clickBox(){
    let rdm = parseInt(Math.random()*100);
    let r1 = parseInt(Math.random()*255);
    let r2 = parseInt(Math.random()*255);
    let r3 = parseInt(Math.random()*255);
    let color = `rgb(${r1},${r2},${r3})`;
    let size = parseInt(Math.random()*600);
    size = size<200 ? 200 : size
    this.setData({
      randNum: rdm,
      color: color,
      size
    })
    console.log(rdm);
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