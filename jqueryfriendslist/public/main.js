$(document).ready(function(){ //ajax = asynchronous javascript and xml
	let names;

	$.ajax({ //javascript and ajax work independently. javascript goes top to bottom and ajax is busy inside the function
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
	}).done(function(data){//differed promise
		names = data
		console.log(data);
		console.log(names);

	})

	console.log("Hello"); //rest - representable state transfer
	console.log(names); //the variable is coming from ajax which is busy talking to the browser

	$(submit).on('click', function(){
		let person = {
			name: $(usr).val(),
			email: $(email).val()
		}
		$.ajax({
		type: 'POST',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall', //before refreshing the url, refresh the localhost:3000
		data: person
	}).done(function(info){
		console.log(info);
	})
	})
})
//create a form with submit button, that submit button posts request