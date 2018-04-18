console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    displayMonsters();
}

function displayMonsters() {
    $.ajax({
        type: 'GET',
        url: '/monsters'
    })
        .then(function (response) {
            response.forEach((monster) => {
                $('#monsterList').append(`<li>${monster}</li>`);
            });
        });
}