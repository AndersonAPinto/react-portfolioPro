import React from "react";
import Photo from '../../imgs/photo.png'
import { HiArrowDownRight } from "react-icons/hi2";
import './aboutme.css'

function AboutMe() {
    return (
        <div className="container__AboutMe">
             
             <h1> <HiArrowDownRight /> Sobre mim</h1>

            <div className="container_texts">
                <div className="picture_div">                 
                    <img src={Photo} style={{borderRadius:'40%', marginTop:'41px'}}/>
                </div>
                <div className="text_div">
                    <h4 style={{marginBottom:'5px', color:'#C68107'}}>Anderson Pinto</h4>
                    <h2 style={{marginBottom:'5px', }}>Desenvolvedor Frontend</h2>
                    <p style={{color:'#272727', marginBottom:'10px'}}>
                        Sou desenvolvedor frontend, especializado em criar interfaces intuitivas e envolventes com React e Angular.js. Apaixonado por design e acessibilidade digital, busco inovar em experiências de usuário que são tanto funcionais quanto visualmente atrativas. Mantenho-me atualizado com as últimas tendências, explorando tecnologias emergentes e contribuindo para projetos de código aberto.
                    </p>
                    <button className="btn_aboutme">Entre em contato</button>
                </div>
            </div>
        </div>


    )
}
export default AboutMe