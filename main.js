var form = document.getElementById('form');
var post = document.getElementById('post');
var args = window.location.search;

/*
//Wariant I - nie działa :)

if (args) {
    post.style.display = 'block';
    
    args = args.substring(1);
    args = args.split('&');
    
    argsObject = {};
    for (var i = 0; i < args.length; i++) {
        var s = args[i].split('=');
        argsObject = [s[0]] = s[1];
    }
    
    var text = "";
    
    
    if (argsObject.text) {
        text += "<p>" + argsObject.text + "</p><br>";
    }
    
    if (argsObject.imglink) {
        text += "<img src='" + argsObject.imglink + "'>"; 
    }
    
    post.innerHTML = text;
    
} else {
    form.style.display = "block";
}

*/

//Wariant II - działa, ale nie do końca :)

 if (args) {
        post.style.display = "block";
     
        args = args.substring(1);
        args = args.split("&");
     for (var i = 0; i < args.length; i++) {
         var s = args[i].split("=");
         args[i] = {
             Name: s[0],
             Value: s[1]
         }
     }
    
      var text = "";
      for (var i = 0; i < args.length; i++) {
          text += "<p>" + args[i].Value + "</p><br>";
      }
     
       post.innerHTML = text;
     
    } else {
        form.style.display = "block";
    }
        
