/*-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу*/
 function Dog( name,breed,weight,height,owner) {
    this.name = name;
this.breed=breed;
this.weight=weight;
this.height=height;
this.owner=owner
}
function Human( name,lastName,race,citizenship,isWorkingCapacity) {
    this.name = name;
    this.lastName=lastName;
    this.race=race;
      this.citizenship=citizenship;
      this.isWorkingCapacity=isWorkingCapacity
}
function Car( name,color,middleSpeed,yearOfIssue,owner) {
    this.name = name;
    this.color=color;
    this.middleSpeed=middleSpeed;
    this.yearOfIssue=yearOfIssue;
    this.owner=owner
}
function Apartment( owner,numberOfRooms,areaInM2,floor,ishasElvator) {
    this.ishasElvator=ishasElvator;
    this.numberOfRooms=numberOfRooms;
    this.areaInM2=areaInM2;
    this.floor=floor;
    this.owner=owner

}
function Book( owner,name,isHasImages,numberOfPages,price) {
    this.name = name;
    this.isHasImages=isHasImages;
    this.numberOfPages=numberOfPages;
    this.price=price;
    this.owner=owner
}

// let user = new User("Вася");
//
// alert(user.name); // Вася
// alert(user.isAdmin); // false

let Dog1={
    name:"Muhtar",
    breed:"shepherd dog",
    weight: 45,
    height:60,
    owner:"Vasya Otvertkin"
}
let Human1={

    race: "caucasoid",
    citizenship:"Ukraine",
    name:"Vasya",
    lastname:"Otvertkin",
    isWorkingCapacity:true
}
let Car1={
    name:"zaporozhec",
    color:"red",
    middleSpeed:"60 km",
    yearOfIssue:1969,
    owner:"Vasya Otvertkin"
}
let Apartment1={
    owner:"Vasya Otvertkin",
    numberOfRooms:1,
    areaInM2:25,
    floor:10,
    ishasElvator:false
}
let Book1={
    owner:"Vasya Otvertkin",
    name:"zaporozhec repair instructions",
    isHasImages:true,
    numberOfPages:666,
    yearOfIssue:2020,
    price:"500 hrn"
}

/* Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів*/
let Dog2=new Dog("Sharik","without breed",25,35,"no owner");
let Dog3=new Dog("Ferdinant","King Dog",85,120,"Vasya Otvertkin's boss");
let Dog4=new Dog("julka","pekines",4,25,"Vasya Otvertkin's mom");
let Dog5=new Dog("Polkan","mixed",60,55, "in the service of the homeland");

let Human2=new Human("Sasha","Morozov","caucasoid","Ukraine",true);
let Human3=new Human("Artur","Pirozhkov","mixed","Ukraine",true);
let Human4=new Human("Dron","Droniv","Mongoloid","china",false);
let Human5=new Human("Vovan","Zelya", "Negro","Sudan",false);

let Car2=new Car("superPuperCar","blue",250,2025,"Sasha Morozov");
let Car3=new Car("bently","gold",200,2019,"Artur Pirozhkov");
let Car4=new Car("jeely","white",150,2017,"Dron Droniv");
let Car5=new Car("feet","black",6,1985,"Vovan  Zelya");

let Apartment2=new Apartment("Sasha Morozov",6,180,1,false);
let Apartment3=new Apartment("Artur Pirozhkov",12,500,3,true);
let Apartment4=new Apartment("Dron Droniv",1,10,121,true);
let Apartment5=new Apartment("Vovan  Zelya",1,20,1,false);

let Book2=new Book("Sasha Morozov","history of ancient codding",false,2222,"invaluable");
let Book3=new Book("Artur Pirozhkov","Play boy",false,2222,"100 hrn");
let Book4=new Book("Dron Droniv","how to work 24 hours a day and do not die",true,3,"100$");
let Book5=new Book("Vovan  Zelya","mvanga bwanga",true,20,"priceless");

let arrDogs=[Dog1,Dog2,Dog3,Dog4,Dog5];
let arrHumans=[Human1,Human2,Human3,Human4,Human5];
let arrApartments=[Apartment1,Apartment2,Apartment3,Apartment4,Apartment5];
let arrBooks=[Book1,Book2,Book3,Book4,Book5];
let arrCars=[Car1,Car2,Car3,Car4,Car5];
console.log(arrDogs);
console.log(arrHumans);
console.log(arrApartments);
console.log(arrBooks);
console.log(arrCars);

/*-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка*/
let ArturPirozhkov={house:["apartment in capital","house in village"],ownDriver:{name:"Petrovich",age:55,experience:25},toy:"toys for adult",table:"work desk",bag:"dolchev & Cabanov"};
console.log(ArturPirozhkov);

/*Дан массив:
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни
Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!*/
    let users = [

        {name: 'vasya', age: 31, status: false},

        {name: 'petya', age: 30, status: true},

        {name: 'kolya', age: 29, status: true},

        {name: 'olya', age: 28, status: false},

        {name: 'max', age: 30, status: true},

        {name: 'anya', age: 31, status: false},

        {name: 'oleg', age: 28, status: false},

        {name: 'andrey', age: 29, status: true},

        {name: 'masha', age: 30, status: true},

        {name: 'olya', age: 31, status: false},

        {name: 'max', age: 31, status: true}

    ];
    console.log(users[7].status);
    console.log(users[10].status);
    console.log(users[users.length-2].name);
    console.log(users[2].name);
    console.log(users[6].age);
    console.log(users[3].age);//1st Olya
    console.log(users[9].age);//2nd Olya
    console.log(users[4].age+" " +users[4].name);
    console.log(users[5].age+" " +users[5].status);

    
