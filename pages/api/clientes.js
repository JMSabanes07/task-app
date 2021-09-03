import Conectarbd from "/basededatos/db"



export default async function clientes(req,res){
    var datos = req.body
    if (req.method === "GET"){
        var resultado = await Conectarbd("SELECT * FROM clientes") 
        res.json(resultado)
    }else if(req.method==="POST"){
        var resultado = await Conectarbd(`INSERT INTO clientes(
            CL_NOMBRE,
            CL_DOCUMENTO,
            CL_CUIT,
            CL_DIREC,
            CL_TEL1,
            CL_TEL2,
            CL_TEL3,
            CL_ZONA,
            CL_CONDICION,
            CL_VENDEDOR,
            CL_FORMPAGO,
            CL_CIUDAD,
            CL_LIMITE,
            CL_LISTA,
            CL_TRANSPORTE,
            CL_OBSERV,
            CL_BAJA,
            CL_EMAIL,
            CL_FECHA_INGRESO,
            CL_EMPRESA,
            CL_BONIFI,
            CL_HABILITACTACTE,
            CL_WEB,
            CL_SUCURSAL,
            CL_SUBCLICOD
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                datos.NOMBRE,
                datos.DOCUMENTO,
                datos.CUIT,
                datos.DIREC,
                datos.TEL1,
                datos.TEL2,
                datos.TEL3,
                datos.ZONA,
                datos.CONDICION,
                datos.VENDEDOR,
                datos.FORMPAGO,
                datos.CIUDAD,
                datos.LIMITE,
                datos.LISTA,
                datos.TRANSPORTE,
                datos.OBSERV,
                datos.BAJA,
                datos.EMAIL,
                datos.FECHA_INGRESO,
                datos.EMPRESA,
                datos.BONIFI,
                datos.HABILITACTACTE,
                datos.WEB,
                datos.SUCURSAL,
                datos.SUBCLICOD
            ]) 
        res.json(resultado)
    }
}