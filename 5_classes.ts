class Typescript {
    version: string
  
    constructor(version: string) {
      this.version = version
    }
  
    info(name: string) {
      return `[${name}]: Typescript version is ${this.version}`
    }
  }
  // модификатор readonly значение может быть присвоено только в момент инициализации, или в конструкторе того же класса. 
  //Любые другие присваивания значении запрещены.

  // class Car {
  //   readonly model: string
  //   readonly numberOfWheels: number = 4
  //
  //   constructor(theModel: string) {
  //     this.model = theModel
  //   }
  // }
  
  class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
  }
  // ==============
  
  
  class Animal {
    //Модификатор protected определяет поля и методы, которые из вне класса видны только в классах-наследниках
    protected voice: string = ''
    // Члены помеченные ключевым словом public, доступны как в классах, в которых они объявлены, так и в классах потомках. 
    //Также к публичным членам можно обращаться через экземпляры класса.
    // по умолчанию 
    public color: string = 'black'

    //Использование модификаторов в параметрах конструктора позволяет сократить написание кода
    constructor() {
      this.go()
    }
  
  // private - нельзя обратиться вне класса

    private go() {
      console.log('Go')
    }
  }
  
  class Cat extends Animal {
    public setVoice(voice: string): void {
      this.voice = voice
    }
  }
  
  const cat = new Cat()
  cat.setVoice('test')
  console.log(cat.color)
  // cat.voice
  
  // =====================
  
  abstract class Component {
    abstract render(): void
    abstract info(): string
  }
  
  class AppComponent extends Component {
    render(): void {
      console.log('Component on render')
    }
  
    info(): string {
      return 'This is info';
    }
  }