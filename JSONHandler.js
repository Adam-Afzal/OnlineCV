function parseJSON(){


    var reqURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';

    var request = new XMLHttpRequest();

    request.open('GET',reqURL);

    request.responseType = 'json';

    request.send();

request.onload = function () {

    var requestData = request.response;

    var myH1 = document.createElement('h1');

    myH1.textContent = requestData['squadName'];
    document.getElementsByTagName('body')[0].appendChild(myH1);


    console.log(JSON.stringify(requestData));

for()

}




}


parseJSON();
