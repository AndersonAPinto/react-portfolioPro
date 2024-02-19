import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import SiteGadj from '../../imgs/Site Gadj.png';
import WebSite_Englistest from '../../imgs/WebSite(Englistest).png';
import WebSiteCOnsEletr from '../../imgs/WebSiteConsumptionEletricCar.png';
import App_1 from '../../imgs/App_1.png'

import './experience.css';

function Experience() {
    return (
        <div className="container__Experience">
            <div className="title_experience">
                <h1><HiArrowDownRight />Experiências</h1>
            </div>
            <hr style={{ margin: '25px', width: '70vw' }} />
            <div>
                <div className="imgs_site" >
                    <p style={{ fontSize: '1.3em', marginLeft:'5px' }}>
                        <h6 style={{ color: '#C68107' }}>Controle de Ponto</h6>
                        Aplicativo desenvolvido baseado em um problema real. para controlar a carga horária e não ultrapassa-la, esse app identifica os dias utéis, feriados nacionais e regionais e calcula qual o período necessário para que a carga horária permaneça correta.
                        App em Desenvolvimento de backend, construido com Figma, e desenvolvido com React Native, trará a solução adequada para o problema, futuramente estará presente na Google Play com o mesmo nome do título. 
                    </p>
                    <img src={App_1} style={{ width: '25%', height: '450px', marginLeft: '10vw', borderRadius: '10px' }} />
                </div>
            </div>
            <hr style={{ margin: '25px', width: '70vw' }} />
            <div>
                <div className="imgs_site" >
                    <img src={SiteGadj} style={{ width: '50%', height: '250px', marginRight: '15px', borderRadius: '10px' }} />
                    <p style={{ fontSize: '1.3em', marginRight:'1vw' }}>
                        <h6 style={{ color: '#C68107' }}>GADJ Ferramentas</h6>
                        O site é uma plataforma de e-commerce especializada na venda de ferramentas e produtos industriais, criada para atender às necessidades de profissionais e empresas do setor. Com um catálogo diversificado, equipamentos sofisticados para grandes operações industriais. Destaco a facilidade de navegação do site, proporcionando uma busca ágil e satisfatória por soluções industriais completas.
                    </p>
                </div>
            </div>
            <hr style={{ margin: '25px', width: '70vw' }} />
            <div>
                <div className="imgs_site" >
                    <p style={{ fontSize: '1.3em', marginLeft:'1vw' }}>
                        <h6 style={{ color: '#C68107', marginTop:'4px' }}>Teste de Inglês</h6>
                        Site oferece uma ferramenta interativa para avaliar a proficiência em inglês de usuários através de um teste composto por 20 perguntas cuidadosamente elaboradas, baseadas no Quadro Europeu Comum de Referência para Línguas (CEFR). Ao concluir o teste, os participantes recebem uma avaliação precisa de seu nível de inglês, variando de A1 (iniciante) a C2 (Avançado), permitindo-lhes entender claramente suas competências linguísticas atuais. 
                        <a  href="https://testedeingles.app.br/" target="_blank" rel="noopener noreferrer" style={{color:'#ff6b08'}}> Confira</a>.
                    </p>
                    <img src={WebSite_Englistest} style={{ width: '50%', height: '250px', marginLeft: '15px', borderRadius: '10px' }} />
                </div>
            </div>
            <hr style={{ margin: '25px', width: '70vw' }} />
            <div >
                <div className="imgs_site" >
                    <img src={WebSiteCOnsEletr} style={{ width: '50%', height: '250px', marginRight: '15px', borderRadius: '10px' }} />
                    <p style={{ fontSize: '1.3em', marginRight:'1vw' }}>
                        <h6 style={{ color: '#C68107' }}>Consumo de carros Elétricos</h6>
                        O site oferece uma ferramenta inovadora e essencial para proprietários de veículos elétricos, simplificando o cálculo do custo de uma recarga completa da bateria. Ao acessar a plataforma, os usuários podem facilmente selecionar sua rede de energia local e inserir a potência específica da bateria de seu veículo. Com base nessas informações, o sistema realiza automaticamente o cálculo, fornecendo uma estimativa precisa do custo de recarga.
                    </p>
                </div>
            </div>
            <hr style={{ margin: '25px', width: '70vw' }} />
            
        </div>
    )
}
export default Experience