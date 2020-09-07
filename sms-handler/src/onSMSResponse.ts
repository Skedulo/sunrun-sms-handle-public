
import { FnPayload, sMSResponseLog } from './types'
import { Fetch } from './fetch'
import { updateSMSResponseLog } from './requests/updateSMSResponseLog'
import { getSMSResLogs } from './requests/getSMSResLog'

interface RequestPayload {
    to: string
    key: {
      id: string
      vendor: string
    }
    body: string
    from: string
    receivedAt: string
  }

export const onSMSResponse = async (payload: RequestPayload, headers: FnPayload['headers']) => {
    const body = payload.body;
    const from = payload.from;
    let templates = await getSMSResLogsData({headers},from);
    if(templates){
      templates.CustomerResponse = body;
      await updateSMS(templates , headers)
    }
    return { status: 200 }
}

export const getSMSResLogsData = async ({ headers}: { headers: FnPayload['headers']}, phoneNumber: String) => {
  const fetch = new Fetch(headers.Authorization)
  const templates = await getSMSResLogs(fetch, phoneNumber)
  return templates;
}

export const updateSMS =  async ( sMSResponseLog : sMSResponseLog, headers: FnPayload['headers']) => {
  sMSResponseLog.ReceivedResponse = true;
  const fetch = new Fetch(headers.Authorization)
  return await updateSMSResponseLog(fetch, sMSResponseLog);
}
