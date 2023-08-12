attachCars();

let inptMarca = document.querySelector("#marca");
let inptModel = document.querySelector("#model");
let inptAn = document.querySelector("#an");
let inptCuloare = document.querySelector("#culoare");
let inptAdd = document.querySelector(".add");

inptAdd.addEventListener("click", () => {
    if (inptMarca.value.length < 3) {
        alert('Marca tre sa aiba minim 3 caractere');
        return;
    }

    if (inptModel.value.length < 3) {
        alert('Modelul trebuie sa aiba 3 caractere');
        return;
    }

    if (isNaN(inptAn.value) || inptAn.value > 2023 || inptAn.value < 1920) {
        alert("Anul este gresit");
        return;
    }

    let car = {
        marca: inptMarca.value,
        model: inptModel.value,
        an: inptAn.value,
        culoare: inptCuloare.value,
    };

    if (unicitateModel() == 0) {
        alert("Modelul este duplicat!!!!")
        return;
    }


    data.push(car);

    inptMarca.value = '';
    inptModel.value = '';
    inptAn.value = '';
    inptCuloare.value = '';

    attachCars();

});

let eventName = 'keyup';
inptMarca.addEventListener(eventName, validareBtnAdd);
inptModel.addEventListener(eventName, validareBtnAdd);
inptAn.addEventListener(eventName, validareBtnAdd);
inptCuloare.addEventListener(eventName, validareBtnAdd);

let tableContainer = document.querySelector(".car-container");

tableContainer.addEventListener("click", (e) => {
    let obj = e.target;
    if (obj.classList.contains("btn-delete")) {
        // let classList = obj.classList;
        console.log(obj);
        // stergereByNume(classList[1]);
        // attachCars();
    }
});






//todo:conditiile de existenta pentru fiecare fild 
//sa nu poata apasa userul butonul de add daca nu sunt indeplinite toate conditiile
//-->unicitate  pe model
//-->an number 
//-->an <= an curent
//toate fieldurile trebuiesc completate
//-->sa fie cel putin 3 caractere marca si modelul

//todo:add butoane de filtrare si sortare