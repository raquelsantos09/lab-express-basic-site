const { response } = require ('express')
const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')

const port = 3001
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(expressLayouts)

//connects to the public folder
app.use(express.static('public'))

//request and responde: making routes
//app.get('/about', (req, res) => {
  //  res.send("yes,it worked");
//})


app.get('/', (req, res) => {
  console.log(req.url)
 // res.sendFile(__dirname + '/views/index.html')
 res.render('index')
})

app.get('/about', (req, res) => {
  console.log(req.url)
  //res.sendFile(__dirname + '/views/about.html')
  res.render('about')
})

app.get('/photogallery', (req, res) => {
  console.log(req.url)
 // res.sendFile(__dirname + '/views/photogallery.html')
 res.render('photogallery')
})

app.get('/works', (req, res) => {
    console.log(req.url)
   // res.sendFile(__dirname + '/views/works.html')
   res.render('works')
  })
  

//app.listen(port, () => {
 // console.log(`Example app listening on port ${port}`)
//})

app.listen(3001, () => {
    console.log("now listening");
});