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

})
