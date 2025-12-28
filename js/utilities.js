// to get input field value by id----
function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputvalueNumber = parseInt(inputValue)
    return inputvalueNumber;
}

// to get text value by id
function getTextValuebyId(id){
    const textValue = document.getElementById(id).innerText;
    const textvalueNumber = parseInt(textValue);
    return textvalueNumber;
}

// to get whole section by id

function getSectionById(id){
    const gotSection = document.getElementById(id);
    return gotSection;
}
