"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
/**
 * This is the "entry point" of the Skedulo function.
 * This usually does not need to be changed. Start writing your function
 * by defining a route in the `routes.ts` file.
 */
const pathToRegexp = require("path-to-regexp");
const routes_1 = require("./routes");
const routes = routes_1.getRoutes();
const compiledRoutes = routes.map(route => {
    const regex = pathToRegexp(route.path);
    return {
        regex,
        method: route.method,
        handler: route.handler
    };
});
exports.handler = async (payload) => {
    const start = Date.now();
    try {
        const { method, path, headers, body, querystring } = payload;
        const matchedRoute = compiledRoutes
            .filter(route => route.method === method.toLowerCase())
            .find(route => !!route.regex.exec(path));
        if (matchedRoute) {
            return await matchedRoute.handler(body, headers, method, path, querystring);
        }
        else {
            return {
                status: 404
            };
        }
    }
    catch (e) {
        console.error(e);
        return {
            status: 400,
            body: {
                error: e.message
            }
        };
    }
    finally {
        console.info(`${payload.method}: ${payload.path}: ${Date.now() - start}ms`);
    }
};
