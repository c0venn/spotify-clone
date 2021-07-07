import React from "react";
import Song from "../component/song";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faStepForward,
	faStepBackward,
	faMusic
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function Home() {
	let getFetch = () => {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => {
				return response.json();
			})
			.then(data => {
				setSong(data);
			})
			.catch(error => {
				console.error(error);
			});
	};

	useEffect(() => {
		getFetch();
	});

	let [song, setSong] = useState("");
	let [isPlaying, setPlay] = useState(false);
	let [currentSelect, setCurrent] = useState(false);
	let [songsList, setList] = useState([]);

	function selectSong(e) {
		let select = e.target;
		setSong(`https://assets.breatheco.de/apis/sound/${select.name}`);
		setCurrent(parseInt(select.id));
		setPlay(true);
	}

	function togglePlayPause() {
		if (currentSelect === false) return;
		setPlay(!isPlaying);
	}

	function next() {
		setPlay(true);
		if (currentSelect + 1 === songsList.length) {
			setCurrent(0);
			setSong(
				`https://assets.breatheco.de/apis/sound/${songsList[0].url}`
			);
		}
		if (currentSelect + 1 < songsList.length) {
			setCurrent(currentSelect + 1);
			setSong(
				`https://assets.breatheco.de/apis/sound/${
					songsList[currentSelect + 1].url
				}`
			);
		}
	}

	function previous() {
		setPlay(true);
		if (currentSelect - 1 === -1) {
			setCurrent(songsList.length - 1);
			setSong(
				`https://assets.breatheco.de/apis/sound/${
					songsList[songsList.length - 1].url
				}`
			);
		}
		if (currentSelect - 1 > -1) {
			setCurrent(currentSelect - 1);
			setSong(
				`https://assets.breatheco.de/apis/sound/${
					songsList[currentSelect - 1].url
				}`
			);
		}
	}

	return (
		<div className="app">
			<div clasName="songs">
				{songsList !== undefined &&
					songsList.map((song, key) => {
						let active = { active: "", sound: "" };
						let itemNumber = key;
						if (key === currentSelect) {
							active.active = "active";
							active.sound = (
								<FontAwesomeIcon
									icon={faMusic}
									className="MusicIcon"
								/>
							);
						}
						return (
							<Song
								sources={song}
								key={key}
								selectSong={selectSong}
								active={active.active}
								sound={active.sound}
								itemNumber={itemNumber}
							/>
						);
					})}
			</div>
			<div className="player">
				<button className="button" type="button" onClick={previous}>
					<FontAwesomeIcon icon={faStepBackward} className="icon" />
				</button>
				<button
					className="button"
					type="button"
					onClick={togglePlayPause}>
					{isPlaying === false ? (
						<FontAwesomeIcon icon={faPlay} className="icon" />
					) : (
						<FontAwesomeIcon icon={faPause} className="icon" />
					)}
				</button>
				<button className="button" type="button" onClick={next}>
					<FontAwesomeIcon icon={faStepForward} className="icon" />
				</button>
			</div>
		</div>
	);
}

export default Home;
