let t = 25;

if (t<=-30) {
    console.log('Оставайтесь дома');
} else if (t>-30 && t<=-10) {
    console.log('Сегодня холодно');
} else if (t>-10 && t<=5) {
    console.log("Не холодно");
} else if (t>-5 && t<=15) {
    console.log ('Тепло');
} else if (t>15 && t<=25) {
    console.log('Очень тепло');
} else if (t>25 && t<=35) {
    console.log('Жарко');
} else {
    console.log('Пекло');
}

