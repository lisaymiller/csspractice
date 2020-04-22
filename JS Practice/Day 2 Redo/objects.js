var course = {
	name: "WIN Program",
	awesome: true,
	teachers: ["Zach", "Kaley", "George"],
	director: {
		name: "Pasha",
		company: "Carolina FinTech Hub"
	},
	students: [
		{
			name: "Carlton",
			computer: {
				OS: "Windows",
				type: "laptop"
			}
		},
		{
			name: "Hector",
			computer: {
				OS: "MacOS",
				type: "MacBook"
			}
		},
		{
			name: "Yami",
			computer: {
				OS: "Windows",
				type: "laptop"
			}
		},
		{
			name: "Nicolas",
			computer: {
				OS: "Windows",
				type: "laptop"
			}
		}
	],
	preReqs: {
		skills: ['ability to learn', 'hard worker'],
		equipment: {
			laptop: true,
			OSOptions: ["Windows", "MacOS"]
		}
	}
};


// console.log(course.name); //"WIN Program"
// console.log(course["teachers"]); //Teachers array
// console.log(course.teachers[0]); // Zach
// console.log(course.director["name"]); //Pasha

// //updating an existing property
// course.name="WIN Program featuring TTS";
// console.log(course.name);

// //adding a new property
// course.fun=true;
// console.log(course.fun); //true

// //delete existing property
// delete course.fun;
// console.log(course.fun) //undefined

console.log(course.name);

console.log(course.teachers[1]);

console.log(course.students[0].name);

console.log(course.students[2].computer.type);

console.log(course.preReqs.equipment);

console.log(course.preReqs.equipment.OSOptions[1]);

var OSOptions = course.preReqs.equipment.OSOptions.join(' or ');
console.log(OSOptions);

var windowsUsers = []
for (var i=0; i<course.students.length; i++) {
	if ( course.students[i].computer.OS=="Windows")
	windowsUsers.push(course.students[i].name); {
			}
}
console.log(windowsUsers);
