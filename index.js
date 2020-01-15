function projectClick(){
    //when clicked, remove current screen and replace with 
    //screen clicked by user
    $('#projectBtn').on('click', function(e){
        $('#aboutBtn').attr('aria-pressed', false);
        $('#linksBtn').attr('aria-pressed', false);
        $('#projectBtn').attr('aria-pressed', true);
        $('#aboutBtn').attr('aria-pressed', false);
        $('#linksBtn').attr('aria-pressed', false);
        $('#projectBtn').attr('aria-pressed', true);
        $('main').children().remove();
        $('main').html(
        '<section class="projSect"> '+
                '<h2 class="projTitle">Projects</h2>'+
                //second project
                '<div class="prjContainer">'+
                    '<div class="prjTitleContainer">'+
                        '<div class="prjTitle">'+
                            '<h3>Easy Best-Seller Search</h3>'+
                        '</div>'+
                        '<div>'+
                            '<a href="https://github.com/marcus-stevenson/QuizAppMarcus" class="prjLinks">Repository</a>'+
                            '<a href="https://marcus-stevenson.github.io/QuizAppMarcus/" class="prjLinks">Live Site</a>'+
                        '</div>'+
                    '</div>'+
                    '<div class="prjInfoContainer">'+
                        '<div class="prjDescription">'+
                            '<h4>Description:</h4>'+
                            '<p>Easy! Best-Seller Search allows users to search for NYT Best-Sellers and contextual information about their authors by making calls to the NTY Books API and Wikipedia API.</p>'+
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
                        '<img src="images/NTYscShot.PNG">'+
                    '</div>'+
                '</div>'+
                //
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
    //update aria-pressed attributes
    $('#aboutBtn').on('click', function(e){
        $('#aboutBtn').attr('aria-pressed', true);
        $('#linksBtn').attr('aria-pressed', false);
        $('#projectBtn').attr('aria-pressed', false);
        $('main').children().remove();
        $('main').html(
            '<section class="aboutSect">'+
               '<h2 class="aboutTitle">About Me</h2>'+
                '<div class="aboutContainer">'+
                    '<div class="aboutInnerContainer">'+
                        '<p>'+
                            '<img src="images/cuteSelfie.jpg" class="headShot" alt="photo of Marcus Stevenson wearing a blue, hooded sweater">'+
                            "For as long as I can remember, I've had a fascination with things and their inner workings. From a young age, my"+ 
                            "parents would catch me disassembling flashlights and other junk in my bedroom. As I see it, this fascination pushed"+
                            "me to understand how the world works, but more importantly, it pushed me to imagine and actualize ideas of my own."+ 
                            "I have always gravitated toward learning any skill or technique that would allow me to bring something from my"+ 
                            "imagination into reality, whether it's drawing, painting, woodworking, sculpting, electronics, or even coding."+ 
                            "Creating and building will always be my passions, whatever the medium I'm working in. Considering that the web is the"+ 
                            "most powerful and pervasive medium of our time, I couldn't resist learning the tools to manipulate it to my vision!"+
                        '</p>'+
                    '</div>' + 
                '</div>'+
            '</section>');
});
}
function linksClick(){
    //when clicked, remove current screen and replace with 
    //screen clicked by user, update current screen variable
    //update aria-pressed attributes
    $('#linksBtn').on('click', function(e){
        $('#aboutBtn').attr('aria-pressed', false);
        $('#linksBtn').attr('aria-pressed', true);
        $('#projectBtn').attr('aria-pressed', false);
        $('main').children().remove();
        $('main').html(
            '<section class="linksSect">'+
                '<h2 class="linksTitle">Links</h2>'+
                '<div class="externalLinks">'+
                    '<a href="mailto:stevensonmarcus193@gmail.com" target="_blank" class="linkImage"><img src="images/gmailLogo.png" alt="gmail logo"></a>'+
                    '<a href="https://github.com/marcus-stevenson" target="_blank"><img src="images/GitHub_Logo.png" alt="GitHub logo"></a>'+
                    '<a href="https://www.linkedin.com/" target="_blank"><img src="images/LI-Logo.png" alt="LinkedIn logo"></a>'+
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