// eslint-disable-next-line no-unused-vars
import Axios, { AxiosRequestConfig, Canceler } from 'axios'
import { AxiosUtil } from '@/utils/axios-util'

export const CancelToken = Axios.CancelToken
export const pendingRequestList: PendingRequest[] = []

/**
 * Pending Request
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 1/6/20 2:26 PM
 */
export class PendingRequest {
  /**
   * Request token.
   *
   * Format: [URL]::[HTTP Method]::[Stringified Request Params]
   *
   * Sample: /api/cancel-request-test::get::undefined
   */
  requestToken!: string

  /**
   * Cancel executor
   */
  cancelExecutor!: Canceler

  constructor (requestToken: string, cancelExecutor: Canceler) {
    this.requestToken = requestToken
    this.cancelExecutor = cancelExecutor
  }
}

export const cancelAndRemoveSamePendingRequest = (axiosRequestConfig: AxiosRequestConfig): void => {
  pendingRequestList.forEach((pendingRequest, index) => {
    const requestToken = AxiosUtil.getRequestToken(axiosRequestConfig)
    if (pendingRequest.requestToken === requestToken) {
      // Execute cancellation of this pending request.
      pendingRequest.cancelExecutor(`Cancelled Axios request. Request token: ${requestToken}`)
      // Remove this pending request from list.
      pendingRequestList.splice(index, 1)
    }
  })
}
