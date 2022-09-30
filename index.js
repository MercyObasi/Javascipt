(function(){
    setTimeout(function(){
        var HelloMessage = document.getElementById("hi");
        HelloMessage.innerHTML = "Hello Mercy, this message was generated from DOM manipulation with Javascript. Check index.js file to see it";
    }, 2000);
})();
// basically, i made this message to show up on the screen after 2 seconds.
//I used Immediately invoked function (u can read that up) because usually the process ought to be triggered by an event. I did not want to make it too complex so i did it this way
