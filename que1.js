const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]


    let [name, skills, scores] = student;
    console.log(`Name: ${name}, \nSkills: ${skills}, \nScores: ${scores}`);
    let [htmScore, cssScore, jsScore, reactScore] = scores;
    console.log(`JSCcore: ${jsScore}, \nReactScore: ${reactScore}`);
