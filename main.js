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
        
        return{initialW, finalW}
    }

    function render(arr){
        
        let hidrataRender = document.querySelector('#averageHidrata');
        hidrataRender.textContent = average(arr)['average'];
        
        let divResult = document.querySelector('#divResult');
        let template = document.querySelector('#templateDiv');
       
        divResult.innerHTML = "";
          
        for (const roaster of arr) {
            let tempClone = template.content.cloneNode(true);
            let newDiv = document.createElement('div');
            

            tempClone.querySelector('#pInitial').textContent = roaster.initial;
            tempClone.querySelector('#pFinal').textContent = roaster.final;
            tempClone.querySelector('#diffWeight').textContent = roaster.diff;
            tempClone.querySelector('#percentaje').textContent = roaster.hidrata;

            newDiv.appendChild(tempClone);
            divResult.appendChild(newDiv);
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

    let $button = document.querySelector('.btn');





    $button.addEventListener('click', (e) =>{
        if(e.target.id == '$one'){
            addChicken(input()['initialW'], input()['finalW'], arrChicken);
            console.log(arrChicken);
            render(arrChicken);
        }
    })

})();