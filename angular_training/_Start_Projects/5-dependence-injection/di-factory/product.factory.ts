import { MockService } from "./mock.service";
import { ProductService } from "./product.service";


export function productServiceFactory(isProd: boolean){
  if(isProd){
    return new ProductService();
  } else {
    return new MockService();
  }
}
