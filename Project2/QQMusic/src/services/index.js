import request from '../utils/request';

// 获取首页数据
export function getIndex(){
  return request('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540193699076')
}

//获取排行榜数据
export function getList(){
  return request('/api/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1881802555&uin=1258776978&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540211848612')
}
