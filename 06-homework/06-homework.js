const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4,],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

///////// 1
  function getSubjects(student){
    let subjects = Object.keys(student.subjects);
    subjects = subjects.map(el => el = el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase())
    subjects = subjects.map(el => el = el.replace('_', ' '))
      return subjects
  };

///////// 2
function getAverageMark(student){
  let result = Object.values(student.subjects).flat(2)
  let allMarks = result.reduce((acc,el) => acc + el) / result.length
    return +allMarks.toFixed(2)
}

///////// 3
function getStudentInfo(student){
  let { name, course } = student;
  return {name: name, course: course, averageMark: getAverageMark(student)}
}

///////// 4
function getStudentsNames(arr){
  let names = arr.map(el => Object.values(el.name)).map(el => el.join('')).sort()
    return names
}

///////// 5
function getBestStudent(arr){
  let averageMarks = arr.map(el => ({name: el.name ,mark: getAverageMark(el)}))
  let best = averageMarks.reduce((prev, curr) => prev.mark > curr.mark ? prev : curr)
  console.log(averageMarks)  
    return best.name
}

///////// 6
function calculateWordLetters(str){
  let result = {};
  let arr = str.split('')
  arr.forEach(el => {result[el] = result[el] + 1 || 1;});
    return result

}
