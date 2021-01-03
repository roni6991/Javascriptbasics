var student1 = { id:409, phone:456, name:"ron"};
var student2 = { id:408, phone:457, name:"Rosie"};

student2.phone=465;
var phoneNo = student2.phone;
var phoneNo2 = student1["phone"];

student2.specialty="Hur";

console.log(phoneNo);
console.log(phoneNo2);
console.log(student2);