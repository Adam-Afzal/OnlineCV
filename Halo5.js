
function find() {


    var playerGamertag = document.getElementById("gamertag").value;


    var reqURL = 'https://www.haloapi.com/profile/h5/profiles/'+playerGamertag+'/appearance';

    var request = new XMLHttpRequest();

    request.open('GET', reqURL);

    request.responseType = 'json';

    request.setRequestHeader("Ocp-Apim-Subscription-Key","YOUR API KEY HERE");

    request.send();

    request.onload = function () {

        var requestData = request.response;



var gt = JSON.stringify(requestData["Gamertag"]);

    var serviceTag = JSON.stringify(requestData["ServiceTag"]);

    var spartanCompany = JSON.stringify(requestData["Company"]);


            document.getElementById('gamertagFound').value = gt.replace(/"/g , "");
            document.getElementById('serviceTag').value = serviceTag.replace(/"/g , "");
            document.getElementById('spartanCompany').value = spartanCompany.replace(/"/g , "");



        console.log(requestData);
        }





    console.log("test");

}

function f() {

    console.log("test");

}