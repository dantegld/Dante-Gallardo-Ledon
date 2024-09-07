document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navjs');

    hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
    });


    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("profit").classList.remove("verborgen");


        let manuPriceShirt = document.getElementById("shirt").value;
        let manuPriceHoody = document.getElementById("hoody").value;
        let shipping = document.getElementById("shipping").value;

        let sellPriceShirt = document.getElementById("shirtSell").value;
        let sellPriceHoody = document.getElementById("hoodySell").value;

        let shirtProfit = sellPriceShirt - manuPriceShirt;
        let hoodyProfit = sellPriceHoody - manuPriceHoody;

        let shirtProfitShipping = sellPriceShirt - manuPriceShirt - shipping;
        let hoodyProfitShipping = sellPriceHoody - manuPriceHoody - shipping;

        document.getElementById("shirtPrice").innerHTML = sellPriceShirt;
        document.getElementById("hoodyPrice").innerHTML = sellPriceHoody;

        document.getElementById("shirtProfitShipping").innerHTML = shirtProfitShipping;
        document.getElementById("hoodyProfitShipping").innerHTML = hoodyProfitShipping;

        document.getElementById("shirtProfit").innerHTML = shirtProfit;
        document.getElementById("hoodyProfit").innerHTML = hoodyProfit;

        let targetProfit = document.getElementById("targetProfit").value

        if(shirtProfit>targetProfit){
            document.getElementById("shirtProfitColor").classList.add("green");
        }else if(shirtProfit==targetProfit){
            document.getElementById("shirtProfitColor").classList.add("blue");
        }else if(shirtProfit<targetProfit){
            document.getElementById("shirtProfitColor").classList.add("red");
        }

        if(shirtProfitShipping>targetProfit){
            document.getElementById("shirtProfitShippingColor").classList.add("green");
        }else if(shirtProfitShipping==targetProfit){
            document.getElementById("shirtProfitShippingColor").classList.add("blue");
        }else if(shirtProfitShipping<targetProfit){
            document.getElementById("shirtProfitShippingColor").classList.add("red");
        }

        if(hoodyProfit>targetProfit){
            document.getElementById("hoodyProfitColor").classList.add("green");
        }else if(hoodyProfit==targetProfit){
            document.getElementById("hoodyProfitColor").classList.add("blue");
        }else if(hoodyProfit<targetProfit){
            document.getElementById("hoodyProfitColor").classList.add("red");
        }

        if(hoodyProfitShipping>targetProfit){
            document.getElementById("hoodyProfitShippingColor").classList.add("green");
        }else if(hoodyProfitShipping==targetProfit){
            document.getElementById("hoodyProfitShippingColor").classList.add("blue");
        }else if(hoodyProfitShipping<targetProfit){
            document.getElementById("hoodyProfitShippingColor").classList.add("red");
        }


    });




});