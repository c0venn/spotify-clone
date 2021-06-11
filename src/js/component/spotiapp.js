import { Songs } from './temas'

function spotify(props) {
        const [state, setState] = useState({
            url: "",
            muted: false,
            tocandoPrimera: "",
            tocandoSegunda: "",
            tocandoTercera: "",
            nombre: "Play"
        });

        let input = createRef();

        return (
            <div className="container">
                <div className="row" style={{ height: "40vh"}}>
                    <div className={`col-md-12 d-flex align-items-center border border-danger my-2 ${state.tocandoPrimera}`} ref={t => (input = t)}onClick={e =>setState({
                                url: Songs[0].src,
                                nombre: "Pause",
                                tocandoPrimera: "bg-warning",
                                tocandoSegunda: "",
                                tocandoTercera: ""
                            })
                        }>
                        Cancion 1: Castle
					</div>
                    <div
                        className={`col-md-12 d-flex align-items-center border border-danger my-2 ${state.tocandoSegunda}`}
                        ref={t => (input = t)}
                        onClick={e =>
                            setState({
                                url: Songs[1].src,
                                nombre: "Pause",
                                tocandoPrimera: "",
                                tocandoSegunda: "bg-warning",
                                tocandoTercera: ""
                            })
                        }>
                        Cancion 2: Hurry Starman
					</div>
                    <div
                        className={`col-md-12 d-flex align-items-center border border-danger my-2 ${state.tocandoTercera}`}
                        ref={t => (input = t)}
                        onClick={e =>
                            setState({
                                url: Songs[2].src,
                                nombre: "Pause",
                                tocandoPrimera: "",
                                tocandoSegunda: "",
                                tocandoTercera: "bg-warning"
                            })
                        }>
                        Cancion 3: Overworld
					</div>
                    <div className="col-md-12"></div>
                </div>
                <div className="row d-flex justify-content-center footer bg-dark">
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        ref={t => (input = t)}
                        onClick={e => {
                            if (state.url == Songs[0].src) {
                                setState({
                                    url: Songs[2].src,
                                    nombre: "Play",
                                    muted: true
                                });
                            } else if (state.url == Songs[1].src) {
                                setState({
                                    url: Songs[0].src,
                                    nombre: "Play",
                                    muted: true
                                });
                            } else if (state.url == Songs[2].src) {
                                setState({
                                    url: Songs[1].src,
                                    nombre: "Play",
                                    muted: true
                                });
                            }
                        }}>
                        Atras
					</button>
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        ref={t => (input = t)}
                        onClick={e =>
                            state.nombre == "Pause"
                                ? setState({
                                    url: "",
                                    nombre: "Play",
                                    muted: true
                                })
                                : setState({
                                    url: Songs[1].src,
                                    nombre: "Pause",
                                    muted: false
                                })
                        }>
                        {state.nombre}
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        ref={t => (input = t)}
                        onClick={e => {
                            if (state.url == Songs[0].src) {
                                setState({
                                    url: Songs[1].src,
                                    nombre: "Pause",
                                    muted: true
                                });
                            } else if (state.url == Songs[1].src) {
                                setState({
                                    url: Songs[2].src,
                                    nombre: "Pause",
                                    muted: true
                                });
                            } else if (state.url == Songs[2].src) {
                                setState({
                                    url: Songs[0].src,
                                    nombre: "Pause",
                                    muted: true
                                });
                            }
                        }}>
                        Next
					</button>
                </div>
                <audio src={state.url} autoPlay />
            </div>
        );
    }