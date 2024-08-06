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
        let storage_key = localStorage.getItem(document.getElementById('prod_title').value);
        let storage_val = document.getElementById('prod_title').value;
        if (storage_val === "") {
            storage_key = localStorage.getItem(document.getElementById('prod_title').placeholder);
            storage_val = document.getElementById('prod_title').placeholder;
        }
        else {
            storage_val = document.getElementById('prod_title').value;
        }

        if (storage_key != null) {
            let obj = JSON.parse(storage_key);

            obj.push(document.getElementById("review").value);


            localStorage.setItem(storage_val, JSON.stringify(obj));
        }
        else {
            let obj = [];
            obj.push(document.getElementById("review").value);
            localStorage.setItem(storage_val, JSON.stringify(obj));
        }

        location.reload();

    });

});