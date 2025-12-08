import { Gaxios } from 'gaxios';
import FormData from 'form-data';
import { version as gaxiosVersion } from 'gaxios/package.json';

export interface HttpRequestOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  formData?: Record<string, any>;
  timeout?: number;
}

export class HttpRequestClient {
  private static gaxiosInstance = new Gaxios();

  static async request(options: HttpRequestOptions): Promise<any> {
    let data = options.body;
    let headers = {
      'User-Agent': `gaxios/${gaxiosVersion}`,
      ...options.headers,
    };

    if (options.formData) {
      const form = new FormData();
      for (const key in options.formData) {
        form.append(key, options.formData[key]);
      }
      data = form;
      headers = { ...headers, ...form.getHeaders() };
    }

    const response = await this.gaxiosInstance.request({
      url: options.url,
      method: options.method || 'GET',
      headers,
      data,
      timeout: options.timeout,
    });

    return response.data;
  }
}
