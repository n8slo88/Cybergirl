const body = document.querySelector('body')
const grid = document.createElement('div')
const heart = document.createElement('div')
const intro = document.createElement('audio')
const email = document.createElement('audio')
const music = document.createElement('audio')
const noemailres = document.createElement('audio')
const yesemailres = document.createElement('audio')
const frown = document.createElement('img')
const smile = document.createElement('img')
const face = document.createElement('div')
const popup = document.createElement('div')
const yesbutton= document.createElement('button')
const nobutton=document.createElement('button')

popup.classList.add('popup')
frown.classList.add('faces')
smile.classList.add('faces')

frown.setAttribute("src",  "faces/frown.png")
smile.setAttribute("src", 'faces/smile.png')

intro.src ="audio/ellintro.mp3"
email.src="audio/emailaddressask.mp3"
music.src="audio/sound.wav"
noemailres.src ="audio/noemailres.mp3"
yesemailres.src ="audio/thanksemailsent.mp3"

yesbutton.classList.add('button')
yesbutton.innerHTML ="<h2>Y</h2>"
nobutton.innerHTML ="<h2>N</h2>"
nobutton.classList.add('button')

grid.classList.add('grid')
heart.classList.add('heart')

let bluevalue = 255

//start everything site needs event handler to avoid errors from  audio.play()
body.classList.add('start')
body.innerHTML ="<div id='go'><h1> >>GO>> </h1></div>"
const gostart = document.getElementById('go')
go.addEventListener('click', start)

///background music
function start(){
    musicGo();
    opening();
    body.classList.remove('start')
    body.innerHTML=""
    body.appendChild(grid)
    grid.appendChild(heart)
    heart.appendChild(face)
}

function musicPlay(){
    music.currentTime=0;
    music.play()
}
 function musicGo(){
 musicPlay()
 setInterval(musicPlay, 7000)}


 ///speach and interaction
 function showPopup(){
     heart.appendChild(popup)
     popup.appendChild(yesbutton)
     popup.appendChild(nobutton)
     nobutton.addEventListener('click', byebye)
     yesbutton.addEventListener('click', showArt)
 }

function showArt(){
    popup.removeChild(yesbutton)
    popup.removeChild(nobutton)
    popup.classList.remove('popup')
    popup.classList.add('popuptwo')
    popup.innerHTML="<h2> Here are some additional links</h2><br>\
    <a href='https://uhtwoedison.netlify.app/' target='_blank'> UH.TWO.EDISON</a>"
     window.open('https://uhonehoudini.netlify.app/', "_new");
}
function byebye(){
    body.style.backgroundColor ="gray";
     heart.removeChild(popup)
     const toobad =document.createElement('audio')
     toobad.src = "audio/toobad.mp3"
     toobad.play()
     showFrown();
 }

function showSmile(){
    face.appendChild(smile)
    setTimeout(removeSmile, 1500)
}

function removeSmile(){
    face.removeChild(smile)
}

function showFrown(){
    face.appendChild(frown)
    setTimeout(removeFrown, 2000)
}

function removeFrown(){
    face.removeChild(frown)
}

function opening(){
    setTimeout(introtalk, 6000)
    }

    function introtalk(){
        intro.play()
        let nameInput = ''
        let name= window.prompt('What is your name?', nameInput )
        if (name === ""){
            showFrown();
            setTimeout(location.reload(), 2000)
        }
        else if (name){
            showSmile();
            setTimeout(emailquestion, 2000)
            body.style.backgroundColor ="yellow"
        }
        else{
            showFrown();
        }
    }

    function emailquestion(){
        email.play()
        emailInput =''
        let emailaddress = prompt('What is your email?', emailInput)
        if (emailaddress === ''){
            showFrown();
            setTimeout(playNoemail, 2000);
            body.style.backgroundColor = "gray"
        }
        else if (emailaddress){
            showSmile();
            yesEmail();
        }
        else{
            showFrown();
            setTimeout(playNoemail, 1000)
            body.style.backgroundColor = "gray"

        }
    }
    function playNoemail(){
        noemailres.play()
    }
    function yesEmail(){
        yesemailres.play();
        body.style.backgroundColor = "FF869E"
        setTimeout(whatTodo, 6000)
    }

    function whatTodo(){
        const viewart = document.createElement('audio');
        viewart.src ='audio/viewart.mp3'
        viewart.play();
        showPopup();

        }

    ///changes Ells heart color

    function goPupilcolor(){
        function subtract(){
            if (bluevalue>0){
                bluevalue --
                heart.style.backgroundColor=`rgb(200, 55, ${bluevalue})`    
        }
        else{
            goUp()
        }
        }
            
        function add(){
            if (bluevalue <255){
                bluevalue ++
                heart.style.backgroundColor=`rgb(200, 55, ${bluevalue})`
        }
        else{
            goDown()
        }
        }

        function goDown(){
                setInterval(subtract, 20);
        }

        function goUp(){
                setInterval(add, 20);
        }

        switch (bluevalue){
            case 0:
                goUp();
                break;
            case 255:
                goDown()
                break;
        }
    }
    goPupilcolor()

    redvalue = 0

    function goEyecolor(){
        function subtract(){
            if (redvalue>0){
                redvalue --
                grid.style.backgroundColor=`rgb(${redvalue},0, 0)`    
        }
        else{
            goUp()
        }
        }
            
        function add(){
            if (redvalue <255){
                redvalue ++
                grid.style.backgroundColor=`rgb(${redvalue}, 0, 0)`
        }
        else{
            goDown()
        }
        }

        function goDown(){
                setInterval(subtract, 40);
        }

        function goUp(){
                setInterval(add, 40);
        }

        switch (redvalue){
            case 0:
                goUp();
                break;
            case 255:
                goDown()
                break;
        }
    }
    goEyecolor()