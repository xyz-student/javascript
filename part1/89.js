// same method in subclass
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name, speed,breed){
        super(name)
        this.speed = speed;
        this.breed = breed
    }

    eat(){
        return `Modified Eat : ${this.name} is eating`
    }

    run(){
        return `${this.name} it's breed is${this.breed}  is running at ${this.speed}kmph`
    }
} 
// object / instance 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// console.log(tommy.eat());

const animal1 = new Dog('sheru', 2, 15," lebra");
console.log(animal1.run());