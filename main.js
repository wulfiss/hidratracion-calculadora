(function hidrata(){
    let $button = document.querySelector('.btn');
    let diffWeight = document.querySelector('#diffWeight');
    let percentage = document.querySelector('#percentaje');
    let divResult = document.querySelector('#divResult');
    let template = document.querySelector('#templateDiv').content;

    $button.addEventListener('click', (e) =>{
        if(e.target.id == '$one'){
            calcular();
            divResult.appendChild(template);
        }
    })

    function input(){
        let initialW = document.querySelector('#initialW').value;
        let finalW = document.querySelector('#finalW').value;
        return{
            initialW, finalW
        }
    }

    function calcular(){
        let diff = input().finalW - input().initialW;
        let perc = (diff * 100) / input().initialW;
        
        console.log({diff, perc})
        render(diff, perc);
    }
    
    function render(diffe, perce){
        diffWeight.textContent = diffe.toFixed(2) + 'gr.';
        percentage.textContent = perce.toFixed(2) + '%';
    }

    return{
        calcular: calcular
    }

})();