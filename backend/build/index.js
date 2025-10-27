"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //Midleware que transforma el req.body a un JSON.
const PUERTO = 3000;
app.get('/ping', (_req, res) => {
    console.log('Un putito hizo ping');
    res.send('pong');
});
app.listen(PUERTO, () => {
    console.log(`El servidor se inicia en el puerto ${PUERTO}`);
});
//# sourceMappingURL=index.js.map