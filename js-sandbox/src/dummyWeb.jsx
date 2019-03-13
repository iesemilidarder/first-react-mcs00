import React from 'react';
import ReactDOM from 'react-dom';
import DummyHeader from './component/DummyHeader';

const myMenu = [{label: "Home", link: "#"}
    , {label: "Contact", link: "#"}
    , {label: "Shop", link: "#"}];

ReactDOM.render(
    <React.Fragment>
        <DummyHeader data={myMenu}/>
        <main className={"row"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid enim fuga in laboriosam molestiae
            necessitatibus quo. Autem, distinctio, voluptas.
        </main>
        <footer className={"row"}>Hola mundo</footer>
    </React.Fragment>
    , document.getElementById('app'));
