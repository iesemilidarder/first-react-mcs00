import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DummyHeader from './component/DummyHeader';

const myWebData = [{
    id: 1,
    label: "Home",
    link: "#",
    title: "My home",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam repudiandae tempora tempore temporibus veniam veritatis? Alias aut beatae fugit."
}, {
    id: 2,
    label: "Contact", link: "#",
    title: "My Contact",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam repudiandae tempora tempore temporibus veniam veritatis? Alias aut beatae fugit."
}, {
    id: 3,
    label: "Shop", link: "#",
    title: "My shop",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam repudiandae tempora tempore temporibus veniam veritatis? Alias aut beatae fugit."
}];

class MyWebApp extends Component {
    constructor(props) {
        super(props);
        this.state = {currentId: 1};
        //binding!!! WTF
        this._changeSelection = this._changeSelection.bind(this);
        //this._getElement = this._getElement.bind(this);
    }

    _changeSelection(id) {
        if (id !== undefined) {
            this.setState({currentId: id});
        }
    }

    _getElement(i) {
        if (i !== undefined) {
            for (let q = 0; q < myWebData.length; q++) {
                if (myWebData[q].id === i) {
                    return myWebData[q];
                }
            }
            /* NO: myWebData.map(q => {})*/
        }
        return {title: 404, content: "Mierder!"};
    }

    render() {
        const content = this._getElement(this.state.currentId);
        console.log("Seleccionado:" + this.state.currentId);
        console.log(content);
        return <React.Fragment>
            <DummyHeader data={myWebData}
                         onclick={this._changeSelection}/>
            <main className={"row"}>
                <h1>{content.title}</h1>
                <p>{content.content}</p>
            </main>
            <footer className={"row"}>Hola mundo</footer>
        </React.Fragment>;
    }
}


ReactDOM.render(<MyWebApp/>, document.getElementById('app'));
