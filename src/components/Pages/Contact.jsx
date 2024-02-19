import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import { SlSocialGithub, SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import './contact.css';

function Contact() {
    return (
        <div className="container__Contact">
            <div className="title_contact">
                <h1> <HiArrowDownRight /> Contato</h1>
            </div>
            <div className="div_title">
                <div className="icons_contact">
                    <h2 style={{ fontSize: '35px', marginBottom:'5px' }}>Redes Sociais e Envio de Mensagens</h2>

                    <p>Conecte-se Conosco com Apenas um Clique

                        Valorizamos cada oportunidade de interagir com você. Para tornar sua experiência conosco ainda mais direta e conveniente, disponibilizamos ícones de acesso rápido abaixo. Cada ícone é uma porta para nossas principais plataformas de comunicação e redes sociais, permitindo que você escolha o canal preferencial de contato com facilidade e rapidez.

                        Seja para fazer perguntas, solicitar suporte, ou compartilhar suas impressões, estamos a apenas um clique de distância. Nossa equipe está comprometida em fornecer respostas e soluções ágeis e atenciosas.

                        Encorajamos você a explorar esses atalhos e a se manter atualizado com nossas últimas notícias e atualizações seguindo-nos nas redes sociais. Sua participação é fundamental para nós, e estamos animados para ouvir o que você tem a dizer.</p>


                </div>
                <div className="div_icons">
                    <SlSocialLinkedin /><SlSocialGithub /><SlSocialFacebook /><SlSocialLinkedin /><SlSocialInstagram /><FaWhatsapp /><BiMailSend style={{ fontSize: '50px' }} />
                </div>
            </div>
        </div>
    )
}
export default Contact