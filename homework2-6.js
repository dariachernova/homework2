let nStart = 1800;
let nEnd = 2020;
let vyear = 0;

for (let index = nStart; index <=nEnd; index++) {
    if (index ==1961) {
        console.log('Лет прошло до полета Гагарина в космос с  ' + nStart + ' года: '+(index-nStart));//сколько лет прошло до полета гагарина в космос
    }
    if (index % 4 == 0 && index % 100 != 0 ) {
        vyear++;
    }
}
    console.log('Количество високосных годов с ' + nStart +' по ' + nEnd +': ' + vyear);
