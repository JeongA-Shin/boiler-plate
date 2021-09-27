const express = require('express') //express 모듈을 가져옴
const app = express() //express()를 이용해서 새로운 express앱을 만듦
const port = 8080 //5000번 port를 백서버로 둠. 이 때 포트 번호는 마음대로


const mongoose=require('mongoose') //mongoose 모듈 가져오기
mongoose.connect('mongodb+srv://jeong:abcd1234@youtube-clone.wh39w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
}).then(()=>console.log('MongoDB connected...')) //연결되었을 경우: then:연결되었는지 확인해줌
  .catch(err=>console.log(err)) //연결에 실패했을 경우 에러 보여줌


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})