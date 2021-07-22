//请求文件
import axios from "axios";
export function demos (config){
  const a=axios.create({
   // baseURL:"http://37icsp.natappfree.cc",
    baseURL:"http://localhost:9000",
    timeout:100000,
  })
 return  a(config);
}
export const sp="localhost:9000";
