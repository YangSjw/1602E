import request from '../utils/request';

// 获取首页数据
export function getIndex(){
  return request('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540193699076')
}
