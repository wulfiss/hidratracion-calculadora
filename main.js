(function hidrata(){

    function Chicken(initial, final){
        this.initial = initial
        this.final = final
        this.diff = (this.final - this.initial).toFixed(2)
        this.hidrata = ((this.diff * 100) / this.initial).toFixed(2)
    }

    function addChicken(initial, final, arr){
        
        let newChicken = new Chicken(initial, final)
        arr.push(newChicken);
    }

    function input(){
        let initialW = document.querySelector('#initialW').value;
        let finalW = document.querySelector('#finalW').value;
        let $button = document.querySelector('.btns');
        let container = document.querySelector('.container');
        let addForm = document.querySelector('#addChickenForm');
        
        return{initialW, finalW, $button, container, addForm}
    }

    function render(arr){
        
        let hidrataRender = document.querySelector('#averageHidrata');
        let hidrataRenderDiv = document.querySelector('#averageHidrataDiv');

        if(arr.length != 0){
            hidrataRenderDiv.style.display = 'block';
            hidrataRender.textContent = average(arr)['average'];
        }else if(arr.length == 0){
            hidrataRenderDiv.style.display = 'none';
        }

        let divResult = document.querySelector('#divResult');
        let template = document.querySelector('#templateDiv');
       
        divResult.innerHTML = "";
        let y = 0;
        for (const roaster of arr) {
            
            let tempClone = template.content.cloneNode(true);
            let newDiv = document.createElement('div'); 
            newDiv.setAttribute('data-key', `${y}`);         

            tempClone.querySelector('#pInitial').textContent = roaster.initial;
            tempClone.querySelector('#pFinal').textContent = roaster.final;
            tempClone.querySelector('#diffWeight').textContent = roaster.diff;
            tempClone.querySelector('#percentaje').textContent = roaster.hidrata;


            let delButton = document.createElement('button');
            delButton.setAttribute('id', '$two');
            delButton.setAttribute('type', 'button');
            delButton.setAttribute('class', 'btns');
            delButton.setAttribute('data-key', `${y}`);   
            delButton.textContent = 'X';

            newDiv.appendChild(tempClone);
            newDiv.appendChild(delButton);
            divResult.appendChild(newDiv);
            y++;
        };
    }

    function average(arr){
        let average = 0;
        let sum = 0;
        for (const roaster of arr){
            sum += Number(roaster.hidrata);
        }

        average = (sum / arr.length).toFixed(2);

        return {average}
    }


    let chickenOne =  new Chicken(2.5, 2.7);

    let arrChicken = [chickenOne];


    input()['container'].addEventListener('click', (e) =>{
        
        let key;

        if(e.target.id == '$one'){
            addChicken(input()['initialW'], input()['finalW'], arrChicken);
            render(arrChicken);
            input()['addForm'].style.display = 'none';
        } else if(e.target.id == '$two' && (key = e.target.getAttribute('data-key'))){
            arrChicken.splice(key, 1);
            render(arrChicken);
        } else if(e.target.id == '$three'){
            input()['addForm'].style.display = 'block';
        }
        input();
    })

    return{input}

})();