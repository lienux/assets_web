// @author M. Ali Imron
$(document).ready(function(){
    $('#loader').hide()  

    $('#login').click(function(){
        var formData = new FormData($('#form-login form')[0]);
        var urlData = base_url + 'login/aksi_login';
        var faloader = 
        '<div class="d-flex justify-content-center">'+
            '<div class="spinner-border text-danger" role="status">'+
                '<span class="sr-only">Loading...</span>'+
            '</div>'+
        '</div>';

        $.ajax({
            type: 'POST',
            url: urlData,
            dataType: 'JSON',
            data: formData,
            contentType: false,
            processData: false,
            beforeSend: function(e) {
                $('#loader-login').html(faloader)
                if(e && e.overrideMimeType) {
                    e.overrideMimeType('application/jsoncharset=UTF-8')
                }
            },
            complete: function(){
                $('#loader-login').html('');
            },
            success: function(response){
                if(response.status == 'sukses'){
                    location.href = base_url + 'admin';
                }else{ 
                    $('#pesan-error').html(response.pesan).show()
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText)
            }
        });
    });
});