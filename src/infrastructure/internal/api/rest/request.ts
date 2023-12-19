import axios, { Method } from 'axios';
import { InternalServerError } from '../../../../domain/entity/error';


class ServiceRestRequest {
  static async request({ method = 'post', url, data }: { method?: Method; url: string; data?: any }): Promise<any> {
    try {
      const response = await axios({
        method,
        url,
        data,
      });
      return response?.data;
    } catch (error: any) {
      return { error: new InternalServerError(error.data ? error.data.message : error.message) };
    }
  }
}

export { ServiceRestRequest };
