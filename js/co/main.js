let conta = document.getElementById('conta');
console.log(conta);



// DOM
// oter 
// inner text
// Text
conta.innerText += ' salt';
conta.innerHTML += '<hr> ' ;
conta.outerHTML ='<p class="clone" >Pop</p>' ; 
//  ask gpt
// 51 v
let element = document.getElementById('Secend') ; 
element.nextElementSibling.remove() ; 
console.log(element.nextElementSibling); 
//  52 v

let contaa = document.getElementById('contaa');
contaa.innerHTML = ' Dreams ' ;
contaa.style.backgroundColor = '#444'; 
contaa.style.color = 'red' ; 
contaa.style.cssText =`background-color:green;

` 
// بتلغي الي فوق
contaa.style.removeProperty('background') ; 
// contaa.style.setProperty('color, 'red' , ); 

// v-53
// إنشاء العناصر
let daive = document.createElement('div');
let head = document.createElement('h1');
let img = document.createElement('img');

// إنشاء نص
let content = document.createTextNode('AVA MAX');

// إضافة النص إلى العنصر h1
head.appendChild(content);
img.src = "img/avamax_1712774593647sda-removebg-preview.png";

// إضافة العناصر إلى العنصر div
daive.appendChild(head);
daive.appendChild(img);
img.style.width = "100px";
img.style.borderRadius = "20px";
daive.style.background = "green";
daive.style.textAlign = "center";

// إضافة العنصر div إلى الصفحة (أو أي عنصر آخر تريده)
document.body.appendChild(daive); // يمكنك استبدال `document.body` بالعنصر الذي تريد إضافة العنصر `div` إليه

// end of part one 

// v-55


let btn = document.getElementById('zorar');

btn.onclick = function(){
    document.body.style.background = 'black';
}

let btns = document.getElementById('zorartany');


btns.addEventListener('click', function() {
    document.body.style.background = 'red';
});
btns.addEventListener('click', function() {
    btns.style.background = 'green';
});
btns.addEventListener('click', function() {
    btns.style.color = 'white';
});


// add event listeners advanced 
let myP = document.querySelector('body p'); // افترض أن هناك عنصر p داخل الجسم
let btnz = document.getElementById('zorartalet');

btnz.onclick = function(){
    let newP = myP.cloneNode(true);
    newP.className = 'clone';
    document.body.appendChild(newP);
};

document.addEventListener('click', function(event) {
    if (event.target.className === 'clone') {
        console.log('okay');
    }
});
