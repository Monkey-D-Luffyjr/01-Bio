//This is a function that displays an alert to the user on the web page.
function showMessage(){
    alert("Yoooo, I'm finally running via an extended js file!!!!");
}


function randomMessage(){
    var quotes = ['My name\'s Moses', 'I loveeeee playing Local Warfare Re-portable with the bros', 'I also love watching anime and practicing Japaneseeee.']
    var choice = quotes[Math.floor(Math.random() * quotes.length)];
    alert("My random message is: " + choice);
}