
$(document).ready(function() {    
    var $element = $('#bubble-1');
    var newText = 'cout<<"Hello World";';
    bubbleText({
        element: $element,
        newText: newText,
        letterSpeed: 70,
        repeat: Infinity,
    });
})