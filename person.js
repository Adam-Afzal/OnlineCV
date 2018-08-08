function maker(name,age,job){


    var obj={};
    obj.name = name
    obj.age = age;
    obj.occupation = job;



    obj.test =function () {



        console.log(name + " " + age);



    }
document.write("Name: " + name + " Age: " + age + " Job: " + job);

}
