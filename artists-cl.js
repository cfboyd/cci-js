 var prompt = require('prompt');
prompt.start();
promt.get('Give us a name', function (err, result){

//switch (prompt("Give us a name and we'll give you an artist they like")) {

  case "colin":
    console.log("Japanese pop artists Maywa Denki");
    break;
  case "alden":
    console.log("@BadlandsNPS on Twitter spitting science facts");
    break;
  case "sea":
    console.log("Home Land Security, the new exhibit by the For-Site Foundation");
    break;
  case "christian":
    console.log("NASA video of solar flares in slow motion");
    break;
}
}

prompt.start();

var properties = {
    properties: {
      person: {
        description: 'Enter a name',
        default: 'name',
        pattern: /alden|christian|colin|sea/
      },
      artist: {
          description: ''
      }
    }
}
