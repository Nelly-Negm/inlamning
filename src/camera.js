import React from "react";
import pop from './popup';

const VideoStream = React.createRef(null);

const CameriaView = () => {
   startVideoStream();
    return (
        <div>
        
       <div className='btnholder'  >
       <button onClick={screenShot}>Fånga ett nytt ögonblick</button> 
       
        <video  id="taBild" ref={VideoStream}></video>
        </div>
        <div  >
            <ul className="popup" id="popup"></ul>
        </div>
        </div>
        
    )
};
//popup meddeleande om det gick


function popup(message) {
    let popupList = document.getElementById('popup');
    let popup = document.createElement('li');
    let content = document.createElement('h3');
    
    content.innerHTML=message;
    popup.appendChild(content);
    popupList.appendChild(popup);

    setTimeout(function(){
        popup.remove();
    } ,1000)
}

//hämtat in video streamen + starta för att se live
function startVideoStream() {
    console.log('jaho');
    navigator.mediaDevices.getUserMedia({audio:false, video:true}).then((mediaStream) => {
        VideoStream.current.srcObject=mediaStream
        VideoStream.current.onloadedmetadata=function(e){
            VideoStream.current.play()
        }
    })};


//ta bilden
function screenShot() {
    let taBild=document.getElementById("taBild");
    let canvas=document.createElement('canvas');
    canvas.width=480
    canvas.height=480

    let context=canvas.getContext('2d');
    context.drawImage(taBild,0,0);
    let imageData=canvas.toDataURL('image/png'); 
    
    pushLocalData(imageData);
};
//hämta bilddata
function getLocaldata() {
    let localData=localStorage.getItem('imgs');
    let imageArray= []; 

    if (localData !=null){
        imageArray=JSON.parse(localData);
    }
    return (imageArray);
};
//lägga upp/spara bild data
function pushLocalData(imagedata) {
    let imageArray=getLocaldata();
    imageArray.push(imagedata);

   try {localStorage.setItem('imgs', JSON.stringify(imageArray));
   popup('Image successfully saved!') 
   } catch (error) {
    popup('Image failed to save :(') 
    console.log(error)
   } 
   
   
};


export default CameriaView;