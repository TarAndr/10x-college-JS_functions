function calculateDamage(base, crit) {
    return base * crit;
}

const healPotion = hp => hp + 50;

let myHealth = 100;

myHealth -= calculateDamage(20, 2); // Critical hit
console.log(`After taking damage, health is: ${myHealth}`);

myHealth = healPotion(myHealth);
console.log(`After using heal potion, health is: ${myHealth}`); 