const express =require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');
const Blog = require('./models/blog');
const methodOverride = require('method-override');

app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname , 'public')));
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

connectDB();


app.get('/' , (req,res)=>{
    res.send('hello from index');
})


app.get('/blogs' , async(req,res)=>{

    const allBlogs = await Blog.findAll();

    // res.send('get all blogs');
    res.render('index.ejs' , {allBlogs});
})

app.get('/blogs/new' , (req,res)=>{
    res.render('new.ejs');
})


app.post('/blogs' , async (req,res)=>{
    // console.log(req.body);
    // res.send('post route');

    const {title,img,desc} = req.body;
    await Blog.create({title,img,desc});
    res.redirect('/blogs');
    
})

app.get('/blogs/:id' , async (req,res)=>{
    const {id} = req.params;

    const blog = await Blog.findOne({
        where:{
            id:id
        }
    });

    res.render('show.ejs' , {blog});
})


app.get('/blogs/:id/edit', async (req, res) => {
    const { id } = req.params;

    const blog = await Blog.findOne({
        where: {
            id: id
        }
    });

    res.render('edit', { blog });
});

app.patch('/blogs/:id', async (req, res) => {

    const { id } = req.params;

    await Blog.update(req.body, {
        where: {
            id: id
        }
    })

    res.redirect(`/blogs/${id}`);
});

app.delete('/blogs/:id', async (req, res) => {
    const { id } = req.params;

    await Blog.destroy({
        where: {
            id: id
        }
    });

    res.redirect('/blogs');
});



const port =4000;

app.listen(port , ()=>{
    console.log(`server connected at port ${port}`);
})

