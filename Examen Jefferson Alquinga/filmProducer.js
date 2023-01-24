const fs = require("fs");
const readline = require('readline');

class FilmProducer {

    constructor(code,name,address,telephone,wholesaler) {
        this.code = code;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.wholesaler = wholesaler;
    }

    formatString(store){
        return store.code + "|" + store.name + "|" + store.address + "|" + store.telephone + "|" + store.wholesaler;
    }

    printResult(store){
        console.log("INFORMACIÓN OBTENIDA")
        console.log("Código:",store.code,"\nNombre de la Productora de Cine:",store.name,"\nDirección:",store.address,"\nTeléfono:",store.telephone,"\nDisponible:",store.wholesaler);
    }

    async existStore(codeStore){
        const arreglo = []
        const fileStream = fs.createReadStream('dataFilmProducer.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            const temporal = line.split("|")
            arreglo.push({
                code: temporal[0],
                name: temporal[1],
                address: temporal[2],
                telephone: temporal[3],
                wholesaler: temporal[4]
            })
        }

        return arreglo.some(
            (valorActual) => {
                return valorActual.code === codeStore.code;
            }
        );
    }

    addNewStore(storeString){
        return new Promise(
            (resolve, reject) => {
                fs.readFile(
                    'dataFilmProducer.txt',
                    "utf-8",
                    (error, contenido) =>{
                        if(error){
                            console.log("No se pudo leer el archivo.");
                        }else{
                            fs.writeFile(
                                'dataFilmProducer.txt',
                                contenido + '\n' + storeString,
                                "utf-8",
                                (error) =>{
                                    if(error){
                                        console.log("No pude escribir el archivo.");
                                    }else{
                                        resolve("Se ejecutó exitosamente la función.")
                                    }
                                }
                            );
                        }
                    }
                )
            }
        );
    }

    async showStoreByCode(codeStore) {
        const arreglo = []
        const fileStream = fs.createReadStream('dataFilmProducer.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            const temporal = line.split("|")
            arreglo.push({
                code: temporal[0],
                name: temporal[1],
                address: temporal[2],
                telephone: temporal[3],
                wholesaler: temporal[4]
            })
        }

        const respuestaFiltro = arreglo.filter(
            (valorActual) => {
                return valorActual.code === codeStore.code;
            }
        );

        if(respuestaFiltro[0] != null){
            this.printResult(respuestaFiltro[0])
        } else{
            console.log("No existe dicha Productora de Cine.")
        }
    }

    async deleteStore(codeStore) {
        const arreglo = []
        const fileStream = fs.createReadStream('dataFilmProducer.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            const temporal = line.split("|")
            arreglo.push({
                code: temporal[0],
                name: temporal[1],
                address: temporal[2],
                telephone: temporal[3],
                wholesaler: temporal[4]
            })
        }

        const respuestaFiltro = arreglo.filter(
            (valorActual) => {
                return valorActual.code !== codeStore.code;
            }
        );

        let data = "";
        if(respuestaFiltro.length !== arreglo.length){
            for(const store of respuestaFiltro){
                data = data + this.formatString(store) + "\n"
            }
            const operation = new Promise(
                (resolve, reject) => {
                    fs.writeFile(
                        'dataFilmProducer.txt',
                        data.slice(0,-1),
                        "utf-8",
                        (error) =>{
                            if(error){
                                console.log("No pude escribir el archivo.");
                            }else{
                                resolve("Se ejecutó exitosamente la función.")
                            }
                        }
                    );
                }
            )
        } else{
            console.log("No existe dicha Productora de Cine.")
        }
    }

    async updateStore(store){
        const arreglo = []
        const fileStream = fs.createReadStream('dataFilmProducer.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            const temporal = line.split("|")
            arreglo.push({
                code: temporal[0],
                name: temporal[1],
                address: temporal[2],
                telephone: temporal[3],
                wholesaler: temporal[4]
            })
        }

        const respuestaFiltro = arreglo.filter(
            (valorActual) => {
                return valorActual.code !== store.code;
            }
        );

        let data = "";
        if(respuestaFiltro.length !== arreglo.length){
            for(const store1 of respuestaFiltro){
                data = data + this.formatString(store1) + "\n"
            }
            const operation = new Promise(
                (resolve, reject) => {
                    fs.writeFile(
                        'dataFilmProducer.txt',
                        data + this.formatString(store),
                        "utf-8",
                        (error) =>{
                            if(error){
                                console.log("No pude escribir el archivo.");
                            }else{
                                resolve("Se ejecutó exitosamente la función.")
                            }
                        }
                    );
                }
            )
        } else{
            console.log("No existe dicha Productora de Cine.")
        }
    }

}


module.exports = FilmProducer;