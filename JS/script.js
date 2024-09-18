let button=document.body.querySelector('button');
let planBar=document.body.querySelector('#plan_to_do');
let lowerDiv=document.body.querySelector('#lower_div')
let bin=document.body.querySelector('.plans_list');



function addPlan(){
    if (planBar.value=='')
        {
            alert("Please Enter a Task")
        }
        else
        {
            let Text=planBar.value;
            let newDiv=document.createElement('span')
            newDiv.innerHTML=` 
                <li>
                     ${Text}
                </li>      
                <i class="fa-solid fa-trash"></i>  
    `
        document.body.querySelector('#lower_div').appendChild(newDiv)
        planBar.value='';
//TO DELETE PLAN
        newDiv.querySelector('i').addEventListener('click',function (){
        newDiv.remove();})

// ADDING TOGGLE
// Toggle buttons are interactive components that allow users to switch between 
// two states, such as on/off or true/false.  

        newDiv.addEventListener('click',function(){

            this.classList.toggle('done')
        })


}
}

button.addEventListener('click',addPlan);
