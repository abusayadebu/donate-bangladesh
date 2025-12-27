// to get input field value----
function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputvalueNumber = parseInt(inputValue)
    return inputvalueNumber;
}