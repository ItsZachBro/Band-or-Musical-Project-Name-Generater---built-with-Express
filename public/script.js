document.getElementById("nameGeneratorForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.getElementById("question3").value;
    const question4 = document.getElementById("question4").value;
    const question5 = document.getElementById("question5").value;

    const response = await fetch("/generate-name", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, question1, question2, question3, question4, question5 }),
    });

    const { wuTangClanName } = await response.json();

    //document.getElementById("userGivenName").innerText = userName;
    document.getElementById("generatedName").innerText = wuTangClanName;
});