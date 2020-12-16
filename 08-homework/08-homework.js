class Student {
	constructor(options){
		this.university = options.university;
		this.course = options.course;
		this.fullName = options.fullName;
		this.marks = options.marks;
	}

	getInfo(){
		return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
	}

	get marksList() {
		return this.marks
	}

	set marksList(val){
		return this.marks = [...this.marks, val]
	}

	getAverageMark(){
		if(this.marks !== null){
			return this.marks.reduce((acc,mark) => acc + mark ) / this.marks.length	
		}
	}

	dismiss() {
        return this.marks = null
	}

	recover(){
		return this.marks = []
	}
}


class BudgetStudent extends Student {
	constructor(options){
		super(options);
		this.getScholarship();
	}

	getScholarship(){
		setInterval(() => {
			if(this.getAverageMark() >= 4){
				console.log('Ви отримали 1400 грн. стипендії')
			} 
		},30000)
	}
}


let kate = new BudgetStudent({
	university: 'НУЛП',
	course: 1,
	fullName: 'Мельник Катерина',
	marks: [5, 4, 4, 5, 5]
})

console.log(kate)
console.log(kate.getInfo())
console.log(`Бали - ${kate.marks}`)
console.log(`Середній бал - ${kate.getAverageMark()}`)
