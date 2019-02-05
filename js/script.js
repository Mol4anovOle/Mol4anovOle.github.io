function checkForm(form) {

     this.submitForm = function (e) {
         var  fields = form.querySelectorAll('input[data-validation]');
        e.preventDefault();
        var validationResult = true;

        fields.forEach(function (elem) {
            var validationInfo = validateField(elem);
            var messageShow = elem.parentNode.querySelector('.message-text');
            var spanMsg = document.createElement('p');
            if (validationInfo !== true) {
                spanMsg.classList.add('message-text');
                elem.classList.add('wrong-input');

                if (!messageShow) {
                    elem.parentNode.append(spanMsg);
                    spanMsg.innerHTML = validationInfo;
                } else {
                    elem.parentNode.lastElementChild.innerHTML = validationInfo;
                }
                validationResult = false;
            }
            else if (validationInfo === true && messageShow){
                elem.style.backgroundColor = 'green';
                elem.parentElement.removeChild(elem.parentElement.lastElementChild);
            }
            else if (validationInfo === true) {
                elem.style.backgroundColor = 'green';
            }
        });
        return validationResult ? alert('Validation passed =)') : 0;
    };

    var getMessage = function(field) {
        return `${field} is not valid`;
    };

   var patterns = {
        'email': function (str) {
            return /[a-zA-Z0-9]+@[a-z]+(\.[a-z]{2,4})$/.test(str)
                ? true
                : getMessage('Email address');
        },
        'password': function (str) {
            return /([a-z]+[A-Z]?[0-9]+)/.test(str)
                ? true
                : getMessage('Password');
        },
        'name': function (str) {
            return /[a-zA-Z]{2,}/.test(str)
                ? true
                : getMessage('Name');
        },
        'address': function (str) {
            return /[a-zA-Z]{2,}/.test(str)
                ? true
                : getMessage('Address');
        },
    };

     function validateField(inputField) {
         if (inputField.value === '')
             return 'This field is required!';
        return patterns[inputField.dataset.validation](inputField.value);
    }
    document.getElementById('submit').addEventListener('click', this.submitForm);
}

checkForm.call(null, document.getElementById('sign-up-form'));
