const Router=require('koa-router')
const router=new Router();
const AdminModel=require('../models/admin')
router.get('/api',async ctx=>{
    var data=await AdminModel.find({});
    ctx.body=data
})
router.get('/admin',async ctx=>{
    var data=await AdminModel.find({})
    await ctx.render('index',{data})
})
router.get('/delete',async ctx=>{
    var {id}=ctx.query;
    await AdminModel.remove({_id:id})
    ctx.redirect('/admin')
})
router.get('/edit',async ctx=>{
    var item=ctx.query.item;
    var data=JSON.parse(item)
    await ctx.render('edit',{data})
})
router.post('/doEdit',async ctx=>{
    var {_id,name,age}=ctx.request.body;
    age=parseInt(age)
    await AdminModel.update({_id},{name,age})
    ctx.redirect('/admin')
})
router.get('/add',async ctx=>{
    await ctx.render('add')
})
router.post('/doAdd',async ctx=>{
    var {age,name}=ctx.request.body
    var data=new AdminModel({
        name,
        age:parseInt(age)
    })
    await data.save()
    ctx.redirect('/admin')
})
/* router.get('/find',async ctx=>{
    var item=ctx.query.item;
    var data=JSON.parse(item)
    await ctx.render('find',{data})
}) */
router.post('/find',async ctx=>{
    var data=await AdminModel.find({});
    ctx.body=data
})
module.exports=router