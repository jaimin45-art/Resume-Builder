let QualificationAdd = document.getElementById('educationAdd')

function addNewWEField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows' , 3)
    newNode.setAttribute('placeholder' , 'Enter Here')
    
    let weOB = document.getElementById('we')
    let weAddButtonOB = document.getElementById('weAddButton')

    weOB.insertBefore(newNode , weAddButtonOB);
}

QualificationAdd.addEventListener('click' , function(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder' , 'Enter Here')
    newNode.setAttribute('rows' ,3)

    let aqOB = document.getElementById('aq')
    let aqAddButtonOB = document.getElementById('aqAddButton')

    aqOB.insertBefore(newNode , aqAddButtonOB)
})


// generateCV

function generateCV(){
    let nameField = document.getElementById('namefield').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;

    // Contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactfield').value;

    // Adress
    document.getElementById('adressT').innerHTML = document.getElementById('addressfield').value;

    // Links
    document.getElementById('fbt').innerHTML = document.getElementById('fbfield').value;
    document.getElementById('gitt').innerHTML = document.getElementById('gitfield').value;
    document.getElementById('linkedt').innerHTML = document.getElementById('linkfield').value;

    // Objective

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;

    // Work Experience
    let wes = document.getElementsByClassName('weField')
    let str = '';
    for(let e of wes){
        str = str + `<li>${e.value}</li>`
    }
    document.getElementById('weT').innerHTML = str;
    // qualification
    let aqs = document.getElementsByClassName('aqField');
    let str1 = ''
    for(let a of aqs){
        str1 = str1 + `<li>${a.value}</li>`
    }
    document.getElementById('aqT').innerHTML = str1;

    // code for  Image
    let file = document.getElementById('imgField').files[0];
    let reader= new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result)

    // set Image
    reader.onloadend = function(){
        document.getElementById('imgTemplate').src = reader.result;
    };

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}


function printCV(){
 
    
     // Hide buttons before print
    document.getElementById('printcv').style.display = 'none';
    document.getElementById('generate').style.display = 'none';

    // After print (or cancel), show buttons again
    window.onafterprint = function() {
        document.getElementById('printcv').style.display = 'block';
        document.getElementById('generate').style.display = 'block';
    };

    window.print();
}

function generatecv(){
    document.getElementById('cv-form').style.display = 'block'
    document.getElementById('cv-template').style.display = 'none'
}