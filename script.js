
var contentnow = 0;
var titlenow = 0; // not doing anything
var dummy = 0;
var whichcontent = 0;
var previouscontent =0;
const textnow = [];
const titlnow = [];
const notabs = [];

notabs[0] = ["nice"];
notabs[1] = ["nice","ok","cool"];
notabs[2] = ["nice","ok","cool","nic3e","o4k"];

textnow[0] = "Project Projector";
textnow[1] = "Penguin game";
textnow[2] = "Robot simulator";
textnow[3] = "Auction house";
textnow[4] = "Java scripting";
textnow[5] = "Olympiad";
textnow[6] = "Collator";
textnow[7] = "Mobile app";
textnow[8] = "This website";
textnow[9] = "44444thing";
textnow[10] = "555455hing";


window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById('progress-bar').style.height = scrollPercent + '%';
    // document.getElementById('content-now').innerText = scrollPercent;
    //     document.getElementById('title-now').innerText = titlnow[0];

    if(scrollPercent<10){
        whichcontent = 1;
    }
    else if(scrollPercent<20){
        whichcontent = 2;
    }
    else if(scrollPercent<30){
        whichcontent = 3;
    }
    else if(scrollPercent<42){
        whichcontent = 4;
    }
    else if(scrollPercent<55){
        whichcontent = 5;
    }
    else if(scrollPercent<70){
        whichcontent = 6;
    }
    else if(scrollPercent<80){
        whichcontent = 7;
    }
    else if(scrollPercent<95){
        whichcontent = 8;
    }
    else if(scrollPercent<100){
        whichcontent = 9;
    }

    if(whichcontent==1&&previouscontent!=1){
        openCountry(event, 's1.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's1.1')" >Story</buttonl>
            <buttonl class = "tablinks2" onclick="openCountry(event, 's1.2')">tab 2</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's1.3')">tab 3</buttonr>
        `
        
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pga>Project Projector</pga></p>
                <p><pg>Pengiun game</pg></p>
                <p><pg>Robot simulator</pg></p>
                <p><pg>Auction house</pg></p>
                <p><pg>Java scripting</pg></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pg>Collator</pg></p>
                <p><pg>Mobile app</pg></p>  
                <p><pg>This website</pg></p>    
        `
        previouscontent =1;
    }
    else if(whichcontent==2&&previouscontent!=2){
        openCountry(event, 's2.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's2.1')" >Story</buttonl>
            <buttonl class = "tablinks2" onclick="openCountry(event, 's2.2')">tab 2</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's2.3')">tab 3</buttonr>
        `
        
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pga>Pengiun game</pga></p>
                <p><pg>Robot simulator</pg></p>
                <p><pg>Auction house</pg></p>
                <p><pg>Java scripting</pg></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pg>Collator</pg></p>
                <p><pg>Mobile app</pg></p>   
                <p><pg>This website</pg></p>   
        `
        previouscontent =2;
    }
    else if(whichcontent==3&&previouscontent!=3){
        openCountry(event, 's3.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's3.1')" >Story</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's3.2')">tab 2</buttonr>
        `

        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pg>Pengiun game</pg></p>
                <p><pga>Robot simulator</pga></p>
                <p><pg>Auction house</pg></p>
                <p><pg>Java scripting</pg></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pg>Collator</pg></p>
                <p><pg>Mobile app</pg></p>     
                <p><pg>This website</pg></p> 
        `
        previouscontent =3;
    }
    else if(whichcontent==4&&previouscontent!=4){
        openCountry(event, 's4.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's4.1')" >Story</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's4.2')">tab 2</buttonr>
        `
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pg>Pengiun game</pg></p>
                <p><pg>Robot simulator</pg></p>
                <p><pga>Auction house</pga></p>
                <p><pg>Java scripting</pg></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pg>Collator</pg></p>
                <p><pg>Mobile app</pg></p>    
                <p><pg>This website</pg></p>  
        `
        previouscontent =4;
    }
    else if(whichcontent==5&&previouscontent!=5){
        openCountry(event, 's5.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's5.1')" >Story</buttonl>
            <buttonl class = "tablinks2" onclick="openCountry(event, 's5.2')">tab 2</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's5.3')">tab 3</buttonr>
        `
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pg>Pengiun game</pg></p>
                <p><pg>Robot simulator</pg></p>
                <p><pg>Auction house</pg></p>
                <p><pga>Java scripting</pga></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pg>Collator</pg></p>
                <p><pg>Mobile app</pg></p>   
                <p><pg>This website</pg></p>   
        `
        previouscontent =5;
    }
    else if(whichcontent==6&&previouscontent!=6){
        openCountry(event, 's6.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's6.1')" >Story</buttonl>
            <buttonl class = "tablinks2" onclick="openCountry(event, 's6.2')">tab 2</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's6.3')">tab 3</buttonr>
        `
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pg>Pengiun game</pg></p>
                <p><pg>Robot simulator</pg></p>
                <p><pg>Auction house</pg></p>
                <p><pg>Java scripting</pg></p>
                <p><pga>Maths Olympiad</pga></p>
                <p><pg>Collator</pg></p>
                <p><pg>Mobile app</pg></p>   
                <p><pg>This website</pg></p>   
        `
        previouscontent =6;
    }
    else if(whichcontent==7&&previouscontent!=7){
        openCountry(event, 's7.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's7.1')" >Story</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's7.2')">tab 2</buttonr>
        `
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pg>Pengiun game</pg></p>
                <p><pg>Robot simulator</pg></p>
                <p><pg>Auction house</pg></p>
                <p><pg>Java scripting</pg></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pga>Collator</pga></p>
                <p><pg>Mobile app</pg></p>
                <p><pg>This website</pg></p>      
        `
        previouscontent =7;
    }
    else if(whichcontent==8&&previouscontent!=8){
        openCountry(event, 's8.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's8.1')" >Story</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's8.2')">tab 2</buttonr>
        `
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pg>Pengiun game</pg></p>
                <p><pg>Robot simulator</pg></p>
                <p><pg>Auction house</pg></p>
                <p><pg>Java scripting</pg></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pg>Collator</pg></p>
                <p><pga>Mobile app</pga></p>
                <p><pg>This website</pg></p>
        `
        previouscontent =8;
    }

    else if(whichcontent==9&&previouscontent!=9){
        openCountry(event, 's9.1');
        document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "tablinksd2 active" onclick="openCountry(event, 's9.1')" >Story</buttonl>
            <buttonl class = "tablinks2" onclick="openCountry(event, 's9.2')">tab 2</buttonl>
            <buttonr class = "tablinks2" onclick="openCountry(event, 's9.3')">tab 3</buttonr>
        `
        document.getElementById('hahaha').innerHTML =`
                <h3><pg2>Content</pg2></h3>
                <p><pg>Project Projector</pg></p>
                <p><pg>Pengiun game</pg></p>
                <p><pg>Robot simulator</pg></p>
                <p><pg>Auction house</pg></p>
                <p><pg>Java scripting</pg></p>
                <p><pg>Maths Olympiad</pg></p>
                <p><pg>Collator</pg></p>
                <p><pg>Mobile app</pg></p>
                <p><pga>This website</pga></p>
        `
        previouscontent =9;
    }

    document.getElementById('title-now').innerText = textnow[whichcontent-1];
    hidetooltip();
});

function select(selector){
    return document.querySelector(selector);
}

document.addEventListener("click", (e) => {
    // if (e.target.closest(`[data-action="openModal"]`)) {
    //     openModal();
    // }
    if (e.target.closest(`[data-action="openVex"]`)) {
        openVex();
    }
    if (e.target.closest(`[data-action="openPenguin"]`)) {
        openPenguin();
    }
    if (e.target.closest(`[data-action="openApps"]`)) {
        openApps();
    }
    if (e.target.closest(`[data-action="openProjector"]`)) {
        openProjector();
    }
    if (e.target.closest(`[data-action="openAuction"]`)) {
        openAuction();
    }
    if (e.target.closest(`[data-action="openMod"]`)) {
        openMod();
    }
    if (e.target.closest(`[data-action="openCollator"]`)) {
        openCollator();
    }
    if (
        e.target.closest(`[data-action="closeModal"]`) ||
        e.target.classList.contains("modal-wrapper")
    ) {
        closeModal();
    }
});
function openModal() {
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="var(--black-color)" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                <iframe src="static/img/descam.png" style="width:100%; height: 70vh;">
                </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}

function openVex(){
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                    <iframe src="https://ntygithub.github.io/vexoverundersim/" style="width:100%; height: 70vh;">
        </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}

function openPenguin(){
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                    <iframe src="https://ntygithub.github.io/penguingame/" style="width:100%; height: 70vh;">
        </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}

function openApps(){
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container" style="width:25%">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                    <iframe src="https://ntygithub.github.io/randomapp/" style="width:100%; height: 85vh;">
        </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}

function openProjector(){
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container" style="width: auto;">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                    <img src="static/img/descamdemo1.gif" alt="testimg" style="height: 80vh;">
        </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}

function openAuction(){
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container" style="width: auto;">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                    <img src="static/img/scrollingfeed.gif" alt="testimg" style="height: 80vh;" >
        </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}

function openMod(){
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                    <img src="static/img/skyblock.png" alt="testimg" class="fill" >
        </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}

function openCollator(){
    const modalContent = `
        <div class="modal-wrapper">
            <div class="modal-container" style="width: auto;">
                <button class="modal-close" data-action="closeModal">
                    <svg viewBox="0 0 20 20" width="16" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M 2 2 L 18 18" stroke-width="3" fill="transparent"></path>
                        <path d="M 18 2 L 2 18" stroke-width="3" fill="transparent"></path>
                    </svg>
                </button>
                    <img src="static/img/mscollator.png" alt="testimg" style="height: 80vh;" >
        </iframe>
            </div>
        </div>`;
    select("body").insertAdjacentHTML("beforeend", modalContent);
    select("body").style.overflow = "hidden";
    select(".modal-wrapper").style.display = "flex";
    setTimeout(() => {
        select(".modal-wrapper").style.opacity = 1;
    }, 10);
}
function closeModal() {
    document.querySelectorAll(".modal-wrapper").forEach((el) => {
        el.style.opacity = 0;
        setTimeout(() => { el.remove(); }, 500);
    });
    select("body").style.overflow = "";
}

function openState(evt, cityName, namestart){
    var i, tabcontent, tablinks,tablinksd;

    tabcontent = document.getElementsByClassName(namestart+"tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(namestart+"tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tablinksd = document.getElementsByClassName(namestart+"tablinksd");
    for (i = 0; i < tablinksd.length; i++) {
        tablinksd[i].className = tablinksd[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCountry(evt, cityName) {
var i, tabcontent, tablinks,tablinksd;
tabcontent = document.getElementsByClassName("tabcontent2");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks2");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

tablinksd = document.getElementsByClassName("tablinksd2");
for (i = 0; i < tablinksd.length; i++) {
    tablinksd[i].className = tablinksd[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}

function defaultstablinks(){
    document.getElementById('contaa-now').innerHTML = `
            <buttonl class = "1tablinksd2 active" onclick="openCountry(event, 's1.1','1')" >Story</buttonl>
            <buttonl class = "1tablinks2" onclick="openCountry(event, 's1.2','1')">tab 3</buttonl>
            <buttonr class = "1tablinks2" onclick="openCountry(event, 's1.3','1')">tab 2</buttonr>
        `
    for(j=1;j<10;j++){
        var num = j;
        var str = num.toString();

        tablinksd = document.getElementsByClassName(str+"tablinksd");
        for (i = 0; i < tablinksd.length; i++) {
            tablinksd[i].className = tablinksd[i].className + " active";
        }

        // tablinksd2 = document.getElementsByClassName(str+"tablinksd2");
        // for (i = 0; i < tablinksd2.length; i++) {
        //     tablinksd2[i].className = tablinksd2[i].className + " active";
        // }
    }
    



    
}

function loadDefaults(){
    // chooserandomtheme();
    openState(event, 'm1.1','1');
    openState(event, 'm2.1','2');
    openState(event, 'm3.1','3');
    openState(event, 'm4.1','4');
    openState(event, 'm5.1','5');
    openState(event, 'm6.1','6');
    openState(event, 'm7.1','7');
    openState(event, 'm8.1','8');
    openState(event, 'm9.1','9');

    openCountry(event, 's1.1','1');
    document.getElementById('title-now').innerText = 'Project Projector'
    defaultstablinks();
}


window.addEventListener('load', function () {
    sleep(1000).then(() => {document.getElementsByClassName("cover")[0].style.visibility = "hidden";});
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function scrollTo(y){
    window.scrollTo(0, y)
}

function showtooltip(){
    document.getElementsByClassName("tooltip")[0].style.visibility = "visible";
    document.getElementsByClassName("tooltip")[0].style.opacity = "1";
}

function showtooltipandset(theguy){
    showtooltip();
    document.getElementsByClassName("tooltip")[0].innerHTML=theguy;
}

function hidetooltip(){
    document.getElementsByClassName("tooltip")[0].style.visibility = "hidden";
    document.getElementsByClassName("tooltip")[0].style.opacity = "0";
}

function chooserandomtheme(){
    const theme =[];
    theme[0]="";
    theme[1]="darkblue";
    theme[2]="cyberpunk";
    theme[3]="old";
    theme[4]="monolight";
    theme[5]="monodark";
    theme[6]="borealis";
    document.getElementById("thebody").className= theme[Math.floor(Math.random() * 7)];

}

