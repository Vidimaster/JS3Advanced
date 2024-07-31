
document.addEventListener("DOMContentLoaded", async () => {
    const ItmEL = document.getElementById('frm');

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            ItmEL.insertAdjacentHTML("beforeend", `
                    <p id=${i} onclick="showlist(${i});"><b>${localStorage.key(i)}</b></p>          
         `)
        }
    }
});

function showlist(i) {
    const ItmEL = document.getElementById(i);
    if (ItmEL.childNodes.length == 1) {
        let str = JSON.parse(localStorage.getItem(localStorage.key(i)));
        for (let index = 0; index < str.length; index++) {
            ItmEL.insertAdjacentHTML("beforeend", `
                            <p>${str[index]}</p>
                            <button id="del_${i}_${index}" onclick="deleteitm(${i}, ${index})">Удалить</button>
                 `)

        }
    }
}

function deleteitm(str, i) {
    let str_to_del = JSON.parse(localStorage.getItem(localStorage.key(str)));
    if (str_to_del.length > 1) {
        str_to_del.splice(i, 1);
        localStorage.setItem(localStorage.key(str), JSON.stringify(str_to_del));
        location.reload();
    }
    else {
        localStorage.removeItem(localStorage.key(str));
        location.reload();
    }

}