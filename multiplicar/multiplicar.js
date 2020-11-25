const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite=10) => {
  console.log('================================'.green);
  console.log(`========tabla de ${base}========`.green);
  console.log('================================'.green);
  console.log(base, limite);
  for(let i=1;i<=limite;i++){
    console.log(`${base} * ${i} = ${base*i}`);
  }
}

let crearArchivo = (base,limite=12) => {
  return new Promise((res,rej)=>{
    if(!Number(base)){
      rej(`La base [${base}] No es un numero`);
      return; // es necesario para cortar el proceso
    }
    let data = '';

    for(let i=1;i<=limite;i++){
      data += `${base} * ${i} = ${base*i}\n`;
    }

    const file_name = `tabla-${base}x${limite}.txt`;
    fs.writeFile(`tablas/${file_name}`,data,(err)=>{
      if(err) rej(err);
      else
        res(file_name);
      console.log(`El archivo ${file_name} ha sido creado`.red);
    });
  });
}
module.exports = {
  crearArchivo,
  listarTabla
}