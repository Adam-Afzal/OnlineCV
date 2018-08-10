
function find() {


    var playerGamertag = document.getElementById("gamertag").value;


    var reqURL = 'https://www.haloapi.com/profile/h5/profiles/'+playerGamertag+'/appearance';

    var request = new XMLHttpRequest();

    request.open('GET', reqURL);

    request.responseType = 'json';

    request.setRequestHeader("Ocp-Apim-Subscription-Key","10f7528a35344361a4109b037adb67b0");

    request.send();

    request.onload = function () {


        var requestData = request.response;



var gt = JSON.stringify(requestData["Gamertag"]);

    var serviceTag = JSON.stringify(requestData["ServiceTag"]);

    var spartanCompany = JSON.stringify(requestData["Company"]["Name"]);


            document.getElementById('gamertagFound').value = gt.replace(/"/g , "");
            document.getElementById('serviceTag').value = serviceTag.replace(/"/g , "");
            document.getElementById('spartanCompany').value = spartanCompany.replace(/"/g , "");



        console.log(requestData);

        findCompany(requestData["Company"]["Id"]);
        }







    console.log("test");

}

function findCompany(id) {

    var companyURL =  'https://www.haloapi.com/stats/h5/companies/'+id.replace(/"/g , "");

    var requestCompany = new XMLHttpRequest();

    requestCompany.open('GET', companyURL);

    requestCompany.responseType = 'json';

    requestCompany.setRequestHeader("Ocp-Apim-Subscription-Key","10f7528a35344361a4109b037adb67b0");

    requestCompany.send();


    requestCompany.onload = function () {


        var companyRequest = requestCompany.response;

        document.getElementById('companyName').value = JSON.stringify(companyRequest["Name"]).replace(/"/g , "");
        document.getElementById('creatorTag').value = JSON.stringify(companyRequest["Creator"]["Gamertag"]).replace(/"/g , "");

        for(var x = 0;x<companyRequest["Members"].length;x++){

            var x = document.getElementById("players");
            var option = document.createElement("option");
            option.text = JSON.stringify(requestCompany["Members"][x]["Gamertag"]).replace(/"/g , "");
            x.add(option);
        }





    }

}