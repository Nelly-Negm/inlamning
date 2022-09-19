import React, {useEffect, useState} from "react";


const GalleryView = () => {
    //const[lData]=useState([])
   useEffect(()=> {
    showLocalData()
    
   }, [])
    return (

       <div> 

        <button onClick={()=>{localStorage.clear()}}>Clear all</button>
        <div >
    <ul id="imageShow" class='imgViewers'></ul>
    </div>

    </div>
    )
}
//hämta bilddata
function getLocaldata() {
    let localData=localStorage.getItem('imgs');
    let imageArray= []; 

    if (localData !=null){
        imageArray=JSON.parse(localData);
    }
    return (imageArray);
};

//visa bilddata
function showLocalData() {
    let UL=document.getElementById("imageShow");
    let imageArray=getLocaldata();
    UL.innerHTML="";
    for(let i=0; i<imageArray.length; i++ ) {
        let image=imageArray[i];
        let LI=document.createElement('li');
        let img=document.createElement('img');
        let button=document.createElement('button')
        button.className+='delitebtn';
        button.addEventListener('click', function(){deliteLocalAt(i) 
            console.log('deliteLocalAt') });
        img.src=image;
        button.innerHTML="x";
        LI.appendChild (button);
        LI.appendChild(img);
        UL.appendChild(LI);

        
    };
};
//delite specific image
function deliteLocalAt(index) {
    let imageArray=getLocaldata();
    imageArray.splice(index,1);
    localStorage.setItem('imgs', JSON.stringify(imageArray));

    showLocalData();
};

export default GalleryView;