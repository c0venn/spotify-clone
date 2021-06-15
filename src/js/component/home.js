import { useEffect, useRef, useState } from 'react';


function Home() {
   
   let getFetch = () => {
       fetch("https://assets.breatheco.de/apis/sound/songs")
        .then((response) => {
           return response.json();
        }).then((data) => {
           setSongs((data));
        }).catch((error) => {
          console.error(error);   
        });
   };

    return (
        <div className=""
    )
}


