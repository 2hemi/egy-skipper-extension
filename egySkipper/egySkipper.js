//document.body.style.border = "5px solid red";

var url = window.location.href;
if (url.slice(-1) == '/'){
    url = url.slice(0,-1);
 
}
/*
if (url.slice(-3) != '#ld'){
    window.location.href = url+'#ld';
  //  window.location.reload();

}
window.onload = (event) =>{

    console.log('Page Loaded');

}*/
const newDiv = document.createElement("div");

const newContent = document.createTextNode("change");
 

newDiv.innerHTML = '<button id = "back1" type="button" >previous</button> \
                    <button id = "next1" type="button" >next</button> ';

const parentDiv = document.getElementById("body");
const childDiv = document.getElementById("main");
const child2Div = document.getElementById("mainLoad");
const currentDiv = document.getElementById("watch_dl");

child2Div.insertBefore(newDiv, currentDiv);


const ep_index = url.indexOf('ep-')+3;
const url_post_ep_index = url.substring(ep_index);
console.log('shit1 '+url_post_ep_index);

document.getElementById("next1").onclick =  function(){

    url = window.location.href
    if (url.slice(-1) == '/')
        url = url.slice(0,-1);
    
    url = url.substring(0,ep_index)+(parseInt(url_post_ep_index)+1);

    window.location.href = url;
    
    return;

};


document.getElementById("back1").onclick =  function(){

    url = window.location.href
    if (url.slice(-1) == '/')
        url = url.slice(0,-1);

    url = url.substring(0,ep_index)+(parseInt(url_post_ep_index)-1);

    window.location.href = url;


    return;

};

//season skipping
const ep_div = document.getElementsByClassName("movies_small")[0];
const ep_div_length = ep_div.childNodes.length;

const season_div = document.getElementsByClassName("contents movies_small")[0];
const season_div_length = season_div.childNodes.length;

const season_index = url.indexOf('season-')+7;
const url_post_season_index = url.substring(season_index);
const season_number = url_post_season_index.substring(0,url_post_season_index.indexOf('-'));

const episode_index = url.indexOf('episode/');
const url_pre_episode_index = url.substring(0,episode_index);


if (url.slice(-2) == ep_div_length){
    
    if (season_number == season_div_length){
            
        document.getElementById('next1').style.display = 'none';

    }
    else {
        document.getElementById('next1').innerText = 'next season';
        document.getElementById('next1').onclick =  function(){
            
            url =   url_pre_episode_index+'season/'+url.substring(episode_index+8,season_index)+(parseInt(season_number)+1)
            
            window.location.href = url;
            
            
            
            return;
        
        };

    }

}

if (url.slice(-1) == '1' && parseInt(url.slice(-2)) < 0){
    
    if (season_number == '1'){
        document.getElementById('back1').style.display = 'none';

    }
    else {
        document.getElementById('back1').innerText = 'previous season';
        document.getElementById('back1').onclick =  function(){
            
            url =   url_pre_episode_index+'season/'+url.substring(episode_index+8,season_index)+(parseInt(season_number)-1)

            
            window.location.href = url;
            
            
            
            return;
        
        };

    }

}

