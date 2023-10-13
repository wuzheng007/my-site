import Mock from 'mockjs'
// mock全局设置接口，拦截请求地址是/api/setting的get请求
Mock.mock('/api/setting', 'get', {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img2.baidu.com/it/u=1612835289,3257047895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    siteTitle: "我的个人空间",
    github: "https://github.com/DuYi-Edu",
    qq: "1657955621",
    qqQrCode: "https://img0.baidu.com/it/u=304503446,1584310435&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200",
    weixin: "18279163180",
    weixinQrCode: "https://img0.baidu.com/it/u=304503446,1584310435&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200",
    mail: "1657955621@qq.com",
    icp: "黑ICP备17001719号",
    githubName: "DuYi-Edu",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  }

})