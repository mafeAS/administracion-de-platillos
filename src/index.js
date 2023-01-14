const express= require('express')
const morgan =require('morgan')
const app=express()
const path=require('path')
const mysql=require('mysql')
const myconnection=require('express-myconnection')


//----------importando rutas-------------------------------
const administradorRouter=require('./routes/administrador')

//--------------CREAR APP: en esta seccion podre realizar las configuraciones del puerto, los motores de plantillas a usar, entre otro-------------------------
app.set('port', process.env.PORT||3005)
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

//---------MIDDLEWARES: son funciones que se ejecutan antes de que vengan las peticiones de los usuarios------------
app.set(morgan('dev'))
app.use(myconnection(mysql,{
    host:'localhost',
    user:'root',
    password:'20001219',
    port:3306,
    database:'administradordeplatos'

},'single'))
app.use(express.urlencoded({extended:false}))

//-------------router----------------------------------------------------------
app.use('/',administradorRouter)

//------------dejamos configurado el public----------------------------
app.use(express.static(path.join(__dirname,'public')))

//----------EMPEZAR SERVIDOR----------------------
app.listen(app.get('port'),()=>{
    console.log('escuchando puerto 3005')
})