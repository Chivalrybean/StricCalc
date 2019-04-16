function calc(damage, cool) {
    var x = damage * 600 / (cool - 1);
    var y = damage * 1.2 * 600 / (cool + 1);
    //return "Panic will output " + (damage * 600 / (cool - 1)) + "damage every 10 minutes where Hide will output" + (damage * 600 / (cool + 1)) + "every 10 minutes.";
    return "Panic will output " + x + " damage every 10 minutes (while allies under attack) where Hide will output " + y + " every 10 minutes.";
}
function press() {
    //let x = +document.getElementById("damageInput").innerText
    //let y = +document.getElementById("cooldownInput").innerText
    var resultString = calc(+document.getElementById("damageInput").value, +document.getElementById("cooldownInput").value);
    document.getElementById("result").innerText = resultString;
}
