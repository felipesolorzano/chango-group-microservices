"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
require("reflect-metadata");
const standalone_1 = require("@adonisjs/core/build/standalone");
const s12r_1 = __importDefault(require("@satheler/s12r"));
process.on('unhandledRejection', (reason) => {
    console.error(reason);
});
process.on('uncaughtException', (reason) => {
    console.error(reason);
});
let server;
async function bootstrapServer() {
    const ignitor = new standalone_1.Ignitor(__dirname);
    const httpServer = ignitor.httpServer();
    await httpServer.application.setup();
    await httpServer.application.registerProviders();
    await httpServer.application.bootProviders();
    await httpServer.application.requirePreloads();
    const serverCore = httpServer.application.container.use('Adonis/Core/Server');
    serverCore.errorHandler('App/Exceptions/Handler');
    serverCore.optimize();
    const server = serverCore.handle.bind(serverCore);
    return server;
}
const handle = async (...args) => {
    if (!server) {
        server = await bootstrapServer();
    }
    const { request, response } = (0, s12r_1.default)(args);
    return server(request, response);
};
exports.handle = handle;
//# sourceMappingURL=lambda.js.map