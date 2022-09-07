$(document).ready(function(){

   $(document).on('click','#editButton',function (){
    let id=$(this).attr('uid')
    //  alert(id) 
    let name=$(this).attr('uname')
    let email=$(this).attr('email')
    let address=$(this).attr('address')
    let phone=$(this).attr('phone')
    $('#name').val(name)
    $('#email').val(email)
    $('#address').val(address)
    $('#phone').val(phone)
    $('#userId').val(id)

   })
   $(document).on('click','#save',function(e){
    e.preventDefault()
    var uid=$('#userId')
    var uname=$('#name')
    var uemail=$('#email')
    var uaddress=$('#address')
    var uphone=$('#phone')
    var updateData = {
        id: uid.val(),
        name: uname.val(),
        email: uemail.val(),
        address: uaddress.val(),
        phone: uphone.val()
    }
    $.ajax({
        type: "POST",
        url: "/editEmployee",
        data: updateData,
        // dataType: "dataType",
        success: function (response) {
           window.location.replace('/')
        }
    });

   })

//    delete
$(document).on('click','#deleteButton', function () {
    let id=$(this).attr('did') 
    $('#userDeleteId').val(id)
});




$(document).on('click','#delete',function(e){
    e.preventDefault()
   
    // let name=$(this).attr('uname')
    // let email=$(this).attr('email')
    // let address=$(this).attr('address')
    // let phone=$(this).attr('phone')
    // var deleteData = {
    //     id: uid.val(),
    //     name: uname.val(),
    //     email: uemail.val(),
    //     address: uaddress.val(),
    //     phone: uphone.val()
    // }
    
    
    var deleteId=$('#userDeleteId').val()
    var adata = {
        id : deleteId

    }
    $.ajax({
        type: "POST",
        url: "/deleteEmployee",
        data: adata,
        // dataType: "dataType",
        success: function (response) {
           window.location.replace('/')
        }
   })
  
});







})

