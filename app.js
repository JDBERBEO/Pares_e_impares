const express = require('express')
const app = express()
const path = require ('path')
const hbs = require('express-handlebars')


//javascript
let array = []


    for (let i = 1; i<50; i++){
        if (i%2==0) {
            array[i] = i + " Soy Par!"
        }

        else {
            array[i] = i + " Soy Impar!"
        }
    }


//view engine setup

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'}))

app.set('view engine', '.hbs')

//routes

app.get('/', (req,res)=>{
    res.render('home', {
        arreglo: array
    })
})

app.listen(3000, ()=>console.log('listennig in port 3000'))