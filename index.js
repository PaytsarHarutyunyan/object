
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};


function countTotalSalary(obj) {
    let totalSalary = 0;
    for (const salary in obj) {
      totalSalary += obj[salary];
    }
    return totalSalary;
  };


console.log(countTotalSalary({})); // 0
console.log(countTotalSalary(salaries)); // 390                   



const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
    for(const number in obj) {
       if(Number(obj[number])) {
        obj[number] *= 2
       }
    }
};

multiplyNumeric(menu);
console.log(menu);


// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };                                           


const ladder = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    showStep: function() {
       console.log(this.step)
    }
};

ladder.showStep(); // 0
ladder.up();
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1