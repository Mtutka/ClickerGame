//VARIABLES

let lvl = 1;
let exp = 0;
let expNeeded = 100;
let basichealth = 10;
let health = 10;
let money = 0;
let damage = 1;
let DamageCost = 7;
let DpsCost = 20;
let monsterCount = 0;
let basicDps = 0;
let dps = basicDps * ((lvl + 1) / 2);
let crit = 10;

const monster = document.querySelector('.monster');
const DmgUp = document.querySelector('button');
const DpsUp = document.querySelector('.dpsButton');

const showMoney = document.querySelector('.money');
const showDamage = document.querySelector('.damage');
const showCost = document.querySelector('.DmgCost');
const showDpsCost = document.querySelector('.DpsCost');
const showHealth = document.querySelector('.health');
const showDps = document.querySelector('.dps');
const showMonsterCount = document.querySelector('.count');
const showExp = document.querySelector('.exp');
const critical = document.querySelector('.crit');


//RUN DEFAULT VARIABLES
const runDefault = () => {
    showDamage.textContent = `Damage:${damage}`;
    showMoney.textContent = `Money:${money}`;
    showCost.textContent = `Damage Cost:${DamageCost}`;
    showHealth.textContent = `Health:${health}`;
    showDps.textContent = `DPS:${dps}`;
    showExp.textContent = `LVL:${lvl} exp:${exp}/${expNeeded}`;
    showDpsCost.textContent = `DPS Cost:${DpsCost}`;
    showMonsterCount.textContent = `Killed Monsters:${monsterCount}`;
    critical.textContent = `Critical strike chance:${crit}%`;
}
runDefault();


//EXP
const lvlCount = function () {
    if (exp >= expNeeded) {
        lvl++;
        crit++;
        exp = 0;
        expNeeded *= expNeeded / 50;
        showExp.textContent = `LVL:${lvl} exp:${exp}/${expNeeded}`;
        expNeeded = Number(expNeeded.toFixed());
        dps = basicDps * ((lvl + 1) / 2);

        dps = Number(dps.toFixed());
        runDefault();

    }
}

//MONSTER COLOR

const monsterSwitch = () => {
    if (monsterCount % 10 == 0) {
        monster.classList.add('red')
    } else if (monsterCount % 2 == 0) {
        monster.classList.add('color')
        monster.classList.remove('red')

    } else {
        monster.classList.remove('color')
        monster.classList.remove('red')

    }
}

//CLICK DAMAGE
const clickDamage = () => {
    health -= damage;
    const strike = Math.floor(Math.random() * 100);
    console.log(strike);
    if (strike <= crit - 1) {
        health -= damage * 4;
    }
    if (health <= 0) {
        money += (5 + monsterCount * 1.5) * lvl;
        basichealth *= 1.31;
        health = basichealth;
        monsterCount++;
        exp += monsterCount;

        basichealth = Number(basichealth.toFixed());
        health = Number(health.toFixed());
        damage = Number(damage.toFixed());
        money = Number(money.toFixed());
        exp = Number(exp.toFixed());
        expNeeded = Number(expNeeded.toFixed());

        lvlCount();
        monsterSwitch();
        runDefault();
    }
}
monster.addEventListener('click', clickDamage);
window.addEventListener('keydown', (e) => {
    const key = e.code;
    if (key == 'Space') {
        clickDamage();
    }
});

DmgUp.addEventListener('click', function () {
    if (DamageCost <= money) {
        money -= DamageCost;
        damage += damage - damage / 3;
        DamageCost += DamageCost / 2;

        money = Number(money.toFixed());
        damage = Number(damage.toFixed());
        DamageCost = Number(DamageCost.toFixed());

    }
    runDefault();
})


//DPS DAMAGE

const dealDps = () => {

    health -= dps;
    if (health <= 0) {
        money += (5 + monsterCount * 1.5) * lvl;
        basichealth *= 1.31;
        health = basichealth;
        monsterCount++;
        exp += monsterCount;

        basichealth = Number(basichealth.toFixed());
        health = Number(health.toFixed());
        dps = Number(dps.toFixed());
        money = Number(money.toFixed());
        exp = Number(exp.toFixed());
        expNeeded = Number(expNeeded.toFixed());
    }

    lvlCount();
    monsterSwitch()
    runDefault();
}
const dpsInterval = window.setInterval(dealDps, 1000);

DpsUp.addEventListener('click', function () {
    if (DpsCost <= money) {
        money -= DpsCost;
        basicDps += 1 + basicDps / 1.2;
        DpsCost += DpsCost / 2;
        dps = basicDps * ((lvl + 1) / 2);


        basichealth = Number(basichealth.toFixed());
        health = Number(health.toFixed());
        money = Number(money.toFixed());
        damage = Number(damage.toFixed());
        DamageCost = Number(DamageCost.toFixed());
        DpsCost = Number(DpsCost.toFixed());
        basicDps = Number(dps.toFixed());
        dps = Number(dps.toFixed());
    }

    runDefault();
})






//BOSS
//DO OGARNIĘCIA

// const bossMonster = () => {
//     if (monsterCount % 10 == 0 && monsterCount > 0) {
//         health = basichealth * 10;
//         console.log(health);
//     }
// }
// window.addEventListener('change', bossMonster())

//DO OGARNIĘCIA
// const dmgCount = function () {
//     dps = dps * lvl;
//     damage = damage * lvl
//     damage = Number(damage.toFixed());
//     dps = Number(dps.toFixed());
//     showDamage.textContent = `Damage:${damage}`;
//     showDps.textContent = `DPS:${dps}`;
// }