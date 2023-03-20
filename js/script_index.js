function check_pass(){
    console.log(document.getElementById("pass").value);
    if(document.getElementById("pass").value == "kitud2023"){
        document.querySelector(".types_prices").classList.remove("invisible");
    }
}