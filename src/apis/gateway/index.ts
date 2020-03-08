/* eslint-disable no-unused-vars */
import * as IntraAxios from '@/plugins/axios/axios-for-intra-communication'

export const gatewayApi = {
  appInfo: () => IntraAxios.get('/gateway/common/app-info')
}
