let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(4000,()=>{
  console.log('服务器2启动成功')
})
