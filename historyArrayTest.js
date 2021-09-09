 const history = []
 let i = 0;
 let Previouspage


 function A(){
     history.push("a");   // Adds "a" to history array 
     Previouspage = history[i++ -1] // Incriment Array for every new addition and go one index back
 }

 function B(){
    history.push("b");   // Adds "a" to history array 
     
    Previouspage = history[i++ -1]// Incriment Array for every new addition and go one index back
}

function C(){
    history.push("c");   // Adds "a" to history array 
     
    Previouspage = history[i++ -1]// Incriment Array for every new addition and go one index back
}