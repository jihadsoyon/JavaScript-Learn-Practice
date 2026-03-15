const college = {
  name: 'vnc',
  class: ['11', '12'],
  events: ['scinece fair', 'bijoy dibosh', '21 feb'],
  unique: {
    color: 'blue',
     result: {
      gpa: 5,
      merit: 'top'
    }
  }
}
console.log(college)

college.unique.result.merit = 'top top top most' // valuer man bodlayte chayle
console.log(college.unique.color)
console.log(college.unique.result.merit)
college.events[1] = '16 december'
console.log(college.events[1])  //kono value change korte chayle
delete college.class;  //how to delete a property from an object
delete college.unique.color;
console.log(college)







