function inpt(obj) {
	if(obj.value.length >= 1){
		obj.style.border = '2px solid #9a4183';
		obj.style.borderRadius = '8px';
	}
	else{
		obj.style.border = '2px solid rgb(30,30,30)';
		obj.style.borderRadius = '20px';
	}
}

function ovr(obj, ovr) {
	if(ovr){
		obj.style.border = '2px solid #9a4183';
		obj.style.borderRadius = '8px';
	}
	else{
		if(obj.value.length == 0){
			obj.style.border = '2px solid rgb(30,30,30)';
			obj.style.borderRadius = '20px';
		}
	}
}