const inquirer = require("inquirer");
const filmProducer = require("./filmProducer");
const movie = require("./movie");

const main = async () => {
    let flag = true
    while (flag === true){
        const result = await menu()
        if (result === false){
            flag = result;
        }
    }
};

async function menu(){
    let result = true;
    try{
        // Show Options
        const option = await inquirer.prompt({
            type: 'list',
            name: 'optionSelected',
            message: '¿Qué acción deseas hacer?',
            choices:[
                { name: '1) Crear un nuevo registro de Productora de Cine de peliculas', value: 1 },
                { name: '2) Actualizar un registro de Productora de Cine Existente', value: 2 },
                { name: '3) Visualizar un registro de Productora de Cine Existente', value: 3 },
                { name: '4) Eliminar un registro de Productora de Cine Existente', value: 4 },
                { name: '5) Crear un nuevo registro de Película en una Productora de Cine', value: 5 },
                { name: '6) Actualizar un registro de Película Existente en una Productora de Cine', value: 6 },
                { name: '7) Visualizar Película Existente en una Productora de Cine', value: 7 },
                { name: '8) Eliminar un registro de Película Existente en una Productora de Cine', value: 8 },
                { name: '9) Salir del sistema', value: 9 }
            ]
        })
        // Create a object
        let obj = new filmProducer("01","prueba","xyz","3813152",false)
        let obj1 = new movie("01","prueba", 0.0, "XL",1,true,"001");

        // Work with options
        switch (option.optionSelected){
            case 1:
                // Ask information
                const informationCreateStore = await inquirer.prompt(
                    [{ type: "input", name: "code", message: "Código:" },
                    { type: "input", name: "name", message: "Nombre:" },
                    { type: "input", name: "address", message: "Dirección:" },
                    { type: "input", name: "telephone", message: "Teléfono:" },
                    { type: "list", name: "wholesaler", message: "Mayorista:", choices: ["true", "false"] }]
                    )
                //Create object and save
                const store = new filmProducer(informationCreateStore.code, informationCreateStore.name, informationCreateStore.address, informationCreateStore.telephone, informationCreateStore.wholesaler);
                await store.addNewStore(store.formatString(store));
                break
            case 2:
                // Ask information
                const informationUpdateStore = await inquirer.prompt(
                    [{ type: "input", name: "code", message: "Código:" },
                        { type: "input", name: "name", message: "Nombre:" },
                        { type: "input", name: "address", message: "Dirección:" },
                        { type: "input", name: "telephone", message: "Teléfono:" },
                        { type: "list", name: "wholesaler", message: "Mayorista:", choices: ["true", "false"] }]
                )
                //Update information
                const storeUpdate = new filmProducer(informationUpdateStore.code, informationUpdateStore.name, informationUpdateStore.address, informationUpdateStore.telephone, informationUpdateStore.wholesaler);
                await obj.updateStore(storeUpdate);
                break
            case 3:
                // Ask information
                const informationSearchStore = await inquirer.prompt(
                    { type: "input", name: "code", message: "Código:" }
                )
                //Searcho information
                await obj.showStoreByCode(informationSearchStore);
                break
            case 4:
                // Ask information
                const informationDeleteStore = await inquirer.prompt(
                    { type: "input", name: "code", message: "Código:" }
                )
                //Delete
                await obj.deleteStore(informationDeleteStore);
                break
            case 5:
                // Ask information
                const informationCreateClothing = await inquirer.prompt(
                    { type: "input", name: "code", message: "Código de la Productora de Cine:" }
                )
                if(await obj.existStore(informationCreateClothing)){
                    console.log("Información de la Película ");
                    const informationCreateClothing1 = await inquirer.prompt(
                        [{ type: "input", name: "code", message: "Código:" },
                        { type: "input", name: "name", message: "Nombre:" },
                        { type: "input", name: "price", message: "Precio:" },
                        { type: "list", name: "size", message: "Categoría:" , choices: ["Terror", "Aventura", "Drama"]},
                        { type: "input", name: "stock", message: "Stock:" },
                        { type: "list", name: "topSelling", message: "¿Top Ventas?:", choices: ["true", "false"] }]
                    )
                    //Create object and save
                    const clothing = new movie(informationCreateClothing1.code, informationCreateClothing1.name, informationCreateClothing1.price, informationCreateClothing1.size
                        , informationCreateClothing1.stock, informationCreateClothing1.topSelling, informationCreateClothing.code);
                    await clothing.addNewClothing(clothing.formatString(clothing));
                }else{
                    console.log("La Productora de Cine buscada no existe.")
                }
                break
            case 6:
                // Ask information
                const informationUpdateClothing = await inquirer.prompt(
                    { type: "input", name: "code", message: "Código de Productora de Cine:" }
                )
                if(await obj.existStore(informationUpdateClothing)){
                    console.log("Información de la Película ");
                    const informationUpdateClothing1 = await inquirer.prompt(
                        [{ type: "input", name: "code", message: "Código:" },
                            { type: "input", name: "name", message: "Nombre:" },
                            { type: "input", name: "price", message: "Precio:" },
                            { type: "list", name: "size", message: "Categoría:" , choices: ["Terrro", "Aventura", "Drama"]},
                            { type: "input", name: "stock", message: "Stock:" },
                            { type: "list", name: "topSelling", message: "¿Top Ventas?:", choices: ["true", "false"] }]
                    )
                    //Create object and save
                    const clothing = new movie(informationUpdateClothing1.code, informationUpdateClothing1.name, informationUpdateClothing1.price, informationUpdateClothing1.size, informationUpdateClothing1.stock, informationUpdateClothing1.topSelling, informationUpdateClothing.code);
                    await obj1.updateStore(clothing);

                }else{
                    console.log("La Productora de Cine buscada no existe.")
                }
                break
            case 7:
                // Ask information
                const informationSearchClothing = await inquirer.prompt(
                    { type: "input", name: "code", message: "Código de la Productora de Cine:" }
                )
                if(await obj.existStore(informationSearchClothing)){
                    //Make search
                    await obj1.showAllProducts(informationSearchClothing);
                }else{
                    console.log("La Productora de Cine buscada no existe.")
                }
                break
            case 8:
                // Ask information
                const informationDeleteClothing = await inquirer.prompt(
                    { type: "input", name: "code", message: "Código de la Productora de Cine:" }
                )
                if(await obj.existStore(informationDeleteClothing)){
                    // Ask information
                    const informationDeleteClothing1 = await inquirer.prompt(
                        { type: "input", name: "code", message: "Código de la Película:" }
                    )
                    //Delete
                    await obj1.deleteClothing(informationDeleteClothing1);
                }else{
                    console.log("La Productora de Cine buscada no existe.")
                }

                break
            case 9:
                console.log("¡GRACIAS!")
                result = false
                break
        }

    } catch (err){
        console.error(err)
    }
    return result
}


main()