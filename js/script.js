// js/script.js — ОБЩИЙ СКРИПТ ДЛЯ ВСЕХ СТРАНИЦ

// Получаем сохранённое имя
function getUserName() {
    return localStorage.getItem('userName') || 'любимая';
}

// Вставляем имя во все места с классом .insert-name
function insertNameIntoText() {
    const nameElements = document.querySelectorAll('.insert-name');
    const userName = getUserName();
    
    nameElements.forEach(el => {
        el.textContent = userName;
    });
}

// Запускаем, когда страница загрузится
document.addEventListener('DOMContentLoaded', insertNameIntoText);