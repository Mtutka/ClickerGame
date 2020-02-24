//VARIABLES
const monster = document.querySelector('.monster');
const DmgUp = document.querySelector('button');
const DpsUp = document.querySelector('.dpsButton');

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


const showMoney = document.querySelector('.money');
const showDamage = document.querySelector('.damage');
const showCost = document.querySelector('.DmgCost');
const showDpsCost = document.querySelector('.DpsCost');
const showHealth = document.querySelector('.health');
const showDps = document.querySelector('.dps');
const showMonsterCount = document.querySelector('.count');
const showExp = document.querySelector('.exp');

const dpsInterval = window.setInterval(dealDps, 1000);

//RUN DEFAULT VARIABLES
showDamage.textContent = `Damage:${damage}`;
showMoney.textContent = `Money:${money}`;
showCost.textContent = `Damage Cost:${DamageCost}`;
showHealth.textContent = `Health:${health}`;
showDps.textContent = `DPS:${dps}`;
showExp.textContent = `LVL:${lvl} exp:${exp}/${expNeeded}`;
showDpsCost.textContent = `DPS Cost:${DpsCost}`;
showMonsterCount.textContent = `Killed Monsters:${monsterCount}`;


//EXP
const lvlCount = function () {
    if (exp >= expNeeded) {
        lvl++;
        exp = 0;
        expNeeded *= expNeeded / 50;
        showExp.textContent = `LVL:${lvl} exp:${exp}/${expNeeded}`;
        expNeeded = Number(expNeeded.toFixed());
        dps = basicDps * ((lvl + 1) / 2);

        dps = Number(dps.toFixed());
        showDps.textContent = `DPS:${dps}`;

    }
}
//DO OGARNIĘCIA
// const dmgCount = function () {
//     dps = dps * lvl;
//     damage = damage * lvl
//     damage = Number(damage.toFixed());
//     dps = Number(dps.toFixed());
//     showDamage.textContent = `Damage:${damage}`;
//     showDps.textContent = `DPS:${dps}`;
// }
// window.addEventListener('mousemove', dmgCount())
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
//BOSS
//DO OGARNIĘCIA

// const bossMonster = () => {
//     if (monsterCount % 10 == 0 && monsterCount > 0) {
//         health = basichealth * 10;
//         console.log(health);
//     }
// }
// window.addEventListener('change', bossMonster())


//CLICK DAMAGE

monster.addEventListener('click', function () {

    health -= damage;
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

    }
    lvlCount();
    monsterSwitch()
    showExp.textContent = `LVL:${lvl} exp:${exp}/${expNeeded}`;
    showDamage.textContent = `Damage:${damage}`;
    showMoney.textContent = `Money:${money}`;
    showHealth.textContent = `Health:${health}`;
    showDps.textContent = `DPS:${dps}`;
    showDpsCost.textContent = `DPS Cost:${DpsCost}`;
    showMonsterCount.textContent = `Killed Monsters:${monsterCount}`;

    console.log(health, money)
})

DmgUp.addEventListener('click', function () {
    if (DamageCost <= money) {
        money -= DamageCost;
        damage += damage - damage / 3;
        DamageCost += DamageCost / 2;

        money = Number(money.toFixed());
        damage = Number(damage.toFixed());
        DamageCost = Number(DamageCost.toFixed());

    }

    showDamage.textContent = `Damage:${damage}`;
    showMoney.textContent = `Money:${money}`;
    showCost.textContent = `Damage Cost:${DamageCost}`;
    showDps.textContent = `DPS:${dps}`;


})

//DPS DAMAGE

function dealDps() {

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
    showDamage.textContent = `Damage:${damage}`;
    showMoney.textContent = `Money:${money}`;
    showCost.textContent = `Damage Cost:${DamageCost}`;
    showDps.textContent = `DPS:${dps}`;
    showHealth.textContent = `Health:${health}`;
    showMonsterCount.textContent = `Killed Monsters:${monsterCount}`;
    showExp.textContent = `LVL:${lvl} exp:${exp}/${expNeeded}`;
}

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

    showDamage.textContent = `Damage:${damage}`;
    showMoney.textContent = `Money:${money}`;
    showDps.textContent = `DPS:${dps}`;
    showDpsCost.textContent = `DPS Cost:${DpsCost}`;
})