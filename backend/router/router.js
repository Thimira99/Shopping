import Router, { } from '@koa/router';

import { save, getCustomer, getAll } from '../api/api.js';

const postRouter = new Router({
    prefix: '/customer'
});

postRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

postRouter.get('/:id', (ctx) => {
    const id = ctx.params.id;
    ctx.body = getCustomer(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

postRouter.get('/', (ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

export default postRouter;

