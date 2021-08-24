$(document).ready(function(){
    	   $('#submit-btn').click(function() {
    	   	if ($('js/jquery.validate.min.js').validate) {
    	   		$('#main_form_ajax').submit(function(){
    	   		 $.ajax({
    	   		 type:"POST",
    	   		 url: "mail.php",
    	   		 data: $(this).serialize()
    	   		 }).done(function(){
    	   		 $(this).find("input").val("");
    	   		 $('#modal_thanks').modal('show');
    	   		 $('#main_form_ajax').trigger("reset");
    	   		 });
    	   		 return false;
    	   		 });
    	   	} else {
    	   		alert('something went wrong!!!')
    	   	}
    	   })
    	   $('#submit-btn').click(function() {
    	   	if ($('js/jquery.validate.min.js').validate) {
    	   		$('#main_form_ajaxx').submit(function(){
    	   		 $.ajax({
    	   		 type:"POST",
    	   		 url: "mail.php",
    	   		 data: $(this).serialize()
    	   		 }).done(function(){
    	   		 $(this).find("input").val("");
    	   		 $('#modal_thanks').modal('show');
    	   		 $('#main_form_ajaxx').trigger("reset");
    	   		 });
    	   		 return false;
    	   		 });
    	   	} else {
    	   		alert('something went wrong!!!')
    	   	}
    	   })
    	   $('#submit-btn').click(function() {
    	   	if ($('js/jquery.validate.min.js').validate) {
    	   		$('#main_form_ajaxxx').submit(function(){
    	   		 $.ajax({
    	   		 type:"POST",
    	   		 url: "mail.php",
    	   		 data: $(this).serialize()
    	   		 }).done(function(){
    	   		 $(this).find("input").val("");
    	   		 $('#modal_thanks').modal('show');
    	   		 $('#main_form_ajaxxx').trigger("reset");
    	   		 });
    	   		 return false;
    	   		 });
    	   	} else {
    	   		alert('something went wrong!!!')
    	   	}
    	   })
    	   
    	});