"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const categories = [];
const cursos = [];
app.get('/', (request, response) => {
    return response
        .json({
        status: 'success',
        version: '1.0.0',
    })
        .status(200);
});
app.get('/categories', (request, response) => {
    return response.json(categories).status(200);
});
app.post('/categories', (request, response) => {
    const data = request.body;
    const category = {
        id: categories.length + 1,
        name: data.name,
        created_at: '2022-10-10',
        updated_at: '2022-10-10',
    };
    categories.push(category);
    return response.json().status(200);
});
app.get('/categories/:id', (request, response) => {
    const id = request.params.id;
    const category = categories.find((item) => item.id == id);
    return response.json(category).status(200);
});
app.delete('/categories', (request, response) => {
    const data = request.body;
    const category = categories.find((item) => item.id == data.id);
    const index = categories.indexOf(category);
    categories.splice(index, 1);
    return response.json().status(200);
});
app.get('/cursos', (request, response) => {
    return response.json({ cursos }).status(200);
});
app.post('/cursos', (request, response) => {
    const data = request.body;
    const curso = {
        id: cursos.length + 1,
        name: data.name,
        created_at: '2022-10-10',
        updated_at: '2022-10-10',
    };
    cursos.push(curso);
    return response.json().status(200);
});
app.get('/cursos/:id', (request, response) => {
    const id = request.params.id;
    const category = categories.find((item) => item.id == id);
    return response.json(category).status(200);
});
app.delete('/cursos/:id', (request, response) => {
    const id = request.params;
    const category = categories.find((item) => item.id == id);
    const index = categories.indexOf(category);
    categories.splice(index, 1);
    return response.json().status(200);
});
app.listen(3000, () => {
    console.log('Server listening on port 3000000!');
});
//# sourceMappingURL=server.js.map