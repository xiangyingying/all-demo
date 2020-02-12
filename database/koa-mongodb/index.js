const router=require('./routers')
const Koa=require('koa')
const app=new Koa();
const render=require('koa-art-template')
const path=require('path')
const bodyParser=require('koa-bodyparser')
render(app, {
    root:path.join(__dirname,'views'),
    extname:'.html',
    debug:process.env.NODE_ENV!=='production'
});
app.use(bodyParser())
app.use(router.routes())
app.listen(8080)