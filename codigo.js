class Producto{
    constructor(tipoAlimento, delivery, precio){
    this.tipoAlimento = tipoAlimento;
    this.delivery = delivery;
    this.precio = parseFloat(precio); 
    }
    getPrecioConEnvio() {
        if(this.delivery == "hoy"){
            return this.precio + 3
        }else if(this.delivery == "normal"){
            return this.precio + 1
        }else{
            return 0;
        }
    }

    sumarIva(){
        return this.getPrecioConEnvio() * 1.21
     }
}

const carrito = []

const precios = {
  "pollo": 10,
  "huevos": 15,
  "milanesas": 20,
  "pelotas": 25
}

let comprar = prompt("Desea comprar algo?")

while (comprar != "no") {
    let productName = prompt("Ingresa el nombre del alimento que desea comprar: ")
    let product = new Producto(productName, "", precios[productName])
    let deliveryType = prompt("Ingrese el tipo de envio(para hoy o normal): ")
    product.delivery = deliveryType
    if (product.tipoAlimento == "pollo" && product.delivery == "hoy") {
      console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
      + product.getPrecioConEnvio())
    }if (product.tipoAlimento == "pollo" && product.delivery == "normal") {
        console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio())
    }if (product.tipoAlimento == "huevos" && product.delivery == "hoy") {
        console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio())
    }if (product.tipoAlimento == "huevos" && product.delivery == "normal") {
        console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio())
    }if (product.tipoAlimento == "milanesas" && product.delivery == "hoy") {
        console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio())
    }if (product.tipoAlimento == "milanesas" && product.delivery == "normal") {
        console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio())
    }if (product.tipoAlimento == "pelotas" && product.delivery == "hoy") {
        console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio())
    }if (product.tipoAlimento == "pelotas" && product.delivery == "normal") {
        console.log("Ha agregado al carrito " + product.tipoAlimento + " por un precio de: " + product.precio + " quedando con el envio: "
        + product.getPrecioConEnvio())
    }
        
    carrito.push(product)
    comprar = prompt("Desea comprar algo más?")
}