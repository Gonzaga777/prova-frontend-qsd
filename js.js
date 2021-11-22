let iptEmail = document.getElementById("email");
iptEmail.onblur = function() {
    var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let msgEmail = document.querySelector(".msg-email");
    let msgEmailOk = document.querySelector(".msg-email.ok");

    if (regexMail.test(iptEmail.value)) {
        msgEmail.style.display = "none";
        msgEmailOk.style.display = "block";
    } else {
        msgEmailOk.style.display = "none";
        msgEmail.style.display = "block";
    }
}
let iptCpf = document.getElementById("cpf");
iptCpf.onblur = function() {
    let regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let msgCpfError = document.querySelector(".msg-cpf.msg-error");
    let msgCpfOK = document.querySelector(".msg-cpf.msg-success");

    if (regexCpf.test(iptCpf.value)) {
        msgCpfError.style.display = "none";
        msgCpfOK.style.display = "block";
    } else {
        msgCpfOK.style.display = "none";
        msgCpfError.style.display = "block";
    }
}
let iptPassword = document.getElementById("password")
iptPassword.onblur = function () {
    let regexPassword = (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
}

let iptPassword = document.getElementById("password")
let iptPassword = document.getElementById("password2")
if (password == password2) {}
    alert("Senha Correta")
    else alert("Senha Incorreta , Digite novamente.")
}
let iptNumer = document.getElementById("numero");
iptNumer.onblur = function() {
    let regexNumber = regex = new Regex(@"^-?[0-9][0-9,\.]+$") ;
} 
