function projectClick(){
    //when clicked, remove current screen and replace with 
    //screen clicked by user
    $('#projectBtn').on('click', function(e){
        $('main').children().remove();
        $('main').html(
        '<section class="projSect"> '+
                '<h2 class="projTitle">Projects</h2>'+
                '<div class="prjContainer">'+
                    '<div class="prjTitleContainer">'+
                        '<div class="prjTitle">'+
                            '<h3>Quiz App</h3>'+
                        '</div>'+
                        '<div>'+
                            '<a href="https://github.com/marcus-stevenson/QuizAppMarcus" class="prjLinks">Repository</a>'+
                            '<a href="https://marcus-stevenson.github.io/QuizAppMarcus/" class="prjLinks">Live Site</a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="prjInfoContainer">'+
                        '<div class="prjDescription">'+
                            '<h4>Description:</h4>'+
                            '<p>Take a 10 question multiple choice quiz to test your knowledge of famous painters and their works!</p>'+
                        '</div>'+
                        '<div class="prjTech">'+
                            '<h4>Technologies:</h4>'+
                            '<ul>'+
                                '<li>HTML</li>'+
                                '<li>CSS</li>'+
                                '<li>JavaScript</li>'+
                                '<li>JQuery</li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<div class="prjScreencap">'+
                        '<img src="images/quizAppScShot.PNG">'+
                    '</div>'+
                '</div>'+
            '</section>')
    });
}
function aboutClick(){
    //when clicked, remove current screen and replace with 
    //screen clicked by user, update current screen variable
    $('#aboutBtn').on('click', function(e){
        $('main').children().remove();
        $('main').html(
            '<section class="aboutSect">'+
               '<h2 class="aboutTitle">About Me</h2>'+
                '<div class="aboutContainer">'+
                    '<div class="aboutInnerContainer">'+
                        '<p>'+
                            '<img src="images/cuteSelfie.jpg" class="headShot">'+
                            "For as long as I can remember, I've had a fascination with things and their inner workings. From a young age my parents would"+
                            "catch me dissasembling flashlights and other junk in my bedroom. As I see it, this fascination pushed me to understand how the"+
                            "world works, but more importantly it pushed me to imagine and actualize ideas of my own. I have always gravitated toward"+
                            "learning any skill or technique that would allow me to bring something from my imagination into reality, whether it's drawing,"+
                            "painting, woodworking, sculpting, electronics, or even coding. Creating and building will always be my passions, whatever"+
                            "the medium I'm working in. Considering that the web is the most powerful and pervasive medium of our time, I couldn't resist"+
                            "learning the tools to manipulate it to my vision!"+
                        '</p>'+
                    '</div>' + 
                '</div>'+
            '</section>');
});
}
function linksClick(){
    //when clicked, remove current screen and replace with 
    //screen clicked by user, update current screen variable
    $('#linksBtn').on('click', function(e){
        $('main').children().remove();
        $('main').html(
            '<section class="linksSect">'+
                '<h2 class="linksTitle">Links</h2>'+
                '<div class="externalLinks">'+
                    '<a href="https://github.com/marcus-stevenson"><img src="images/GitHub_Logo.png"></a>'+
                    '<a href="https://www.linkedin.com/"><img src="images/LI-Logo.png"></a>'+
                '</div>'+    
            '</section>'); 
});
}
function allClicks(){
    //run funtions to handle other button clicks, 
    //pass current screen present as arguemnt
    projectClick();
    aboutClick();
    linksClick();
}
$(allClicks());