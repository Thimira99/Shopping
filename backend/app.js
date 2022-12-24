import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import postRouter from './router/router.js';
import storeRouter from './router/storeRouter.js';
import traderRouter from './router/traderRouter.js';
import 'dotenv/config';

import cors from 'koajs-cors';




const app = new koa();

app.use(bodyParser());

app.use(cors({
    origin: "*"
}));

app.use(postRouter.routes()).use(postRouter.allowedMethods());
app.use(storeRouter.routes()).use(storeRouter.allowedMethods());
app.use(traderRouter.routes()).use(traderRouter.allowedMethods());

app.use(ctx => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = "<h1>Hellow World</h1>";
})
console.log(process.env.PORT)
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000");
});