import Router, { } from '@koa/router';

import { getAll, save, update, getById } from '../api/stock.js';

const storeRouter = new Router({
    prefix: '/store'
});

storeRouter.get('/', (ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

storeRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

storeRouter.put('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

storeRouter.get('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body = getById(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 200;

});

export default storeRouter;