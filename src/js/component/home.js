import { useEffect, useRef, useState } from 'react';
import { Player } from './player';
import { Songs } from './temas';

function Home() {
    const [songs, setSongs] = useState([]);
    const [Playing, setPlaying] = useState(false);
    const [On, setOn] = useState(0);

    let songPlayer = useRef(null);

    let getFetch = () =>{
        fetch("https://assets.breatheco.de/apis/sound/songs").then((result)=>{
            return result.json();
        }).then((data)=>{
            setSongs((prevState)=>{
                return data;
            })
        }).catch((error)=>{
            console.error(error);
        });
    }

    
}
