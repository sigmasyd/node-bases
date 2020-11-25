const { rejects } = require('assert');
const fs = require('fs');

let listarTabla = (base,limite) => {
  console.log(base, limite);
}

let crearArchivo = (base) => {
  return new Promise((res,rej)=>{
    if(!Number(base)){
      rej(`La base [${base}] No es un numero`);
      return; // es necesario para cortar el proceso
    }
    let data = '';

    for(let i=1;i<=12;i++){
      data += `${base} * ${i} = ${base*i}\n`;
    }

    const file_name = `tabla-${base}.txt`;
    fs.writeFile(`tablas/${file_name}`,data,(err)=>{
      if(err) rej(err);
      else
        res(file_name);
      console.log(`El archivo ${file_name} ha sido creado`);
    });
  });
}
module.exports = {
  crearArchivo,
  listarTabla
}