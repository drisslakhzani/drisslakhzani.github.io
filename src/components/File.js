import React,{useEffect, useState} from "react";
// import memeData from "./datameme"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faFontAwesome)
function Hero(){  
    const [allMemeImages,setImages]=useState([])
    const [memeImage,SetImage]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
         .then(res=>res.json())
         .then(data=>setImages(data.data.memes))
    },[])
    function memeGenerator(){
        const randomIndex=Math.floor(Math.random()*allMemeImages.length);
        const memesArr= allMemeImages[randomIndex].url
        SetImage(prevImage=>({
            ...prevImage,randomImage:memesArr
        }))
    }
    function handleChange(event){
        const {name,value}=event.target
        SetImage(prevText=>{
            return{...prevText,[name]:value}
        })
        
    }
    console.log(memeImage)
    return(
        <div className="con1">
            <div>
                <input placeholder="upper text" className="type-in" value={memeImage.topText} name="topText" onChange={handleChange} type="text"/>
                <input placeholder="lower text" className="type-in" value={memeImage.bottomText} name="bottomText" onChange={handleChange} type="text"/>
            </div>
            <button onClick={memeGenerator} className="btn" href='/'>
                Get a new meme image
                <FontAwesomeIcon className="icon" icon={faImage}/>
      </button>
            <section className="card">
                <img src={memeImage.randomImage} alt={memeImage.randomImage}/>
                <h2 className="meme-text top">{memeImage.topText}</h2>
                <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
            </section>
        </div>
        
    )
};

export default Hero

