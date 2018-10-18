const original_border = '2px solid rgba(30,30,30, 0.5)';
const original_border_radius = '20px';

function inpt(obj) {
	if(obj.value.length >= 1){
		obj.style.border = '2px solid #9a4183';
		obj.style.borderRadius = '8px';
	}
	else{
		obj.style.border =  original_border;
		obj.style.borderRadius = original_border_radius;
	}
}

function ovr(obj, ovr) {
	if(ovr){
		obj.style.border = '2px solid #9a4183';
		obj.style.borderRadius = '8px';
	}
	else{
		if(obj.value.length == 0){
			obj.style.border = original_border;
			obj.style.borderRadius = original_border_radius;
		}
	}
}