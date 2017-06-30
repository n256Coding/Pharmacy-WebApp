/**
 * Created by Nishan on 6/3/2017.
 */
'use strict';

function checkBlank(word, showAlert, reason){
    if(word.toString().trim() == ""){
        showAlert(reason);
        return false;
    }
}

function showAlert(reason){
    var alertMessage = document.getElementById('validationReason');
    var validationErrorDiv = document.getElementById('validationErrorMessage');
    validationErrorDiv.style.visibility = visible;
    alertMessage.innerHTML = reason.toString();
}