//请求文件
import axios from "axios";
export function demos (config){
  const a=axios.create({
   // baseURL:"http://server.natappfree.cc:38344",
     baseURL:"http://localhost:9000",
    timeout:5000,
  })
 return  a(config);
}
export const sp="localhost:9000";
