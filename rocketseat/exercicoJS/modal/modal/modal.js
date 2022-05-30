const buttonOpenModal = document.getElementById('openModal')
const modal = document.querySelector('.modal-wrapper')
const esc = document.querySelector('.p-8')

buttonOpenModal.addEventListener('click', removeAndRemoveInvisible)
 var validate;

function removeAndRemoveInvisible (){
    modal.classList.remove('invisible')
    validate = modal.classList.contains('invisible')
    console.log(validate)
}


document.addEventListener('keydown', function(event){
    
    console.log(event)
             
    const isEscKey = event.key === 'Escape'
            
    if(isEscKey == true && validate == false){
        modal.classList.add('invisible')
    }
}) 











