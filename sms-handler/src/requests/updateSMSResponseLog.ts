import { Fetch } from '../fetch'
import { sMSResponseLog, UpdateSMSResponseLog } from '../types'
const updateSMSResponseLogMutation = `
    mutation updateSMSResponseLog($updateInput: UpdateSMSResponseLog!) {
      schema {
        updateSMSResponseLog(input: $updateInput)
      }
    }
  `

export const updateSMSResponseLog = (fetch: Fetch, smsResponseLog: sMSResponseLog) => (
  fetch.post(
    'https://api.skedulo.com/graphql/graphql',
    {
      query: updateSMSResponseLogMutation,
      variables: {
        updateInput: smsResponseLog,
      }
    }
  ) as Promise<UpdateSMSResponseLog>
).then(res => {
  console.log('res', res);
  return res.data.schema
})
