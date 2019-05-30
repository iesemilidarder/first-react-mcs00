import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './component/menu';
import SidebarComponent from './component/sidebar';
//import image from './img/athm.jpg';
//import image2 from './img/fcb.jpg'
//import image3 from './img/rm.jpg'

const myData = [{
    id: 1,
    label: 'FC Barcelona',
    link: '#',
    title: 'Fútbol Club Barcelona',
    text: 'El Fútbol Club Barcelona (en catalán, Futbol Club Barcelona) es una entidad polideportiva de Barcelona, España. Fue fundado como club de fútbol el 29 de noviembre de 1899.Es uno de los cuatro clubes profesionales de España junto a Real Madrid, Athletic Club y Osasuna que no es sociedad anónima, de manera que la propiedad del club recae en sus socios.' +
        'El F. C. Barcelona es conocido popularmente como Barça (abreviación de la pronunciación de Barcelona en catalán central) y sus hinchas como culés9​(pronunciación del catalán «culers»); también, y en referencia a sus colores, se utiliza el término azulgranas, que procede del catalán «blaugranes», tal como aparece en su himno, el «Cant del Barça», el cual en su segunda línea menciona «Som la gent blaugrana» (en castellano, «Somos la gente azulgrana»). A nivel institucional, el Fútbol Club Barcelona denomina a sus aficionados como «barcelonistas» y tiene a su servicio, para atender a socios, simpatizantes y público en general, la OAB, sigla que significa Oficina de Atención al Barcelonista, donde quien lo solicita es atendido en los idiomas oficiales del club, que son el catalán, el castellano y el inglés.' +
        'Una de las principales características del F. C. Barcelona es su carácter polideportivo. Se distingue de las demás instituciones deportivas por el hecho de que posee un extenso palmarés a nivel europeo, por el alto nivel de formación de sus jugadores, el potencial económico que maneja, por la calidad de los jugadores y también porque «posee una remarcable cultura del juego y del triunfo». Asimismo, los medallistas olímpicos que han representado a la entidad blaugrana han conquistado once oros, veintitrés de platas y veintiocho bronces en las distintas disciplinas deportivas.​'
},
    {
        id: 2,
        label: 'Real Madrid',
        link: '#',
        title: 'Real Madrid',
        text: 'El Real Madrid Club de Fútbol, más conocido simplemente como Real Madrid, es una entidad polideportiva con sede en Madrid, España. Fue declarada oficialmente registrada como club de fútbol por sus socios el 6 de marzo de 1902 con el objeto de la práctica y desarrollo de este deporte si bien sus orígenes datan al año 1900, y su denominación de (Sociedad) Madrid Foot-ball Club a noviembre de 1901. Tuvo a Julián Palacios y los hermanos Juan Padrós y Carlos Padrós como principales valedores de su creación. Identificado por su color blanco del que recibe el apelativo de «blancos» o «merengues», es uno de los cuatro clubes profesionales de fútbol del país cuya entidad jurídica no es la de sociedad anónima deportiva (S. A. D.), ya que su propiedad recae en sus más de 99 000 socios.​ Otra salvedad comparte con el Athletic Club y el Fútbol Club Barcelona al participar sin interrupción en la máxima categoría de la Liga Nacional de Fútbol Profesional, la Primera División de España, desde su establecimiento en 1929.12​ En ella posee los honores de haber sido el primer líder histórico de la competición,13​ el de club con más títulos, y el de la máxima puntuación en una sola edición'
    }, {
        id: 3,
        label: 'Athletico de Madrid',
        link: '#',
        title: 'Athletico de Madrid',
        text: 'El Club Atlético de Madrid es un club de fútbol (y antiguo club polideportivo) español de la ciudad de Madrid, fundado el 26 de abril de 1903. Su primer equipo masculino milita en la Primera División de España y disputa sus partidos como local desde la temporada 2017/18, en el Estadio Metropolitano, con capacidad de 69 829 espectadores.'
    }];
const sideInfo = [{label: 'FCBarcelona'}, {label: 'RealMadrid'}, {label: 'Athletico'}];

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {currentId: 1};
        this._changeSelection = this._changeSelection.bind(this);
    }

    _changeSelection(id) {
        if (id !== undefined) {
            this.setState({currentId: id});
        }
    }

    _getElement(i) {
        if (i !== undefined) {
            for (let q = 0; q < myData.length; q++) {
                if (myData[q].id === i) {
                    return myData[q];
                }
            }
        }
    }

    render() {
        const content = this._getElement(this.state.currentId);
        console.log('Selection: ' + this.state.currentId);
        console.log(content);
        return <React.Fragment>
            <Menu links={myData}
                  onclick={this._changeSelection}/>
            <div className={'row'}>
                <main className={'col'}>
                    <h1 className={'text-center'}>{content.title}</h1>
                    <p>{content.text}</p>
                </main>
                <SidebarComponent info={sideInfo}/>
            </div>
            <div className="col-2">
                <img src={'https://statics.laliga.es/img/campo-logo-v4.jpg'} />
            </div>
        </React.Fragment>;
    }
}


ReactDOM.render(
    <div className='container'>
        <Article/>
    </div>
    , document.getElementById('app')
);