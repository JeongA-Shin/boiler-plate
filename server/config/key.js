//현재 development환경인지(로컬에서 개발하고 있는건지)
//deploy(배포)한 후 producton 모드인지 확인
if(process.env.NODE_ENV === 'production'){ //===:엄격하게 같다
    module.exports=require('./prod'); //config의 prod.js에서 가져옴
}else{
    module.exports=require('./dev');//config의 dev.js에서 가져옴
}