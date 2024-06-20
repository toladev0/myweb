$(document).ready(function(){
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);
    let message = "";

    if(date <= 12){
        message = "Good Morning";
    }
    if(date > 12){
        message = "Good Afternoon"
    }
    if(date > 17){
        message = "Good Evening"
    }

    $('#headingText').empty().append(message + " From Lon Tola");
})