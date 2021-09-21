const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
      { skill: "BootStrap", level: 8 }
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
      { skill: "Express", level: 9 }
    ],
    dataBase: [
      { skill: "MongoDB", level: 7.5 },
      { skill: "SQL", level: 8 }
    ],
    dataScience: ["Python", "R", "D3.js", "SQL"]
  }
};

//Object.keys(obj) – returns all the keys of object as array
// Find the length of student object keys
const objectArrays = Object.keys(student).length;
console.log("length of key ", objectArrays);

//   Find the length of the student object values
const objectValuesArray = Object.values(student);
console.log(objectValuesArray.length);

const skillkey = student.skills;
console.log(Object.keys(skillkey).length);

console.log(student.hasOwnProperty('name'));

