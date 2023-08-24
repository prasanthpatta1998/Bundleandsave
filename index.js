document.addEventListener("DOMContentLoaded", () => {
    let total = 0;
    let pairOne = document.getElementById("pair-one");
    let totalValue = document.getElementById("totalValue");
    let pairTwo = document.getElementById("pair-two");
    let pairThree = document.getElementById("pair-three");

    pairOne.addEventListener("change", () => {
        if (pairOne.checked) {
            total = 0
            total += parseFloat(pairOne.value);
            pairThree.checked = false
            pairTwo.checked = false
            totalValue.textContent = total.toFixed(2);
        } 
        console.log(total)
    });
    pairTwo.addEventListener("change", () => {
        if (pairTwo.checked) {
            total = 0
            total += parseFloat(pairTwo.value);
            pairOne.checked = false
            pairThree.checked = false
            totalValue.textContent = total.toFixed(2);
        } 
        console.log(total)
    });
    pairThree.addEventListener("change", () => {
        if (pairThree.checked) {
            total = 0
            total += parseFloat(pairThree.value);
            pairOne.checked = false
            pairTwo.checked = false
            totalValue.textContent = total.toFixed(2);
        } 
        console.log(total)
    });
});