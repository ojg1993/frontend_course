let number = 5;


if (number % 2 == 0) {
    console.log('Number is even.');
}else{
    console.log('Number is odd.');
}


if (number % 2 == 0){
    console.log('number is multiple of 2');
}else if(number % 3 == 0){
    console.log('number is multiple of 3');
}else if(number % 4 == 0){
    console.log('number is multiple of 4');
}else if(number % 5 == 0){
    console.log('number is multiple of 5');
}else{
    console.log('number is not multiple of 2,3,4 and 5');
}


const englishDay = 'Monday';
let koreanDay;
console.log(koreanDay)

switch(englishDay){
    case 'Monday':
        koreanDay='월요일';
        break;
    case 'Tueseday':
        koreanDay='화요일';
        break;
    case 'Wednesday':
        koreanDay='수요일';
        break;
    case 'Thurseday':
        koreanDay='목요일';
        break;
    case 'Friday':
        koreanDay='금요일';
        break;
    default:
        koreanDay='주말';
        break;
}
console.log(koreanDay);