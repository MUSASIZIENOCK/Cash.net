function registerUser() {
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    localStorage.setItem("balance", 0);

    alert("Account created!");
    window.location.href = "login.html";
}

function loginUser() {
    let phone = document.getElementById("loginPhone").value;
    let password = document.getElementById("loginPassword").value;

    if (phone === localStorage.getItem("phone") &&
        password === localStorage.getItem("password")) {

        window.location.href = "dashboard.html";
    } else {
        alert("Wrong phone or password");
    }
}

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    if (amount) {
        let balance = Number(localStorage.getItem("balance"));
        balance += Number(amount);
        localStorage.setItem("balance", balance);
        document.getElementById("balance").innerHTML = balance + " UGX";
    }
}

function withdraw() {
    alert("This is a learning demo — no real withdrawals.");
}
