function Human(name, age, gender, height, weight) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
}

function Worker(job, salary) {
  this.job = job;
  this.salary = salary;
  this.work = function() {
    console.log( 'Работаю по 8 часов в день 5 дней в неделю' );
  }
}

function Student(study, grant) {
  this.study = study;
  this.grant = grant;
  this.watchSerials = function() {
    console.log( 'Иногда смотрю сериалы' );
  }
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

var John = new Worker();
John.name = 'John';
John.age = 25;
John.gender = 'Male';
John.height = 180;
John.weight = 70;
John.job = 'Front-End Developer';
John.salary = 500;
John.work();
console.log( 'John', John );

var Ally = new Worker();
Ally.name = 'Ally';
Ally.age = 27;
Ally.gender = 'Female';
Ally.height = 170;
Ally.weight = 50;
Ally.job = 'Python Developer';
Ally.salary = 1000;
Ally.work();
console.log( 'Ally', Ally );

var George = new Worker();
George.name = 'George';
George.age = 29;
George.gender = 'Male';
George.height = 190;
George.weight = 75;
George.job = 'Java Developer';
George.salary = 1500;
George.work();
console.log( 'George', George );

var Nick = new Student();
Nick.name = 'Nick';
Nick.age = 18;
Nick.gender = 'Male';
Nick.height = 180;
Nick.weight = 70;
Nick.study = 'Computer Science';
Nick.grant = 100;
Nick.watchSerials();
console.log( 'Nick', Nick );

var Lisa = new Student();
Lisa.name = 'Lisa';
Lisa.age = 19;
Lisa.gender = 'Female';
Lisa.height = 170;
Lisa.weight = 50;
Lisa.study = 'Finance';
Lisa.grant = 200;
Lisa.watchSerials();
console.log( 'Lisa', Lisa );

var Mike = new Student();
Mike.name = 'Mike';
Mike.age = 20;
Mike.gender = 'Male';
Mike.height = 190;
Mike.weight = 75;
Mike.study = 'Philology';
Mike.grant = 300;
Mike.watchSerials();
console.log( 'Mike', Mike );
