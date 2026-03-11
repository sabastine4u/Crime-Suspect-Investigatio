

const locations = [
    "market", "church", "office", "mall", "gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", "market", "office", "mall", "eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", "eatery", "gym", "bank", "saloon", "airport", "gym", "eatery"
];
const onlyName = document.getElementById("places");
const trigger = document.getElementById("btn");
const pTag = document.getElementById("summaryText");

function returnFrequency(item, element) {
    let count = 0;
    for (let x = 0; x < item.length; x++) {
        if (item[x].toLowerCase() === element.toLowerCase()) {
            count++;
        }
    }
    return count;
}
//   TRIGGER BUTTON CALLING THE FUCNTION AND ACTION ONCE YOU "CLICK CHECK"
trigger.addEventListener("click", () => {
    const place = onlyName.value;
    if(place ===""){
        pTag.textContent = " Enter the Location. ";
        return;
    }

    const result = returnFrequency(locations, place);
    pTag.textContent = place + " was visited " + result + " times. ";
    console.log(place + " was visited " + result + " times. " );
});





