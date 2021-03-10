module.exports.isLogged = (req,res,next) =>{
if(!req.isAuthenticated()){
  req.flash('error','Voce nao está logado!');
  res.redirect('/');
  return;
}
next()
};

module.exports.logged = (req,res,next) =>{
if(req.isAuthenticated()){
  req.flash('success','Voce está logado!');
  res.redirect('/home');
  return;
} 
next()
}