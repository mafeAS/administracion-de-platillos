const controller= {};

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM administradordeplatos', (err,rows)=>{
            if(err){
                res.json(err);
            }
            res.render('administrador.ejs',{
                data:rows
            })
            
        })
    })

}


controller.save=(req,res)=>{
    const data=req.body

    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO administradordeplatos set ?',[data],(err,rows)=>{
            console.log(rows)
            res.redirect('/')
        })
    })


}

controller.delete=(req,res)=>{
   const{id}=req.params 

   req.getConnection((err,conn)=>{
    conn.query('DELETE FROM administradordeplatos WHERE id=?',[id],(err,rows)=>{
        res.redirect('/')


    })
   })
}


controller.edit=(req,res)=>{
    const{id}=req.params 
 
    req.getConnection((err,conn)=>{
     conn.query('SELECT * FROM administradordeplatos WHERE id=?',[id],(err,rows)=>{
         res.render('admin_edit.ejs',{
            data:rows[0]
         })
     })
    })
}

controller.newdata=(req,res)=>{
    const{id}=req.params
    const newAdministrador=req.body
    req.getConnection((err,conn)=>{
        conn.query('UPDATE administradordeplatos set ?',[newAdministrador,id],(err,rows)=>{
            res.redirect('/')
        })
    })

 }


module.exports=controller;