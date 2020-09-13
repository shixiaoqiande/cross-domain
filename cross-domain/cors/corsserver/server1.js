let express = require('express');
let app = express();
let whitelist =['http://localhost:3400']
app.use((req,res,next)=>{
    //*号无法携带cookie
    let origin = req.headers.origin;
    //设置哪个源可以访问我
    res.header('Access-Control-Allow-Origin',origin);
    //允许携带哪个头
    res.header('Access-Control-Allow-Headers','name')
    //允许哪个方法跨域
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
    //允许携带cookie
    res.header('Accesss-Control-Allow-Credentials',true)
    //预检测存活时间，单位是s
    res.header('Access-Control-Max-Age',6)
    //允许前端获取哪个头
    res.header('Access-Control-Expose-Headers','name')
    if(req.method==='OPITIONS'){
       res.end()//OPITIONS请求不做任何处理
    }
    next()
})
app.get('/data',(req,res)=>{
    res.send('200')
})
app.listen(4001,function(){
    console.log('4000启动成功')
})
