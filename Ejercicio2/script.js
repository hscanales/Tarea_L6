class convertor{
    constructor(){

    }

    convertir(cant,unidad1="",unidad2,tipo=""){
        var aux= 0;
        switch(tipo.toLowerCase()){
           case "t":
            switch(unidad1.toLowerCase()){
                case "m":
                    switch(unidad2.toLowerCase()){
                        case "cm":
                        aux= cant * 100;
                        break;
                        case "km":
                        aux= cant/100;
                        break;
                        case "ft":
                        aux= cant*3.28084;
                        break;
                        default:
                            console.log("Imposible de calcular");
                    }
                break;
                case "km":
                    switch (unidad2.toLowerCase()) {
                        case "m":
                            aux=cant/100;
                            break;
                        case "cm":
                            aux=cant/100;
                            aux=aux/100;
                        case "ft":
                            aux= cant/100;
                            aux= aux * 3.2804;
                    
                        default:
                        console.log("Imposible Calcular");
                            break;
                    }
                break;
                case "ft":
                    switch(unidad2.toLowerCase()){
                        case "m":
                        aux= cant * 0.3048;
                        break;
                        case "cm":
                        aux= cant* 0.3048;
                        aux = aux * 100;
                        break;
                        case "km":
                        aux= cant * 0.3048;
                        aux = aux/100;
                        break;
                        default:
                        console.log("imposible calcular");
                    }
                break;
                case "cm":
                    switch (unidad2.toLowerCase()) {
                        case "m":
                                aux=cant/100;
                            break;
                        case "km":
                            aux=cant/1000;
                            break;
                        case "ft":
                            aux=cant/100;
                            aux=aux*3.2804;
                            break;
                        default:
                        console.log("Imposible Calcular");
                            break;
                    }
                break;
            }
           break;
           case "l":
                switch(unidad1.toLowerCase()){
                    case "c":
                    switch(unidad2.toLowerCase()){
                        case "k":
                        aux= cant + 273.15;
                        break;
                        case "f":
                        aux = cant * 1.8 + 32;
                        break;
                    }
                    break;
                    case "k":
                    switch(unidad2.toLowerCase()){
                        case "c":
                        aux = cant - 273.15;
                        break;
                        case "f":
                        aux = cant * (9/5) - 459.67; 
                        break;
                    }
                    break;
                    case "f":
                    switch(unidad2.toLowerCase()){
                        case "c":
                            aux = (cant * 32)/1.8;
                        break;
                        case "k":
                        aux = (cant + 459.67) * 5/9;
                        break;
                        
                    }
                    break;
                }
           break;
        }
        return aux;
    }
}