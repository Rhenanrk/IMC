var wage = document.getElementById("pesoid");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        calcIMC(e);
    }
});

function calcIMC() {
    var imc = 0;

    var peso = parseInt(document.getElementById('pesoid').value, 10);
    var altura = parseFloat(document.getElementById('alturaid').value, 10);


    var imc = parseFloat((peso / (altura * altura)).toFixed(1));

    if (imc > 0 && imc< 20) {
        document.getElementById("alerta").innerHTML= "Você está abaixo do peso!";
        document.getElementById("txtrect").innerHTML=imc;
        document.getElementById("msg").innerHTML = "Magresa: menor que 20";
    }
    else if (imc >= 20 && imc < 30) {
        document.getElementById("alerta").innerHTML= "Você está com o peso normal!";
        document.getElementById("txtrect").innerHTML=imc;
        document.getElementById("msg").innerHTML = "Normal: entre 20 e 30";
    }

    else if (imc >= 30 && imc < 35) {
        document.getElementById("alerta").innerHTML= "Você está com sobrepeso";
        document.getElementById("txtrect").innerHTML=imc;
        document.getElementById("msg").innerHTML = "Sobrepeso: entre 30 e 35";
    }

    else if (imc > 35) {
        document.getElementById("alerta").innerHTML= "Você está com obesidade!";
        document.getElementById("txtrect").innerHTML=imc;
        document.getElementById("msg").innerHTML = "Obesidade: acima de 35";
    }
}