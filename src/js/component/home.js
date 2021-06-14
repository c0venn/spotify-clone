import { useEffect, useRef, useState } from 'react';
import  Player  from './player';
import  Songs  from './temas';

function Home() {
   const [song, setSong] = useState('');
   const [Playing, setPlaying] = useState(false);
   const [currentsong, setCurrentSong] = useState(false)
   const [isOn, setisOn] = useState(0);

   let songPlayer = useRef(null);

   let getFetch = () => {
       fetch("https://assets.breatheco.de/apis/sound/songs")
        .then((result)=>{
           return result.json();
        }).then((data) => {
           setSongs((data));
        }).catch((error) => {
          console.error(error);   
        });
   };

   useEffect(() => {
       getFetch()
   });

    let pickSong = (index) => {
        songPlayer.current.src = `https://assets.breatheco.de/apis/sound/${songs[index].url}`;
    };

    let playStop = () => {
        songPlayer.current.play();
    }

    let pauseSong = () => {
        songPlayer.current.pause();
    }

    return (

    )
}


