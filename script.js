var tabla = new Array(12);
tabla[0] = new Array(2);
tabla[1] = new Array(2);
tabla[2] = new Array(2);
tabla[3] = new Array(2);
tabla[4] = new Array(2);
tabla[5] = new Array(2);
tabla[6] = new Array(2);
tabla[7] = new Array(2);
tabla[8] = new Array(2);
tabla[9] = new Array(2);
tabla[10] = new Array(2);
tabla[11] = new Array(2);

tabla[0][0] = "A";
tabla[0][1] = "42";

tabla[1][0] = "B";
tabla[1][1] = "30";

tabla[2][0] = "C";
tabla[2][1] = "90";

tabla[3][0] = "D";
tabla[3][1] = "12";

tabla[4][0] = "E";
tabla[4][1] = "34";

tabla[5][0] = "F";
tabla[5][1] = "56";

tabla[6][0] = "G";
tabla[6][1] = "78";

tabla[7][0] = "H";
tabla[7][1] = "90";

tabla[8][0] = "I";
tabla[8][1] = "01";

tabla[9][0] = "J";
tabla[9][1] = "23";

tabla[10][0] = "K";
tabla[10][1] = "45";

tabla[11][0] = "L";
tabla[11][1] = "67";

function buscar(){

    var x = 0;

    while(x < tabla.length){

        if(document.getElementById("letra").value == tabla[x][0]){
            document.getElementById("num").value = tabla[x][1];
            document.getElementById("no").innerHTML = "";
            x = 100;
        } else{
            x++
        }
    }

    if(x == tabla.length){
        document.getElementById("no").innerHTML = "Letra no encontrada, vuelva a escribirla.";
        document.getElementById("num").value = "";
    }

}

function borrar(){
    document.getElementById("no").innerHTML = "";
}






