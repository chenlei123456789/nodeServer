const userMap = [
  {
    username: 'admin',
    email: 'admin@abc.com',
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员小eee',
    uid: '001'
  },
  {
    username: 'editor',
    email: 'editor@abc.com',
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '普通编辑小张',
    uid: '002'

  },
  {
    username: 'developer',
    email: 'developer@abc.com',
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '工程师小王',
    uid: '003'
  }
]
module.exports = {
  'POST /login/loginByEmail' (req, res) {
    const { email } = req.body
    let user = userMap.filter(item => item.username === email.split('@')[0])
    const now = new Date()
    now.setDate(now.getDate() + 1)
    if (user.length < 1) {
      return res.json({
        success: false,
        message: 'nono'
      })
    }
    user = user[0]
    const token = JSON.stringify({ uid: user.uid, deadline: now.getTime() })
    res.cookie('Token', token, {
      maxAge: 900000,
      httpOnly: true
    })
    user.token = token
    res.json({
      success: true,
      message: 'Ok',
      data: user
    })
    // const response = {}
    // response.data = userMap[[]]
    // res.json(userMap)
  }
}
