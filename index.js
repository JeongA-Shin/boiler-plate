const express = require('express') //express 모듈을 가져옴
const app = express() //express()를 이용해서 새로운 express앱을 만듦
const port = 8080 //5000번 port를 백서버로 둠. 이 때 포트 번호는 마음대로
//models/User.js에서 만들었던 model인 User을 쓰기 위해 불러옴
const {User}=require("./models/User");
const bodyParser=require('body-parser');

const config=require('./config/key');


//가져온 bodyParser 모듈에 옵션 주기
//수업시간의 방식 - 최근에는 express 업데이트에서 bodyParser를 더 이상 가져오지 않아도 됨
//app.use(bodyParser.urlencoded({extended:true}));
//app.user(bodyParser.json());
//최근 쓰는 방식- 그냥 express로 바로 해도 됨
//application/x-www-form-urlencoded 형식의 데이터를 분석할 수 있도록 함
app.use(express.urlencoded({extended:true}))
//application/json 형식의 데이터를 분석할 수 있도록 함
app.use(express.json());

const mongoose=require('mongoose') //mongoose 모듈 가져오기
mongoose.connect(config.mongoURI).then(()=>console.log('MongoDB connected...')) //연결되었을 경우: then:연결되었는지 확인해줌
                                 .catch(err=>console.log(err)) //연결에 실패했을 경우 에러 보여줌


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//라우팅하기
//회원가입 기능
//메서드는 post를 이용
//콜백 함수는 (req,res)=>...
app.post('/register',(req,res)=>{

  //회원가입시 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user= new User(req.body) //새로운 인스턴스 만들기
  user.save((err,doc)=>{
    if(err) return res.json({success:false,err}) //만약 에러가 있다면 client에게 json형태로 에러를 전달해줌
    return res.status(200).json({ //성공시엔 200은 성공
      success:true
    })
  }) //.save():mongoDB의 메서드, (err,doc)=>: 콜백함수
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})