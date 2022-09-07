const { controller } = require("../../controller/controller")
import {update} from './update'
const updateForm = document.querySelector('.update_user')
if (updateForm){
    updateForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const form= new FormData()
        form.append('name',document.getElementById('name').value)
        form.append('email',document.getElementById('email').value)
        form.append('address',document.getElementById('address').value)
        form.append('phone',document.getElementById('phone').value)
    update(form,'data')
    })

}