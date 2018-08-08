function arrayHandler(){


    var people = ["John","Bruce","Wesley"];
    document.write("<h2> Adding batman to the array </h2>");
    people[people.length] = "Batman"

    for(var i=0;i<people.length;i++){


        document.write("<br>" + people[i] + "</br>");


    }


    people.splice(1,1);


    document.write("<h2> Removing Bruce from the array </h2>");


    for(var i=0;i<people.length;i++){


        document.write("<br>" + people[i] + "</br>");
    }




}

arrayHandler();




