const User = require('../models/User');
exports.login = (req,res) =>{
  res.render('home');  
}
exports.loginAction = (req,res) =>{
  const auth = User.authenticate();
  auth(req.body.email, req.body.password, (error, result)=>{
    if(!result){
      req.flash('error','Email e/ou Senha estao errados');
      res.redirect('/');
      return
    } 
    req.login(result,()=>{
       
    })
    req.flash('success','Voce foi logado com sucesso!');
    res.redirect('/home/index')
  });
}
 
exports.signup = (req,res) =>{
  res.render('signup');
}
exports.signupAction = (req,res) =>{
const newUser = new User(req.body);
User.register(newUser,req.body.password,(error)=>{
  if(error){
    req.flash('error','Ocorreu um erro, tente mais tarde')
    res.redirect('/home/signup');
    return;
  }
  req.flash('success','Registro feito com sucesso. Faça o Login')
  res.redirect('/')
})
} 