// src/index.ts
import { Gaxios } from "gaxios";
import FormData from "form-data";
import { version as gaxiosVersion } from "gaxios/package.json";
var HttpRequestClient = class {
  static async request(options) {
    let data = options.body;
    let headers = {
      "User-Agent": `gaxios/${gaxiosVersion}`,
      ...options.headers
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
      method: options.method || "GET",
      headers,
      data,
      timeout: options.timeout
    });
    return response.data;
  }
};
HttpRequestClient.gaxiosInstance = new Gaxios();
export {
  HttpRequestClient
};
//# sourceMappingURL=index.mjs.map