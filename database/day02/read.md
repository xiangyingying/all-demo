1.升序

```
db.goods.find({}).sort({condition:1})

db.goods.find({}).sort({price:1})
```

2.降序

```
db.goods.find({}).sort({condition:-1})

db.goods.find({}).sort({price:-1})
```

3.大于

```
&gt  大于某个数
db.goods.find({condition:{$gt:1000}})

&lt  小于某个数
db.goods.find({condition:{$lt:1000}})
```

```
大于
db.goods.find({price:{$gt:1000}})
小于
db.goods.find({price:{$lt:1000}})
大于等于
db.goods.find({price:{$gte:1000}})
小于等于
db.goods.find({price:{$lte:1000}})
在两个数之间
db.goods.find({price:{$gt:900,$lt:1100}})
```

```
//count()统计数据
db.goods.find({}).count();
```

