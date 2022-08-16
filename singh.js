

//   ########### JSON FORMAT RESUME  #######

let person =[
   {"name":"rupesh kumar singh",
   "emailid":"singh.rupesh7999@mail.com",
   "mobile_no":9993909573,
   "address":"H no.73, awadhpuri,bhopal,mp",
   "Career objective" : "obtain a responsible position in an organizationwith the best capability skill and knowledge.",
},

{
     "academin qualification":" 10th from  sent mary higher secondary school m.p. and after that diploma and b.tech from e.e. tit collage bhopal r.g.p.v",

     "professional skills":" basic knowledge of programing",
       "work experience":" fresher",
},

      //   ###PERSONAL DETAILS#####
     { "Father,s name":"pradeep kumae singh",
      "date of berth": "01-07-1999",
      "gender":"male",
      "Nationality":"indian",
      "maritial-status":"single",
      "languages known":"hindi & english",
      "hobbies":"understanding world affair",
},

      {"place":"bangolore",
      "date":"16-08-2022",},


]
console.log(person); 




//  ##### for loop ####


let object =[
   { person:"anuj", age:"38", company:"amazon"},
   { person:"jonh", age:"31", company:"flipkart"},
   { person:"shiv", age:"32", company:"zeto"},
   { person:"mohan", age:"30", company:"google"},
]

for(let i=0; i<object.length;i++){
   console.log(`
   person:${object[i].person}
   person:${object[i].age}
   person:${object[i].company}
   
   `)
}


// ######## for each loop ########

var obj = [
   { name: 'mukesh', age: 23 },
   { name: 'rakesh', age: 20 },
   { name: 'mannu', age: 18 }
];

obj.forEach(o=> console.log(o));


// ########## for of loop######



var obj = [
   { name: 'Max', age: 23 },
   { name: 'John', age: 20 },
   { name: 'tune', age: 18 }
];

for (var value of obj) {
   console.log(value)
}

// ######## for in loop #########

var obj = [
   { name: 'chotu', age: 23 },
   { name: 'rannu', age: 20 },
   { name: 'cadley', age: 18 }
];

for (var key in obj) {
   console.log(obj[key]);
}