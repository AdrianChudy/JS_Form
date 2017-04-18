var form = document.getElementById('form');
var post = document.getElementById('post');
var args = window.location.search;

if (args) {
    post.style.display = 'block';
    
    args = args.substring(1);
    args = args.split('&');
    
    argsObject = {};
    for (var i = 0; i < args.length; i++) {
        var s = args[i].split('=');
        argsObject[s[0]] = s[1];
    }
    
    if (argsObject.text) {
        var postText = document.getElementById('post_text');
        if(postText) {
            var text = argsObject.text.split('+').join(' ');
            postText.innerHTML = decodeURIComponent(text);
        }
    }
    
    if (argsObject.imglink) {
        var postImgLink = document.getElementById('post_imglink');
        if(postImgLink) {
            postImgLink.setAttribute('src', decodeURIComponent(argsObject.imglink));
        }
    }
    
} else {
    form.style.display = 'block';
}


