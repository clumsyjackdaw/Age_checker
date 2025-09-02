function iAmOver18Clicked() {
    document.getElementById("iAmOver18Screen").style.display = "none";
}

function selectAgeSetup() {
    const maxAge = 99
    let ageOrder = []

    for (let i = 0; i <= maxAge; i++) {
        ageOrder.push(i);
    }

    const ageContainer = document.getElementById("ageContainer");
    ageContainer.style.display = "grid";
    ageContainer.style.gridTemplateColumns = "repeat(10, 1fr)"
    ageContainer.style.gap = "8px 16px";

    ageOrder.forEach((age) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="choice" value="${age}"> ${age}`
        ageContainer.appendChild(label);
    })
}