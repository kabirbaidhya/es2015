
class Foo extends Bar {
    greet() {
        return 'Hello ' + this.sayWorld();
    }
}

document.querySelector('#app').innerHTML = (new Foo()).greet();
