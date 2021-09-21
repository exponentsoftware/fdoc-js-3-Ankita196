const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 }
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 }
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"]
  }
};

const skills1 = student.skills.frontEnd;
skills1.push({ skill: "bootstrap", level: 8 });

const skills2 = student.skills.backEnd;
skills2.push({ skill: "Express", level: 9 });

const skills3 = student.skills.dataBase;
skills3.push({ skill: "SQL", level: 8 });
const skills4 = student.skills.dataScience;
skills4.push("SQL");

console.log(skills1);
