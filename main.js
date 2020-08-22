const $btn = document.getElementById('btn-kick');
const $btnUlt = document.getElementById('btn-ult');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    damage: {
        kick: 20,
        ult: 40,
    },
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    damage: {
        kick: 20,
        ult: 30,
    },
};

function init() {
    console.log('Start game');

    addClickEvent($btn, () => {
        console.log('Kick');

        changeHP(character, random(enemy.damage.kick));
        changeHP(enemy, random(character.damage.kick));
    });

    addClickEvent($btnUlt, () => {
        console.log('Ult');
        
        changeHP(enemy, random(character.damage.ult));
        changeHP(character, random(enemy.damage.ult));
    });
}

function addClickEvent(btn, callback) {
    btn.addEventListener('click', callback);
}

function renderHP(pokemon) {
    renderHPLife(pokemon);
    renderProgrssbarHP(pokemon);
}

function renderHPLife(pokemon) {
    pokemon.elHP.innerText = `${pokemon.damageHP} / ${pokemon.defaultHP}`;
}

function renderProgrssbarHP(pokemon) {
    pokemon.elProgressbar.style.width = `${pokemon.damageHP}%`;
}

function changeHP(pokemon, damage) {
    if (pokemon.damageHP < damage) {
        pokemon.damageHP = 0;
        showGameOverAlert(pokemon.name);
    } else {
        pokemon.damageHP -= damage;
    }
    renderHP(pokemon);
}

function showGameOverAlert(name) {
    alert(`Бедный ${name} проиграл бой!`);
    [$btn, $btnUlt].forEach(btn => btn.disabled = true);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();