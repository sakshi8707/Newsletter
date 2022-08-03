/* Register Staff
  --------------------------------------------------------------*/
$(document).on('keydown','#staff-register-form input',function(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
});
$(document).on('click','button#signupStaff',function(e) {

    if ($('#staff-register-form')[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    } else {
        $('#register-error').slideDown().html('Processing...');
    	$.ajax({
    		type: "POST",
    		url: 'action-register-staff.php',
    		data: $("#staff-register-form").serialize(),
    		dataType: 'json',
    		success: function(response){
    				if(response.statusCode == 200){
                        $('#staff-register-form').removeClass('was-validated');
                        $("#staff-register-form")[0].reset();
                        $('#register-error').slideUp().html('');
                        //$('#register-success').slideDown().html(response.msg);
                        $('#ajax-success-modal h2').html(response.msg);
                        $('#ajax-success-modal').modal('show');
                        setTimeout(function(){ window.location = '/'; }, 2000);
    				}
    				else if(response.statusCode == 201){
    				   $('#register-success').slideUp().html('');
    				   $('#register-error').slideDown().html(response.msg);
    				}
    		}
    	});
    }
    $('#staff-register-form').addClass('was-validated');

});

/* Register
  --------------------------------------------------------------*/
$(document).on('keydown','#register-form input',function(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
});
$(document).on('click','button#signup',function(e) {

    if ($('#register-form')[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    } else {
        $('#register-error').slideDown().html('Processing...');
    	$.ajax({
    		type: "POST",
    		url: 'action-register.php',
    		data: $("#register-form").serialize(),
    		dataType: 'json',
    		success: function(response){
    				if(response.statusCode == 200){
                        $('#register-form').removeClass('was-validated');
                        $("#register-form")[0].reset();
                        $('#register-error').slideUp().html('');
                        //$('#register-success').slideDown().html(response.msg);
                        $('#ajax-success-modal h2').html(response.msg);
                        $('#ajax-success-modal').modal('show');
                        setTimeout(function(){ window.location = '/'; }, 2000);
    				}
    				else if(response.statusCode == 201){
    				   $('#register-success').slideUp().html('');
    				   $('#register-error').slideDown().html(response.msg);
    				}
    		}
    	});
    }
    $('#register-form').addClass('was-validated');

});

/* Login
  --------------------------------------------------------------*/
$(document).on('keydown','#login-form input',function(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
});
$(document).on('click','button#signin',function(e) {

    if ($('#login-form')[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    } else {
    	$.ajax({
    		type: "POST",
    		url: 'action-login.php',
    		data: $("#login-form").serialize(),
    		dataType: 'json',
    		success: function(response){
    				if(response.statusCode == 200){
                        $('#login-form').removeClass('was-validated');
                        $("#login-form")[0].reset();
                        $('#login-error').slideUp().html('');
                        //$('#login-success').slideDown().html(response.msg);
                        $('#ajax-success-modal h2').html(response.msg);
                        $('#ajax-success-modal').modal('show');
                        setTimeout(function(){ window.location = '/'; }, 2000);
    				}
    				else if(response.statusCode == 201){
    				   $('#login-success').slideUp().html('');
    				   $('#login-error').slideDown().html(response.msg);
    				}
    		}
    	});
    }
    $('#login-form').addClass('was-validated');
});

/* Reset Password
  --------------------------------------------------------------*/
$(document).on('keydown','#reset-password-form input',function(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
});
$(document).on('click','button#reset_password',function(e) {

    if ($('#reset-password-form')[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    } else {
    	$.ajax({
    		type: "POST",
    		url: 'action-reset-password.php',
    		data: $("#reset-password-form").serialize(),
    		dataType: 'json',
    		success: function(response){
    				if(response.statusCode == 200){
                        $('#reset-password-form').removeClass('was-validated');
                        $("#reset-password-form")[0].reset();
                        $('#reset-password-error').slideUp().html('');
                        $('#ajax-success-modal h2').html(response.msg);
                        $('#ajax-success-modal').modal('show');
                        setTimeout(function(){ window.location = '/login'; }, 2000);
    				}
    				else if(response.statusCode == 201){
    				   $('#reset-password-success').slideUp().html('');
    				   $('#reset-password-error').slideDown().html(response.msg);
    				}
    		}
    	});
    }
    $('#reset-password-form').addClass('was-validated');
});

$(document).on('click','button#reset_password_again',function(e) {

    window.location = '/reset-password';
});

/* Check Reset Token
  --------------------------------------------------------------*/
$(document).ready(function(){
    if ($("#change-password-form").length > 0) {
    
        var param = /token=([^&]+)/.exec(window.location.href)[1];
        var token = param ? param : '0';    
    	$.ajax({
    		type: "POST",
    		url: 'action-reset-password.php',
    		data: { type: 2, check_token: token },
    		dataType: 'json',
    		success: function(response){
    				if(response.statusCode == 200){
                        $("button#reset_password_again").hide();
                        $("button#change_password").show();
                        $("#change-password-form").show();
                        $("#checkType").val(3);
                        $("#checkToken").val(token);
                        $('#change-password-success').slideDown().html(response.msg);
                        setTimeout(function(){ $('#change-password-success').slideUp().html(''); }, 2000);
    				}
    				else if(response.statusCode == 201){
    				   $("button#reset_password_again").show();
    				   $('#change-password-success').slideUp().html('');
    				   $('#change-password-error').slideDown().html(response.msg);
    				}
    		}
    	});
    }
});

/* Change Password
  --------------------------------------------------------------*/
$(document).on('keydown','#change-password-form input',function(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
});
$(document).on('click','button#change_password',function(e) {

    if ($('#change-password-form')[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    } else {
    	$.ajax({
    		type: "POST",
    		url: 'action-reset-password.php',
    		data: $("#change-password-form").serialize(),
    		dataType: 'json',
    		success: function(response){
    				if(response.statusCode == 200){
                        $('#change-password-form').removeClass('was-validated');
                        $("#change-password-form")[0].reset();
                        $('#change-password-error').slideUp().html('');
                        $('#ajax-success-modal h2').html(response.msg);
                        $('#ajax-success-modal').modal('show');
                        setTimeout(function(){ window.location = '/login'; }, 2000);
    				}
    				else if(response.statusCode == 201){
    				   $('#change-password-success').slideUp().html('');
    				   $('#change-password-error').slideDown().html(response.msg);
    				}
    		}
    	});
    }
    $('#change-password-form').addClass('was-validated');
});

/* Close ajax success modal
  --------------------------------------------------------------*/
$('#ajax-success-modal').on('show.bs.modal', function (e) {
	var myModal = $(this);
	clearTimeout(myModal.data('hideInterval'));
	myModal.data('hideInterval', setTimeout(function (e) {
		myModal.modal('hide');
	}, 2000));
});

/* Manage FAQ
  --------------------------------------------------------------*/
$(document).on('click','#record-add-faq',function(e) {
	$.ajax({
		type: 'POST',
		url: 'action-dashboard-faq.php',
		data: $('#add-form-faq').serialize(),
		dataType: 'json',
		success: function(response){
				if(response.statusCode == 200){
					$('#addModal').modal('hide');
                    location.reload();
				}
				else if(response.statusCode == 201){
				   alert(response.msg);
				}
		}
	});
});
	
$(document).on('click','.record-update-faq',function(e) {
	var id = $(this).attr("data-id");
	var faqQuestion = $(this).attr("data-faq-question");
	var faqAnswer = $(this).attr("data-faq-answer");
	var faqOrder = $(this).attr("data-faq-order");
	$('#id_e').val(id);
	$('#faq_question_e').val(faqQuestion);
	$('#faq_answer_e').val(faqAnswer);
	$('#faq_order_e').val(faqOrder);
});

$(document).on('click','#record-update-faq',function(e) {
	console.log($('#update-form-faq').serialize());
	$.ajax({
	    type: 'POST',
		url: 'action-dashboard-faq.php',
		data: $('#update-form-faq').serialize(),
		dataType: 'json',
		success: function(response){
			if(response.statusCode == 200){
				$('#editModal').modal('hide');
                location.reload();						
			}
			else if(response.statusCode == 201){
			   alert(response.msg);
			}
		}
	});
});

$(document).on("click", ".record-delete-faq", function() { 
	var id = $(this).attr("data-id");
	$('#id_d').val(id);
});

$(document).on("click", "#record-delete-faq", function() {
	$.ajax({
	    type: 'POST',
		url: 'action-dashboard-faq.php',
		data: $('#delete-form-faq').serialize(),
		dataType: 'json',
		cache: false,
		success: function(response) {
    		if(response.statusCode == 200){
        		$('#deleteModal').modal('hide');
        		$("#" + response.id).remove();
    		}
    		else if(response.statusCode == 201){
    		   alert(response.msg);
    		}		
		}
	});
});

$(document).on("click", "#record-delete-multiple-faq", function() {
	var records = [];
	$(".record_checkbox:checked").each(function() {
		records.push($(this).data('record-id'));
	});
	if(records.length <=0) {
		alert("Please select records."); 
	} 
	else { 
		WRN_PROFILE_DELETE = "Are you sure you want to delete " + (records.length > 1 ? records.length + ' rows?' : 1 + ' row?');
		var checked = confirm(WRN_PROFILE_DELETE);
		if(checked === true) {
			var selected_values = records.join(",");

			$.ajax({
				type: 'POST',
		        url: 'action-dashboard-faq.php',
		        dataType: 'json',
				cache:false,
				data:{
					type: 44,						
					id : selected_values
				},
				success: function(response) {
            		if(response.statusCode == 200){
    					var ids = response.id.split(",");
    					for (var i=0; i < ids.length; i++ ) {	
    						$("#" + ids[i]).remove(); 
    					}
            		}
            		else if(response.statusCode == 201){
            		   alert(response.msg);
            		}					
				} 
			});
		}  
	} 
});

$(document).ready(function(){
    if ($("#dashboard-faq").length > 0) {
    	$('[data-toggle="tooltip"]').tooltip();
    	var checkbox = $('table tbody input[type="checkbox"]');
    	$("#selectAll").click(function(){
    		$('input:checkbox').not(this).prop('checked', this.checked);
    	});
    	
    	$.ajax({
    		type: 'POST',
    		url: 'action-dashboard-faq.php',
    		data: { type: 2 },
    		dataType: 'json',
    		success: function(response){
    			if(response.statusCode == 200){

                    var tbodyEl = $('tbody');
    
                    tbodyEl.html('');
                    var i = 1;
    
                    $("#countFAQ").html("("+response.results.length+")");
                    response.results.forEach(function(results) {
                        tbodyEl.append('\
            				<tr id="' + results.faq_id + '">\
            				    <td>\
        							<span class="custom-checkbox">\
        								<input type="checkbox" class="record_checkbox" data-record-id="' + results.faq_id + '">\
        								<label for="checkbox2"></label>\
        							</span>\
        						</td>\
            					<td>' + i + '</td>\
            					<td>' + results.question_meta + '</td>\
            					<td>' + results.answer_meta + '</td>\
            					<td>' + results.faq_order + '</td>\
            					<td class="td-actions">\
            						<a href="#editModal" class="edit" data-toggle="modal">\
            							<i class="la la-edit edit record-update-faq" data-toggle="tooltip" \
            							data-id="' + results.faq_id + '"\
            							data-faq-question="' + results.question_meta + '"\
            							data-faq-answer="' + results.answer_meta + '"\
            							data-faq-order="' + results.faq_order + '"\
            							title="Edit"></i>\
            						</a>\
            						<a href="#deleteModal" class="record-delete-faq"\
            						data-id="' + results.faq_id + '"\
            						data-toggle="modal">\
            						<i class="la la-close delete" data-toggle="tooltip" title="Delete"></i>\
            						</a>\
                                </td>\
            				</tr>\
                        ');
                        i++;
                    });
                
    			}
    			else if(response.statusCode == 201){
    			   alert(response.msg);
    			}
    		}
    	});
    }
});

/* Manage Users
  --------------------------------------------------------------*/
$(document).on('click','#user-add',function(e) {
	alert('Currently disabled.');
});
	
$(document).on('click','.user-update',function(e) {
	var id = $(this).attr("data-id");
	var name = $(this).attr("data-name");
	var email = $(this).attr("data-email");
	$('#id_u').val(id);
	$('#name_u').val(name);
	$('#email_u').val(email);
});

$(document).on('click','#user-update',function(e) {
	alert('Currently disabled.');
});

$(document).on("click", ".user-delete", function() { 
	var id = $(this).attr("data-id");
	$('#id_d').val(id);
});

$(document).on("click", "#user-delete", function() {
	alert('Currently disabled.');
});

$(document).on("click", "#user-delete-multiple", function() {
	var user = [];
	$(".user_checkbox:checked").each(function() {
		user.push($(this).data('user-id'));
	});
	if(user.length <=0) {
		alert("Please select records."); 
	} 
	else { 
		WRN_PROFILE_DELETE = "Are you sure you want to delete " + (user.length > 1 ? user.length + ' rows?' : 1 + ' row?');
		var checked = confirm(WRN_PROFILE_DELETE);
		if(checked === true) {
			var selected_values = user.join(",");

			alert('Currently disabled.');
		}  
	} 
});

$(document).ready(function(){
    if ($("#dashboard-users").length > 0) {
    	$('[data-toggle="tooltip"]').tooltip();
    	var checkbox = $('table tbody input[type="checkbox"]');
    	$("#selectAll").click(function(){
    		if(this.checked){
    			checkbox.each(function(){
    				this.checked = true;                        
    			});
    		} else{
    			checkbox.each(function(){
    				this.checked = false;                        
    			});
    		} 
    	});
    	checkbox.click(function(){
    		if(!this.checked){
    			$("#selectAll").prop("checked", false);
    		}
    	});
    	
    	$.ajax({
    		type: 'POST',
    		url: 'action-dashboard.php',
    		data: { type: 2, module: 'users' },
    		dataType: 'json',
    		success: function(response){
    			if(response.statusCode == 200){

                    var tbodyEl = $('tbody');
    
                    tbodyEl.html('');
                    var i = 1;
    
                    var reverseArr = response.users.slice().reverse();
                    $("#userCount").html("("+reverseArr.length+")");
                    reverseArr.forEach(function(user) {
                        tbodyEl.append('\
            				<tr id="' + user.user_id + '">\
            				    <td>\
        							<span class="custom-checkbox">\
        								<input type="checkbox" class="user_checkbox" data-user-id="' + user.user_id + '">\
        								<label for="checkbox2"></label>\
        							</span>\
        						</td>\
            					<td>' + i + '</td>\
            					<td>' + user.user_first_name + '</td>\
            					<td>' + user.user_stream + '</td>\
            					<td>' + user.user_year_passing + '</td>\
            					<td>' + user.user_email + '</td>\
            					<td class="td-actions">\
            						<a href="#editUserModal" class="edit" data-toggle="modal">\
            							<i class="la la-edit edit user-update" data-toggle="tooltip" \
            							data-id="' + user.user_id + '"\
            							data-name="' + user.user_first_name + '"\
            							data-stream="' + user.user_stream + '"\
            							data-year-passing="' + user.user_year_passing + '"\
            							data-email="' + user.user_email + '"\
            							title="Edit"></i>\
            						</a>\
            						<a href="#deleteUserModal" class="user-delete"\
            						data-id="' + user.user_id + '"\
            						data-toggle="modal">\
            						<i class="la la-close delete" data-toggle="tooltip" title="Delete"></i>\
            						</a>\
                                </td>\
            				</tr>\
                        ');
                        i++;
                    });
                
    			}
    			else if(response.statusCode == 201){
    			   alert(response.msg);
    			}
    		}
    	});
    }
});
