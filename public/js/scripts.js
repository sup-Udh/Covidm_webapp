// We want the user to give an iput 
// cases (if user requires)
// beds (if user require)
// state where beds availiabe with maps api and stuff 



fetch("https://api.rootnet.in/covid19-in/hospitals/medical-colleges").then((response) => {
    console.log("We got the response")
    console.log(response);
}); 