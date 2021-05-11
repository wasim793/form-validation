const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener("submit",(e)=>{
	e.preventDefault();
	checkAll([username,email,password,password2]);
	checklength(username,3,10);
	checklength(password,3,10);
	checkmail(email);
	passwordmatch(password,password2);


});
function checkmail(input){
	console.log(input.value);
    let mail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	let checking = mail.exec(input.value.trim());
    if(!checking){
        showerror(input,"Email is not valid");
    }else{
        showpass(input);
    }
  }


  function checklength(input,min,max){
	  console.log(input.value);
	// console.log("hekkk");
	if(input.value.length > max){
		showerror(input,`maximum 10 charecter`);
	}
	else if(input.value.length < min){
		showerror(input,`mininmum of 3 charectres`);
	}
	else{
		showpass(input);
	}

}

  function passwordmatch(pass1,pass2){

    if(pass1.value !==pass2.value){
        showerror(pass2,`password didn't match`);
	}


  }



  


function checkAll(inputArr){
	inputArr.forEach(function(input){
		if(input.value.trim() === ''){
			showerror(input,`required feild`);
		}
		else{
			showpass(input);
		}
	}
	);

	

}


function showerror(input,message){
	// console.log("kk");
	let formcontrol = input.parentElement;
	let small = formcontrol.querySelector("small");

	formcontrol.className = "form-control error";

	small.innerHTML = message;
}

function showpass(input){
	let formcontrol = input.parentElement;
	formcontrol.className = "form-control success"
}

