//db(모델과 스키마) 만들기
const mongoose=require('mongoose');//mongoose 모듈 가져오기
//스키마 생성 - 하나하나의 필드들을 작성함
const userSchema=mongoose.Schema({ //mongoose를 이용해서 스키마 생성하기
    //하나하나의 필드들을 작성함
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trime:true, //space를 없애주는 역할 예)Jeong A -> JeongA
        unique:1 //이메일이 중복되지 않도록
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image: String,
    token:{ //유효한지 검사
        type:String
    },
    tokenExp:{
        type:Number
    }
})

//모델 생성
const User=mongoose.model('User',userSchema) //(모델의 이름,해당 스키마)

//이 모델(스키마)를 다른 파일에서도 쓰고 싶을 때
module.exports={User}