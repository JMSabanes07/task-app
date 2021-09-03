import mysql from "serverless-mysql"
//declarar variables
// var - variable publica
// let - variable privada

//declarar constantes
//const 

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    }
})

async function Conectarbd (query, valores){
    
    try{
        const results = await db.query(query, valores)
        console.log(results)
        return results
    }
    catch(error){
        return { error }
     }
}
export default Conectarbd 
