"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSMS = exports.getSMSResLogsData = exports.onSMSResponse = void 0;
const fetch_1 = require("./fetch");
const updateSMSResponseLog_1 = require("./requests/updateSMSResponseLog");
const getSMSResLog_1 = require("./requests/getSMSResLog");
exports.onSMSResponse = async (payload, headers) => {
    const body = payload.body;
    const from = payload.from;
    let templates = await exports.getSMSResLogsData({ headers }, from);
    if (templates) {
        templates.CustomerResponse = body;
        await exports.updateSMS(templates, headers);
    }
    return { status: 200 };
};
exports.getSMSResLogsData = async ({ headers }, phoneNumber) => {
    const fetch = new fetch_1.Fetch(headers.Authorization);
    const templates = await getSMSResLog_1.getSMSResLogs(fetch, phoneNumber);
    return templates;
};
exports.updateSMS = async (sMSResponseLog, headers) => {
    sMSResponseLog.ReceivedResponse = true;
    const fetch = new fetch_1.Fetch(headers.Authorization);
    return await updateSMSResponseLog_1.updateSMSResponseLog(fetch, sMSResponseLog);
};
