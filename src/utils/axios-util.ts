// eslint-disable-next-line no-unused-vars
import { AxiosRequestConfig } from 'axios'

export class AxiosUtil {
  /**
   * Get request token.
   * @return {String} Request token.
   */
  static getRequestToken = (axiosRequestConfig: AxiosRequestConfig): string => {
    let params = ''
    if (axiosRequestConfig.params) {
      params += JSON.stringify(axiosRequestConfig.params)
    }
    if (axiosRequestConfig.data) {
      params += JSON.stringify(axiosRequestConfig.data)
    }
    return `${axiosRequestConfig?.url?.split('?')[0]}::${axiosRequestConfig.method}::${params}`
  }
}
