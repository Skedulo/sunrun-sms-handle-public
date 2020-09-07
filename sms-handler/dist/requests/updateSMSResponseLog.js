"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSMSResponseLog = void 0;
const updateSMSResponseLogMutation = `
    mutation updateSMSResponseLog($updateInput: UpdateSMSResponseLog!) {
      schema {
        updateSMSResponseLog(input: $updateInput)
      }
    }
  `;
exports.updateSMSResponseLog = (fetch, smsResponseLog) => fetch.post('https://api.skedulo.com/graphql/graphql', {
    query: updateSMSResponseLogMutation,
    variables: {
        updateInput: smsResponseLog,
    }
}).then(res => {
    console.log('res', res);
    return res.data.schema;
});
