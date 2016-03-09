// Array destructuring

var list = [ 1, 2, 3 ];
var [ a, , b ] = list;

console.log(a, b);
[ b, a ] = [ a, b ];

console.log(a, b);

// Object destructuring
var obj = {
    version: 'xx.xx.xx',
    animate: () => console.log('animating'),
    fadeIn: () => console.log('fading in'),
    fadeOut: () => console.log('fading out'),
    show: () => console.log('showing'),
    hide: () => console.log('hiding')
};

// Get only two specific methods from
var {version, animate, show} = obj;

console.log(version);
animate();
show();
