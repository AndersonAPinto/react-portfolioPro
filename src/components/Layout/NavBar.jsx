import React, {useState, useEffect} from "react"
import '../Layout/navBarStyle.css'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { AiOutlineAlert } from "react-icons/ai";
import Dropdown from "./Dropdown";


function NavBar() {
    const [color, setColor] = useState('#CC8207'); // Estado inicial da cor

    useEffect(() => {
        // Define um intervalo para alternar a cor
        const intervalId = setInterval(() => {
            setColor((prevColor) => (prevColor === '#CC8207' ? '#020002' : '#CC8207'));
        }, 500); // Alterna a cor a cada 500 ms

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <button className="text_alert">
                <AiOutlineAlert style={{ marginRight: '3px', backgroundColor: color, borderRadius: '50%' }} />
                <h5>Disponível para Trabalhos</h5>
            </button>
            <Dropdown />

                <div className="container_text">
                {/*<img src={LogoPageNavBar} />*/}
                <h1>Anderson</h1>
                <h5>Desenvolvedor Frontend</h5> </div>
                <button className="btn_works">
                    <p>MEUS TRABALHOS</p>
                    <MdOutlineKeyboardDoubleArrowDown className="icon_works" />
                </button>
           
        </>
    )
}
export default NavBar