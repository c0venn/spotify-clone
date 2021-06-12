import React from 'react';

const Player = (props) =>{
    return(
        <div className="player d-flex justify-content-center bg-secondary fs-1 rounded-bottom pb-3">
            <div onClick={()=>{
                if(props.songs[props.songOn -1] !== undefined){
                    props.pickSong(props.songOn -1);
                    props.playStop();
                    props.setSongOn(props.songOn -1);
                    props.setIsPlaying(true);
                } else if (props.songs[props.songOn -1] === undefined){
                    props.pickSong(props.songs.length -1);
                    props.playStop();
                    props.setSongOn(props.songs.length -1);
                    props.setIsplaying(true);
                }
            }}>
                <IoPlaySkipBack />
            </div>
        </div>
    )
}


