/**
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 1/2/20 9:15 AM
 */
// eslint-disable-next-line no-unused-vars
import Axios, { AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios'
import { validate } from 'class-validator'
import { ClassValidationUtil } from '@/utils/class-validation-util'
// import * as Cancellation from '@/plugins/axios/cancellation'
import { HttpStatus } from '@/constants/http-status'
import { ResponseBody } from '@/plugins/axios/response-body'
// import { AxiosUtil } from '@/utils/axios-util'

// 1. Create an axios instance.
export const service = Axios.create({
  // Base URL of API
  baseURL: process.env.VUE_APP_BASE_API,
  // Request timeout: 30s
  timeout: 30000,
  /**
   * `validateStatus` defines whether to resolve or reject the promise for a given HTTP response status code.
   * The value of status must be less than 999.
   * @param {number} status HTTP's status code
   * @return {boolean} If `validateStatus` returns `true` (or is set to `null` or `undefined`),
   * the promise will be resolved; otherwise, the promise will be rejected.
   */
  validateStatus: (status: number) => {
    // Only the HTTP status code is equal to 200, axios would resolve the promise
    return status === HttpStatus.SUCCESS.code
  }
})

// 2. Request interceptor's configuration.
service.interceptors.request.use(
  async (axiosRequestConfig: AxiosRequestConfig) => {
    if (axiosRequestConfig?.params) {
      const validation = await validate(axiosRequestConfig.params)
      if (validation.length > 0) {
        console.error('Params validation failed! Validation:', validation)
        console.error('Params validation failed! Error message:', ClassValidationUtil.getAllValidationError(validation))
        throw new Error(`Params validation failed! The 1st error: ${ClassValidationUtil.getFirstValidationError(validation)}`)
      }
    }
    if (axiosRequestConfig?.data) {
      const validation = await validate(axiosRequestConfig.data)
      if (validation.length > 0) {
        console.error('Data validation failed! Validation:', validation)
        console.error('Data validation failed! Error message:', ClassValidationUtil.getAllValidationError(validation))
        throw new Error(`Data validation failed! The 1st error: ${ClassValidationUtil.getFirstValidationError(validation)}`)
      }
    }
    // Cancel and remove same request before sending upcoming request.
    // Cancellation.cancelAndRemoveSamePendingRequest(axiosRequestConfig)
    // Configure cancelToken for request
    // axiosRequestConfig.cancelToken = new Cancellation.CancelToken((cancel: Canceler) => {
    //   const requestToken = AxiosUtil.getRequestToken(axiosRequestConfig)
    //   const pendingRequest = new Cancellation.PendingRequest(requestToken, cancel)
    //   Cancellation.pendingRequestList.push(pendingRequest)
    // })
    return axiosRequestConfig
  },
  (error: any) => {
    // Do something with request error
    // for debug
    console.error('[IntraAxios] Error occurred when sending request!', error)
    return Promise.reject(error)
  }
)

// 3. Response interceptor's configuration.
service.interceptors.response.use(
  (axiosResponse: AxiosResponse) => {
    // Only the HTTP status code is equal to 200, axios would resolve the promise
    return Promise.resolve(axiosResponse.data)
  },
  (error: any) => {
    console.error('[IntraAxios] Error occurred when handling response!', error)
    console.error('[IntraAxios] Error occurred when handling response! Response:', error.response)
    const response = new ResponseBody()
    response.timestamp = new Date().toString()
    try {
      const status = HttpStatus.getStatusByCode(error.response?.status)
      response.status = status.code
      response.message = status.message
    } catch (e) {
      console.error(e)
      response.status = HttpStatus.BAD_REQUEST.code
      response.message = `${HttpStatus.BAD_REQUEST.message} ${error}`
    }
    return Promise.reject(response)
  }
)

// noinspection JSUnusedGlobalSymbols
/**
 * Send a GET request.
 *
 * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
 *
 * @param url URL
 * @param params Params
 * @param responseType Response type.
 * @return {Promise<any>} Response data.
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET'>HTTP request methods — GET | MDN</a>
 */
export function get (url: string, params?: any, responseType: ResponseType = 'json'): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    service.get(url, {
      params: params,
      responseType: responseType
    }).then(resp => {
      resolve(resp)
    }).catch(rejectedReason => {
      reject(rejectedReason)
    })
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * The DELETE method deletes the specified resource.
 *
 * @param url URL.
 * @param params Params.
 * @return {Promise<any>} Response data.
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE'>HTTP request methods — DELETE | MDN</a>
 */
export function deleteRequest (url: string, params: any): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    service.delete(url, {
      params: params
    }).then(resp => {
      resolve(resp)
    }).catch(rejectedReason => {
      reject(rejectedReason)
    })
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * The HEAD method asks for a response identical to that of a GET request, but without the response body.
 *
 * The HTTP HEAD method requests the headers that are returned if the specified resource would be requested with an HTTP GET method.
 * Such a request can be done before deciding to download a large resource to save bandwidth, for example.
 *
 * @param url URL.
 * @param params Params.
 * @return {Promise<any>} Response data.
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD'>HTTP request methods — HEAD | MDN</a>
 */
export function head (url: string, params: any): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    service.head(url, {
      params: params
    }).then(resp => {
      resolve(resp)
    }).catch(rejectedReason => {
      reject(rejectedReason)
    })
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * Send a POST request with payload.
 *
 * The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
 *
 * @param url URL
 * @param params Payload.
 * @return {Promise<any>} Response data.
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST'>HTTP request methods — POST | MDN</a>
 */
export function post (url: string, params: any): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    service.post(url, params)
      .then(resp => {
        resolve(resp)
      })
      .catch(rejectedReason => {
        reject(rejectedReason)
      })
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * Send a legacy POST request with URL search params.
 *
 * The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
 *
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST'>HTTP request methods — POST | MDN</a>
 * @param url URL.
 * @param params URL search params.
 * @return {Promise<any>} Response data.
 */
export function legacyPost (url: string, params: any): Promise<any> {
  const urlSearchParams = new URLSearchParams()
  Object.keys(params).forEach(key => {
    urlSearchParams.append(key, params[key])
  })
  return new Promise<any>((resolve, reject) => {
    service.post(url, urlSearchParams)
      .then(resp => {
        resolve(resp)
      })
      .catch(rejectedReason => {
        reject(rejectedReason)
      })
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * Send a POST request with multipart.
 *
 * The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
 *
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST'>HTTP request methods — POST | MDN</a>
 * @param url URL.
 * @param data data
 * @return {Promise<any>} Response data.
 */
export function postWithMultipart (url: string, data: any): Promise<any> {
  const objectKeyValueMap = new Map<string, any>(Object.entries(data))
  const formData = new FormData()
  objectKeyValueMap.forEach((value, key) => {
    if (value instanceof Array) {
      for (const item of value) {
        formData.append(key, item)
      }
    } else {
      formData.append(key, value)
    }
  })
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  return new Promise((resolve, reject) => {
    service.post(url, formData, config)
      .then(response => {
        resolve(response)
      })
      .catch(rejectedReason => {
        reject(rejectedReason)
      })
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * Send a PUT request.
 *
 * The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
 * The difference between PUT and POST is that PUT is idempotent:
 * calling it once or several times successively has the same effect (that is no side effect), where successive identical POST may have additional effects, like passing an order several times.
 *
 * @param url URL.
 * @param params Params.
 * @returns {Promise<any>} Response data.
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT'>HTTP request methods — PUT | MDN</a>
 */
export function put (url: string, params: any): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    service.put(url, {
      params: params
    }).then(resp => {
      resolve(resp)
    }).catch(rejectedReason => {
      reject(rejectedReason)
    })
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * The PATCH method is used to apply partial modifications to a resource.
 *
 * The HTTP PUT method only allows complete replacement of a document.
 * Unlike PUT, PATCH is not idempotent, meaning successive identical patch requests may have different effects.
 * However, it is possible to issue PATCH requests in such a way as to be idempotent.
 *
 * @param url URL.
 * @param params Params.
 * @return {Promise<any>} Response data.
 * @see <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH'>HTTP request methods — PATCH | MDN</a>
 */
export function patch (url: string, params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    service.patch<any>(url, params)
      .then(resp => {
        resolve(resp)
      })
      .catch(rejectedReason => {
        reject(rejectedReason)
      })
  })
}
