/*-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
- отримує текст з параграфа з id "content"
- отримує текст з блоку з id "rules"
- замініть текст параграфа з id 'content' на будь-який інший
- замініть текст параграфа з id 'rules' на будь-який інший
- змініть кожному елементу колір фону на червоний
- змініть кожному елементу колір тексту на синій
- отримати весь список класів елемента з id=rules і вивести їх в console.log
- отримати всі елементи з класом fc_rules
- поміняти колір тексту у всіх елементів fc_rules на червоний*/

let content=document.getElementById("content");
console.log(content.innerText);
let rules=document.getElementById( "rules");
console.log(rules);
content.innerText="new text !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
console.log(content.innerText);
rules.innerText="new text in div with id 'rules'";
console.log(rules);
//document.getElementById("content").classList.add('class');
//document.getElementById("rules").classList.add('class');
content.style.backgroundColor='red';
rules.style.backgroundColor='red';
let fc_rules=document.getElementsByClassName('fc_rules');
for (let rule of fc_rules) {
    rule.style.backgroundColor='red';

}
let colorOfText='blue';
let colorOfTextClass='blue';
for (let temp of fc_rules) {
    temp.style.color = colorOfTextClass;

}

content.style.color=colorOfText;
rules.style.color=colorOfText;


let elementClasses = rules.classList;
console.log(elementClasses);




   lists=document.getElementsByClassName('fc_rules');
console.log(lists);

colorOfTextClass='red';
for (let temp of fc_rules) {
    temp.style.color = colorOfTextClass;}