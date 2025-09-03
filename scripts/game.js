let selectedAge = 0

function iAmOver18Clicked() {
    document.getElementById("iAmOver18Screen").style.display = "none";
    document.getElementById("title-txt-img").style.display = "block";
    document.getElementById("selectAgeScreen").style.display = "block";
}

function selectAgeSetup() {
    const maxAge = 99
    let ageOrder = []

    for (let i = 0; i <= maxAge; i++) {
        ageOrder.push(i);
    }

    const ageContainer = document.getElementById("agesInHere");
    ageContainer.style.display = "grid";
    ageContainer.style.gridTemplateColumns = "repeat(10, 1fr)"

    for (let i = ageOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ageOrder[i], ageOrder[j]] = [ageOrder[j], ageOrder[i]];
    }

    ageOrder.forEach((age) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="selectedAge" value="${age}"> ${age}`
        label.style.backgroundColor = "#a1bfc7"
        ageContainer.appendChild(label);
    })
}

function selectAge() {
    if (!document.querySelector('input[name="selectedAge"]:checked')) {
        alert("Please select an age.");
        event.preventDefault();
    } else {
        selectedAge = parseInt(document.querySelector('input[name="selectedAge"]:checked').value);
        document.getElementById("selectAgeScreen").style.display = "none";
        document.getElementById("verificationRequiredScreen").style.display = "block";
    }
}

function continueAgeChecker() {
    document.getElementById("verificationRequiredScreen").style.display = "none";
}