$(document).on('click','#delete',function(e){
    e.preventDefault()
    var uid=$('#userId')
    var uname=$('#name')
    var uemail=$('#email')
    var uaddress=$('#address')
    var uphone=$('#phone')
    var deleteData = {
        id: uid.val(),
        name: uname.val(),
        email: uemail.val(),
        address: uaddress.val(),
        phone: uphone.val()
    }
    $.ajax({
        type: "POST",
        url: "/deleteEmployee",
        data: deleteData,
        // dataType: "dataType",
        success: function (response) {
           window.location.replace('/')
        }
    });

   })