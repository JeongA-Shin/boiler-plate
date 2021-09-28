const { User } = require('../models/User');

let auth = (req, res, next) => {
    //인증 처리를 하는곳 
    //클라이언트 쿠키에서 토큰을 가져온다.

    let token = req.cookies.x_auth;
    // 토큰을 복호화 한후  유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })
        req.token = token;
        req.user = user;
        next();
        //현재 index.js의 auth라우팅에서 auth는 미들웨어이므로 여기서
        //index.js 다음 단계로 빠져나가야 하므로 next()를 해준다.
    })
    //유저가 있으면 인증 오케이
    //유저가 없으면 인증 no!
}

module.exports = { auth };