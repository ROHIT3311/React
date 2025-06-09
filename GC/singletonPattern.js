class Student{
	constructor(){
		if(Student.instance){
			return Student.instance;
		}
			
		Student.instance = this;
		this.settings = {
			theme: "light",
			language: "en",
		};
	}

	setSetting(key, value) {
		this.settings[key] = value; // Corrected this line
	}
	getSettings(key) {
		return this.settings[key]; // Corrected this line
	}
}

const c1 = new Student();
console.log(c1.getSettings("theme"));