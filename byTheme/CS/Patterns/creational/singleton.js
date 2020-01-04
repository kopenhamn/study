class Singleton {

  protected static _instance :Singleton;
  
  protected foo :number = 123;
  
  constructor() {
    if (Singleton._instance) {
        throw new Error("Instantiation failed: "+
                        "use Singleton.getInstance() instead of new.");
    }
    Singleton._instance = this;
  }

  public static getInstance() :Singleton {
    if (Singleton._instance) {
      return Singleton._instance;
    }
    return Singleton._instance = new Singleton;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////


let singleton = Symbol();
let singletonEnforcer = Symbol();

class Singleton {

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer)
       throw "Instantiation failed: use Singleton.getInstance() instead of new.";
    // код конструктора
  }

  static get instance() {
    if (!this[singleton])
        this[singleton] = new Singleton(singletonEnforcer);
    return this[singleton];
  }
  
  static set instance(v) { throw "Can't change constant property!" }
}

export default Singleton;



//use it :

import Singleton from 'singleton';

// Test constructor
try { var obj0 = new Singleton() } catch(c) { console.log(c) }
console.log('obj0', obj0 );


// Create and get object
let obj1 = Singleton.instance;
let obj2 = Singleton.instance;



console.log(obj2.foo === 123 );
obj1.foo = 456;
console.log('obj2', obj2 );
console.log('obj1 === obj2',  obj1 === obj2 );

try { var obj3 = new Singleton() } catch(c) { console.log(c) }
console.log('obj3', obj3);