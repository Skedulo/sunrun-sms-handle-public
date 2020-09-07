"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSMSResLogs = void 0;
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
`;
exports.getSMSResLogs = (fetch, phoneNumber) => fetch.post('https://api.skedulo.com/graphql/graphql', {
    query: getSMSResLogQuery,
    variables: { filterSms: `CustomerPhoneNumber == '${phoneNumber}' AND ReceivedResponse == false` }
}).then(res => {
    console.log('res', res);
    if (res.data.sMSResponseLog.edges.length > 0) {
        return res.data.sMSResponseLog.edges[0].node;
    }
    else
        return null;
});
