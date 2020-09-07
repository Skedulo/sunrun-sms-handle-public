import { Fetch } from '../fetch'
import { GetSMSResLog } from '../types'


const getSMSResLogQuery = `
  query fetchSMSResLog($filterSms: EQLQueryFilterSMSResponseLog!) {
    sMSResponseLog(filter: $filterSms, orderBy: "CreatedDate DESC") {
      edges {
        node {
          UID
          CustomerPhoneNumber
          CustomerResponse
          Name
          ReceivedResponse
        }
      }
    }
  }
`

export const getSMSResLogs = (fetch: Fetch,phoneNumber: String) => (
  fetch.post(
    'https://api.skedulo.com/graphql/graphql',
    {
      query: getSMSResLogQuery,
      variables: {filterSms: `CustomerPhoneNumber == '${phoneNumber}' AND ReceivedResponse == false`}
    }
  ) as Promise<GetSMSResLog>
).then(res => {
  console.log('res', res);
  if(res.data.sMSResponseLog.edges.length > 0){
    return res.data.sMSResponseLog.edges[0].node
  }
  else return null
})
