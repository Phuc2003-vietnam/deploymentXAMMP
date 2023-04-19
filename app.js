const express=require('express');
const app=express();
const mysql = require('mysql')
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'sManager',
    password        : 'thien226',
    database        : 'cafe',
    port            : 3306
})

app.get('/',(req,res)=>{
    pool.getConnection((err, connection)=>{
        connection.query('SELECT * from doan', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from beer table are: \n', rows)
        })
    })
})
app.listen('3000',()=>{
    console.log('fuck y2ou');
  })