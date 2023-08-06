import React, { useEffect, useState } from "react";
import GiftList from "./GifList";
import GifSearch from "./GifSearch";

export default function GiftListContainer() {
  const [gif, setGif] = useState([]);

  useEffect(() => {
   
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=bLHLcp5vJmLcKBEE3ARUUiSCf71xTY2g&q=dolphin&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
   .then(response=>response.json())
   .then(data=>setGif(data.data)) 
  }, []);

console.log(gif)
  //   helper function
  function handleSubmit(find){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=bLHLcp5vJmLcKBEE3ARUUiSCf71xTY2g&q=${find}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
   .then(response=>response.json())
   .then(data=>setGif(data.data)) 
   


}


const display =gif.map(element=>{ 

return <GiftList gif={element} key={element.id}/>})


  return (
    <div className="giftlistContainer" style={{display:"flex",justifyContent:"space-evenly"}}>
        <div>
        {display}
        </div>
 
     <GifSearch  handleSubmit={handleSubmit}/>
    </div>
  );
  }