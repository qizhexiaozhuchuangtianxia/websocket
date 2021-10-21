import request from "./request";
import api from "./api";

// 获取数据方法
export const getHomeData = async (params) => {
  try {
    return await request(api.home, params);
  } catch (err) {
    console.error(err, "homeService.js => getHomeData");
  }
};

// 处理数据类，一个页面对应一个类，主要是用来适配不同数据来源(普通接口和socket)，然后处理数据格式
class HomeService {
  constructor() {
    // 用来缓存数据，如果是静态接口可以用
    this.homeData = null;
  }
  // 调用获取数据方法
  // 1.如果payload.params说明是静态接口
  // 2.如果payload.data说明是传过来直接是数据(Socket)
  // 处理两种数据来源，输出UI组件需要的数据格式
  getHomeData = async (payload) => {
    let res = {};
    // 普通接口
    if (payload.params) {
      res = await getHomeData(payload.params);
    // socket
    } else if (payload.data) {
      res = payload.data;
    }

    //  这里处理数据格式，给UI组件使用，UI组件只是消费数据不需处理
    // ...

    return res;
  };
  // 获取数据2，同上
  getHomeData2 = async () => {};
}

export default new HomeService();
