/*Взяти файл template_2.html та працювати в ньому
- Напишіть код, який :
-- змінює колір тексту елемнту з ід main_header на будь-який інший
-- робить шириниу елементу ul 400 пікселів
-- робить шириниу всіх елементів з класом linkList шириною 50%
-- отримує текст який зберігається в елементі з класом listElement2
-- отримує всі елементи li та змінює ім колір фону на сірий
-- отримує всі елементи 'a' та додає їм клас anchor
-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
-- отримати елементи p та змінити їм paddin на довільне значення
-отримати елементи з класом text2 та змінити їм текст на довільне значення*/
let main_header=document.getElementById("main_header");
main_header.style.color='pink';
let ul=document.getElementsByTagName('ul');
for (let temp of ul) {
    temp.style.width='400px';

}
let  linkList=document.getElementsByClassName('linkList');
for (let linkListElement of linkList) {
    linkListElement.style.width='50%';
}
let text=document.getElementsByClassName('listElement2');
for (let temp1 of text) {
    console.log( temp1.innerText);
}
let li=document.getElementsByTagName('li');
for( let  temp2 of li) {
   temp2.style.backgroundColor='grey' ;
}

let a=document.getElementsByTagName('a');
for (let temp3 of a) {
    temp3.classList.add('anchor');

}

for (let temp4 of a) {
   if (temp4.innerText==='link3'){
       temp4.style.width='40px';
   }

}

for(let temp5 of a) {
let xxx=temp5.innerText;
    temp5.classList.add(xxx);
}

let subheader=document.getElementsByClassName('sub-header');
for (let subElement of subheader) {
    prompt("enter background color :");
    subElement.style.backgroundColor=prompt("enter background color :");


}
for (let temp6 of subheader) {
    if(temp6.innerText==='content 2 segment'){
        temp6.style.color=prompt("enter text color :");
    }
}
let content_1=document.getElementsByClassName('content_1');
for (let temp7 of content_1 ){
    temp7.innerText=prompt("enter new text :")

}
let p=document.getElementsByTagName('p');
for (let temp8 of p) {

    temp8.style.padding='15px';
}
let text2=document.getElementsByClassName('text2');
for (let temp9 of text2) {
    temp9.innerText="нарешті останнє завдання!!!!!"

}