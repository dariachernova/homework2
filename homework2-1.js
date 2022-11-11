let a = 2;
let b = 3;
let c = 4;

if (a>b) {//уже сравнили а и б
    if (a>c) {
        console.log(a);
    } else {//а меньше с 
        console.log(c);
    }
        
} else {
    if (b>c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

