const fs = require('fs');
let colors = require('colors/safe');

let listarTabla = (base, limite) => {


    if (!Number(base) && !Number(limite)) {
        console.log('Los datos Ingresados no son Correctos');
        return;
    }

    console.log(colors.green('+++++++++++++++++++++++++'));
    console.log(colors.green(` tabla de ${base} `));
    console.log(colors.green('+++++++++++++++++++++++++'));

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}  \n`);

    }


}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject('Los Datos Ingresados No Son Correctos');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}  \n`;

        }




        fs.writeFile(`tablas/tabla_del_${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla_del_${base}.txt`);
        });

    })
}



module.exports = {
    crearArchivo,
    listarTabla
}