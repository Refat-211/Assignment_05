

// function displayPlayerNames (){

//     if (playerNamesArray.length <= 5){

//         document.getElementById("selected-name").innerText = playerNamesArray.length;

//         const listContainer = document.getElementById("player-list");
//         listContainer.textContent = '';

//         for (let i = 0; i < playerNamesArray.length; i++) {

//         const tr = document.createElement("tr");
//         tr.innerHTML = `
//         <th>${i + 1}</th>
//         <td>${playerNamesArray[i].playerName}</td>
//         `;
//             listContainer.appendChild(tr);
//         }
//     }
   
//     else{
//     alert('You can be able to select maximum five players.');
// }

// }


// const playerNamesArray = [];

// function addToList(element) {
//     element.disabled = true;

//     const playerName = element.parentNode.parentNode.children[0].innerText;

//     playerNamesArray.push(playerName);

//     displayPlayerNames();
// }



const playerNamesArray = [];

function addToList(element) {

    element.disabled = true;
    
    const playerName = element.parentNode.parentNode.children[0].innerText;

    playerNamesArray.push(playerName);
    if (playerNamesArray.length <= 5) {

        document.getElementById("selected-name").innerText = playerNamesArray.length;

        const listContainer = document.getElementById("player-list");
        listContainer.textContent = '';

        for (let i = 0; i < playerNamesArray.length; i++) {

            const tr = document.createElement("tr");
            tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${playerNamesArray[i].playerName}</td>
        `;
            listContainer.appendChild(tr);
        }
    }

    else {
        alert('You can be able to select maximum five players.');
        element.disabled = false;
    }
    
}