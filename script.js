// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById('btn').addEventListener("click", function (e) {
        let temp = localStorage.getItem(document.getElementById('prod_title').value);
        let temp2 = document.getElementById('prod_title').value;
        if (temp2 === "") {
            temp = localStorage.getItem(document.getElementById('prod_title').placeholder);
            temp2 = document.getElementById('prod_title').placeholder;
        }
        else {
            temp2 = document.getElementById('prod_title').value;
        }

        if (temp != null) {
            let obj = JSON.parse(temp);

            obj.push(document.getElementById("review").value);


            localStorage.setItem(temp2, JSON.stringify(obj));
        }
        else {
            let obj = [];
            obj.push(document.getElementById("review").value);
            localStorage.setItem(temp2, JSON.stringify(obj));
        }

        location.reload();

    });

});