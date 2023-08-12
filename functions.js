// let array = ["valoare1", "valoare2", 3, 5];
// console.log(array);


//todo functie ce primeste ca parametru un an si returneaza numaruld de masini cu anul dupa ce-l introdus

// function returneazaMasiniDupaAn(an) {
//   let ct = 0;
//   for (let dat of data) {
//     if (dat.an > an) {
//       ct++;
//     }
//   }

//   return ct;
// }

//todo functie ce  returnezeaza pozitia din arr a unei masini  by model

// function returneazaIndex(model) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].model == model) {
//       return i;
//     }
//   }
//   return -1;
// }



//todo:functie load data to table

function attachCars() {
    let container = document.querySelector(".car-container");

    container.innerHTML = '';

    for (let i = 0; i < data.length; i++) {

        container.innerHTML += `
          <tr class="trow">
            <td scope="row">${data[i].marca}</td>
            <td>${data[i].model}</td> 
            <td>${data[i].an}</td>
            <td>${data[i].culoare}</td>
            <td class="actions-buttons">
            <button class="btn-delete ${data[i].marca}">
              
                delete
            </button>
            <button class="btn-edit  ${data[i].nume}"  >
            
                edit
            </button>
          </td>
          </tr>
`;
    }
}

function validareBtnAdd() {
    let btnAddEnabled = inptMarca.value.length > 0 &&
        inptModel.value.length > 0 &&
        inptAn.value.length > 0 &&
        inptCuloare.value.length > 0;

    console.log(`disabled: ${btnAddEnabled}`);
    if (btnAddEnabled) {
        document.querySelector('.add').disabled = false;
        document.querySelector('.add').classList.remove('redBtn');
        document.querySelector('.add').setAttribute('title', 'Adauga inregistrare');
    } else {
        document.querySelector('.add').disabled = true;
        document.querySelector('.add').classList.add('redBtn');
        document.querySelector('.add').setAttribute('title', 'Completati toate campurile!!!');
    }
}

function unicitateModel() {
    for (car of data) {
        if (inptModel.value == car.model) {
            result = 0;
        }
    }
    return 1;
}

function stergereByNume(marca) {

    let aux = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].marca !== marca) {

            aux.push(data[index]);

        }
    }

    data = [...aux];
}
// function sortTable(n) {
//   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//   table = document.querySelector(".car-container");
//   switching = true;
//   // Set the sorting direction to ascending:
//   dir = "asc";
//   /* Make a loop that will continue until
//   no switching has been done: */
//   while (switching) {
//     // Start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     console.log(`rowsLength: ${rows.length}`);
//     /* Loop through all table rows (except the
//     first, which contains table headers): */
//     for (i = 0; i < (rows.length - 1); i++) {
//       // Start by saying there should be no switching:
//       shouldSwitch = false;
//       /* Get the two elements you want to compare,
//       one from current row and one from the next: */
//       x = rows[i].getElementsByTagName("TD")[n];
//       y = rows[i + 1].getElementsByTagName("TD")[n];
//       /* Check if the two rows should switch place,
//       based on the direction, asc or desc: */
//       if (dir == "asc") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           // If so, mark as a switch and break the loop:

//           console.log(`switch ${x.innerHTML} <-> ${y.innerHTML}`)
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           // If so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//       and mark that a switch has been done: */
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       // Each time a switch is done, increase this count by 1:
//       switchcount ++;
//     } else {
//       /* If no switching has been done AND the direction is "asc",
//       set the direction to "desc" and run the while loop again. */
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }

// function Filtrare() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById(".car-container");
//   tr = table.querySelector(".trow");

//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }

// }