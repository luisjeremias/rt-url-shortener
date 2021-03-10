const {nanoid} = require('nanoid');
const Link = require('../models/Link');
exports.index = async(req,res) =>{
  res.render('index')
}
exports.indexAction = async(req,res)=>{
  let author = req.body.author;
  author = req.user._id;
  let {url, slug} = req.body;
 if(!slug){
  slug = nanoid(5);
 }else{
   const existing = await Link.findOne({ slug});
   if(existing){
     req.flash('error','Novo Link Ja esta Sendo Usado!')
     res.redirect('/home/index')
   }
 }
 slug = slug.toLowerCase();
 
 const newLink = {
   url,
   slug,
   author
};
const link = new Link(newLink);
try{
  await link.save();
 
}
catch(error){
 req.flash('error',`Error: ${error.message}`);
    return res.redirect('/home/index');
} 
req.flash('info',`Seu Link: http://localhost:5555/${link.slug}`)
res.redirect('/home/index')
 
}

exports.indexView = async(req,res) =>{
  const { id: slug } = req.params;
  if(slug == 'home'){
   return;
  }
  try{
    const url = await Link.findOne({slug});
    if(url){
      res.redirect(url.url)
    }
    
    res.redirect(`/home/notfound`)
  }
  catch(error){
    res.redirect(`/home/notfound`)
    console.log(error)
  }
}

exports.profile = async(req,res) =>{
 const url = await Link.findOne({author: req.params.id})

res.render('profile',{url})
}

exports.notfound = (req,res) =>{
res.render('notfound')
}