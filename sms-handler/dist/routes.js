"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const onSMSResponse_1 = require("./onSMSResponse");
function getRoutes() {
    return [
        {
            method: 'post',
            path: '/sms',
            handler: onSMSResponse_1.onSMSResponse
        }
    ];
}
exports.getRoutes = getRoutes;
