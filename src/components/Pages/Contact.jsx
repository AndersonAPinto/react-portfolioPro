import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import { SlSocialGithub, SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Banner from '../../imgs/banner.jpg'

import './contact.css';

function Contact() {
    return (
        <div className="container__Contact">
            <div className="frame">
                {/*<img src={Banner} style={{width:'27vw', height:'75vh', borderRadius:'10px'}}/>*/}
            </div>
            <div className="title_contact">
                <h1> <HiArrowDownRight /> Contato</h1>
            </div>
            <div className="div_title">               
                <div className="icons_contact">
                    <h2 style={{ fontSize: '35px', marginBottom:'5px',textAlign:'center' }}>Redes Sociais e Envio de Mensagens</h2>
                    <h6 style={{ marginBottom: '5px', color: '#C68107',fontSize:'1em', textAlign:'center' }}>Conecte-se Conosco com Apenas um Clique</h6>
                    <p style={{ color: '#b1b1b1', fontSize:'1.2em' }}>
                        Valorizo cada oportunidade de interagir com você. Para tornar sua experiência comigo ainda mais direta e conveniente, disponibilizo ícones de acesso rápido abaixo. Cada ícone é uma porta para minhas principais plataformas de comunicação e redes sociais, permitindo que você escolha o canal preferencial de contato com facilidade e rapidez.
                        Seja para fazer perguntas, solicitar suporte, ou compartilhar suas impressões, estamos a apenas um clique de distância. Estarei comprometido em fornecer respostas e soluções ágeis e atenciosas.
                        Estou animado para ouvir o que você tem a dizer.</p>
                </div>
                <div className="div_icons">
                    <a href="https://www.linkedin.com/in/andersonapinto/" target="_blank" rel="noopener noreferrer"><SlSocialLinkedin /></a>
                    <a href="https://github.com/AndersonAPinto" target="_blank" rel="noopener noreferrer"><SlSocialGithub /></a>
                    <a href="https://www.facebook.com/andersonaspinto/" target="_blank" rel="noopener noreferrer"><SlSocialFacebook /></a>
                    <a href="https://www.instagram.com/andersonaugusto.pinto/" target="_blank" rel="noopener noreferrer"><SlSocialInstagram /></a>
                    <a href="https://wa.me/5551997802755" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    <a href="mailto:andersonaugustopinto@gmail.com" target="_blank" rel="noopener noreferrer"><BiMailSend style={{ fontSize: '54px' }} /></a>     
                </div>
            </div>
        </div>
    )
}
export default Contact