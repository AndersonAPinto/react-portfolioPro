import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import { SlSocialGithub, SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

import './contact.css';

function Contact() {
    return (
        <div className="container__Contact">
            <div className="title_contact">
                <h1> <HiArrowDownRight /> Contato</h1>
            </div>
            <div className="div_icons">
                <div className="icons_contact">
                    <h2 style={{ fontSize: '35px' }}>Redes Sociais</h2>
                    <p><SlSocialLinkedin /><SlSocialGithub /><SlSocialFacebook /><SlSocialLinkedin /><SlSocialInstagram /><FaWhatsapp /></p>
                </div>
                <div className="text_contact">
                    <h2 style={{ fontSize: '35px' }}>Formulário</h2>
                    <div className="set_input">
                        <div className="set_form">
                            <label>Nome</label>
                            <br/>
                            <input placeholder="Digite seu Nome" required />
                            <label>Sobrenome</label>
                            <br/>
                            <input placeholder="Digite seu Sobrenome" />
                        </div>
                        <label>Email</label>
                        <input style={{width:'30vw'}} placeholder="Digite seu Email" required />
                        <label>Telefone</label>
                        <input placeholder="Digite seu Telefone" />
                        <label>Mensagem</label>
                        <br/>
                        <textarea style={{ width: '25vw', height: '10vh' }} placeholder="Digite sua Mensagem" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact