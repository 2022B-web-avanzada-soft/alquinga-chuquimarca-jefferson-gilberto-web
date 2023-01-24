const fs = require("fs");
const readline = require("readline");

class Movie {

    constructor(code,name,price,size,stock,topSelling,filmProducerCode){
        this.code = code;
        this.name = name;
        this.price = price;
        this.size = size;
        this.stock = stock;
        this.topSelling = topSelling;
        this.storeCode = filmProducerCode;
    }

    formatString(clothing){
        return clothing.code + "|" + clothing.name + "|" + clothing.price + "|" + clothing.size + "|" + clothing.stock + "|" + clothing.topSelling + "|" + clothing.storeCode;
    }

    printResult(clothing){
        console.log("INFORMACIÓN OBTENIDA")
        console.log("Código:",clothing.code,"\nNombre:",clothing.name,"\nPrecio:",clothing.price,"\nCategoría:",clothing.size,"\nStock:",clothing.stock,"\n¿Top Ventas?",clothing.topSelling);
    }

    addNewClothing(clothingString){
        return new Promise(
            (resolve, reject) => {
                fs.readFile(
                    'dataMovie.txt',
                    "utf-8",
                    (error, contenido) =>{
                        if(error){
                            console.log("No se pudo leer el archivo.");
                        }else{
                            fs.writeFile(
                                'dataMovie.txt',
                                contenido + '\n' + clothingString,
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

    async showAllProducts(codeStore) {
        const arreglo = []
        const fileStream = fs.createReadStream('dataMovie.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            const temporal = line.split("|")
            arreglo.push({
                code: temporal[0],
                name: temporal[1],
                price: temporal[2],
                size: temporal[3],
                stock: temporal[4],
                topSelling: temporal[5],
                storeCode: temporal[6]
            })
        }

        const respuestaFiltro = arreglo.filter(
            (valorActual) => {
                return valorActual.storeCode === codeStore.code;
            }
        );

        if(respuestaFiltro.length !== 0){
            for(const clothing of respuestaFiltro){
                this.printResult(clothing)
            }
        } else{
            console.log("No existe dicha película para dicha productora de Cine.")
        }
    }

    async deleteClothing(codeClothing) {
        const arreglo = []
        const fileStream = fs.createReadStream('dataMovie.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            const temporal = line.split("|")
            arreglo.push({
                code: temporal[0],
                name: temporal[1],
                price: temporal[2],
                size: temporal[3],
                stock: temporal[4],
                topSelling: temporal[5],
                storeCode: temporal[6]
            })
        }

        const respuestaFiltro = arreglo.filter(
            (valorActual) => {
                return valorActual.code !== codeClothing.code;
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
                        'dataMovie.txt',
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
            console.log("No existe dicha película.")
        }
    }


    async updateStore(clothing){
        const arreglo = []
        const fileStream = fs.createReadStream('dataMovie.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            const temporal = line.split("|")
            arreglo.push({
                code: temporal[0],
                name: temporal[1],
                price: temporal[2],
                size: temporal[3],
                stock: temporal[4],
                topSelling: temporal[5],
                storeCode: temporal[6]
            })
        }

        const respuestaFiltro = arreglo.filter(
            (valorActual) => {
                return valorActual.code !== clothing.code;
            }
        );

        let data = "";
        if(respuestaFiltro.length !== arreglo.length){
            for(const clothingIn of respuestaFiltro){
                data = data + this.formatString(clothingIn) + "\n"
            }
            const operation = new Promise(
                (resolve, reject) => {
                    fs.writeFile(
                        'dataMovie.txt',
                        data + this.formatString(clothing),
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
            console.log("No existe dicha película.")
        }
    }


}
module.exports = Movie;