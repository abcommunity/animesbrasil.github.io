
const original_border_radius = '20px';

function inpt(obj) {
    if(obj.value.length >= 1){
        obj.style.borderRadius = '8px';
    }
    else{
        obj.style.borderRadius = original_border_radius;
    }
}

function ovr(obj, ovr) {
    if(ovr){
        obj.style.borderRadius = '8px';
    }
    else{
        if(obj.value.length == 0){
            obj.style.borderRadius = original_border_radius;
        }
    }
}
