/*  This file will demonstrate an example for Composite pattern with mixin, it is 
    useful where inheritance becomes complicate ie. Multiple Level
*/

/* Suppose take an example like we have a Animal Function having walk and eat function inside it. 
    We can create object of it using Constructor Call like dog, cat, if I want to create another object
    like goldfish which should have behavior like swim and eat function. So goldfish cannot be 
    created by constructor call of Animal. So we have to add one more level of inheritance like

                                    Animal
                                       |
                            ----------------------
                            |                     |
                            v                     v
                          Mammal                 Fish
                            |                      |
                       -------------               v
                       |            |            GoldFish
                       v            v
                    dog             cat

    But with help of composite now structure is like
                    
                        canWalk       canEat      canSwim
                           |             |           | 
                           | ----------------------- |
                           | |                     | |
                           v v                     v v
                          Animal                 GoldFish
                            |                        |
                            v                        v
                           dog                      goldFish
                            
*/

function mixin(target, ...sources) {
    return Object.assign(target, ...sources);
}

// Object.assign makes shallow copy, if source is reference to object, only reference is copied

const canWalk = {
    walk: function() {
        console.log("Can Walk");
    }
};

const canSwim = {
    swim: function() {
        console.log("Can Swim");
    }
};

const canEat = {
    eat: function() {
        console.log("Can Eat");
    }
}

function Person() {
}

mixin(Person.prototype, canWalk, canEat);

const person = new Person();

function GoldFish() {
}

mixin(GoldFish.prototype, canEat, canSwim);

