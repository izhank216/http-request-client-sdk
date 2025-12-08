interface HttpRequestOptions {
    url: string;
    method?: string;
    headers?: Record<string, string>;
    body?: any;
    formData?: Record<string, any>;
    timeout?: number;
}
declare class HttpRequestClient {
    private static gaxiosInstance;
    static request(options: HttpRequestOptions): Promise<any>;
}

export { HttpRequestClient, type HttpRequestOptions };
