import { RouteIterface } from './types'
import { onSMSResponse } from './onSMSResponse'

export function getRoutes(): RouteIterface[] {

  return [
    {
      method: 'post',
      path: '/sms',
      handler: onSMSResponse
    }
  ]
}
