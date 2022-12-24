import Router, { } from '@koa/router';

import { save, getAll } from '../api/apiTrader.js';

const traderRouter = new Router({
    prefix: '/trader'
});

traderRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    const post = save(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

traderRouter.get('/', (ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

export default traderRouter;

