
function openNav() { document.getElementById("mySidenav").style.width = "250px"; }
function closeNav() { document.getElementById("mySidenav").style.width = "0"; }
if (window.innerWidth > 1000) { $("#navbar").hide(); }
if (window.innerWidth < 1000) { $("#extended-navbar").hide(); }

const message = document.getElementById("message_mail")
const oggetto = document.getElementById("oggetto_mail")

const send = () => {
    window.open(`mailto:sofiariggi@libero.it?subject=${oggetto.value}&body=${message.value}`);
}

const cancel = () => {
    message.value= "";
    oggetto.value="";
}