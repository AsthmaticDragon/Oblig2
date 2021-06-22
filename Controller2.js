// controller
function selectBar(barNo) {
    if (chosenBar == barNo ) {
        chosenBar = 'none';
        
    }
    else {
        chosenBar = barNo;
    };
    show();
}
function deleteBar() {
    numbers.splice(chosenBar - 1, 1);
    barFeedback = '';
    chosenBar = 'none';
    show();
}
function changeBar() {
    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        barFeedback = 'You need to input a value between 1 and 10 </br>';
    }
    else {
    numbers[chosenBar-1] = inputValue;
    barFeedback = '';
    };
    show();
};
function addBar() {
    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
    barFeedback = 'You need to input a value between 1 and 10 </br>'
    }
    else {
    numbers.push(inputValue);
    barFeedback = '';
    };
    show();
}