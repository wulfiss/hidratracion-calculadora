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

    let chickenOne =  new Chicken(2.5, 2.7);

    let arrChicken = [chickenOne];

    let $button = document.querySelector('.btn');


    let divResult = document.querySelector('#divResult');
    let template = document.querySelector('#templateDiv').content;


    $button.addEventListener('click', (e) =>{
        if(e.target.id == '$one'){
            addChicken(input()['initialW'], input()['finalW'], arrChicken);
            console.log(arrChicken);
        }
    })

})();