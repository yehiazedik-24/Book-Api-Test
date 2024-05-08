let names = ['ava max', 'inna', 'selena gomez', 'Taylor Swift', 'Ana De Armas'];
let jobs = ['singer', 'Actress'];
let container = document.createElement('div');
document.body.appendChild(container); 
container.style.textAlign = 'center';

function create(name, job) {

    // elements 
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let jobElement = document.createElement('p');
    let img = document.createElement('img'); // انشاء عنصر الصورة هنا

    // content
    let head = document.createTextNode(name);
    let ageco = document.createTextNode(job);
    title.appendChild(head);
    jobElement.appendChild(ageco);

    // style
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';

    img.src = "img/3.png"; // تعيين مسار الصورة
    img.style.width = '100%'; // تعيين عرض الصورة بنسبة مئوية
    card.appendChild(img); // إضافة عنصر الصورة إلى البطاقة

    card.appendChild(title);
    card.appendChild(jobElement);
    container.appendChild(card);
}

for(let i = 0; i < 5; i++) {
    create(names[i], jobs[i]);
}
// v-54 v-53


// let names = ['ava max', 'inna', 'selena gomez', 'Taylor Swift', 'Ana De Armas'];
// let jobs = ['singer', 'Actress'];
// let container = document.createElement('div');
// document.body.appendChild(container); 
// container.style.textAlign = 'center';

// function create(name, job) {

//     // elements 
//     let card = document.createElement('div');
//     let title = document.createElement('h2');
//     let jobElement = document.createElement('p'); // تغيير اسم المتغير jobs إلى jobElement لتجنب الاختلاف في الأسماء
//     let img = document.createElement('img');
//     // content
//     let head = document.createTextNode(name); // استخدام المتغير name
//     let ageco = document.createTextNode(job); // استخدام المتغير job
//     img.src = "img/4.png" ;
//     title.appendChild(head);
//     jobElement.appendChild(ageco); // استخدام المتغير jobElement

//     // style
//     card.style.width = '200px';
//     card.style.background = '#444';
//     card.style.color = '#fff';
//     card.style.padding = '10px';
//     card.style.margin = '2px';
//     card.style.display = 'inline-block';

//     img.style.width = '100%';

//     card.appendChild(title);
//     card.appendChild(jobElement); // استخدام المتغير jobElement
//     card.appendChild(img);
//     container.appendChild(card);
// }

// for(let i = 0; i < 18; i++) { // تقليل الحد الأقصى للحلقة ليتناسب مع عدد العناصر في المصفوفة
//     create(names[i], jobs[i]); // تمرير المتغيرات name و job
// }








/*let names = ['ava max ','inna','selena gomez','Taylor Swift','Ana De Armas' ];
let jobs = ['singer', 'Actress'];
let container = document.createElement('div');
document.body.appendChild(container); 
container.style.textAlign = 'center';
// عمل Card ب js

function create(name,job) {

    // elements 
    let card = document.createElement ('div');
    let title = document.createElement ('h2');
    let jobElment = document.createElement ('p');
    let img = document.createElement ('img');
    // contet
    let head = document.createTextNode ('name');
    let ageco = document.createTextNode ('job');
    img.src = "img/3.png" ;
    title.appendChild(head);
    jobElment.appendChild(ageco);

// style
card.style.width = '200px';
card.style.background = '#444';
card.style.color = '#fff';
card.style.padding = '10px';
card.style.margin = '2px';
card.style.display = 'inline-block';

img.style.width = '100%';


    card.appendChild(title);
    card.appendChild(jobElment);
    card.appendChild(img);
    container.appendChild(card);


}

for(let i = 0; i < 18 ; i++) {
    create(names[i],jobs[i]);
}






*/