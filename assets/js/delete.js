$(document).on('click','#delete',function(e){
    e.preventDefault()
    let id=$(this).attr('did')
     alert(id) 
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
    $('#userDeleteId').val(id)
    
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
    });

   })

 