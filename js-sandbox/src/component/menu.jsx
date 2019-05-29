import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myData = this.props.links;
        return (
            <div className='row'>
                <header className='col-10'>
                    <div className='navbar navbar-dark bg-dark'>
                        {myData.map((o) => {
                                return <a key={o.label} href={o.link}
                                    onClick={()=>this.props.onclick(o.id)}>{o.label}</a>
                            }
                        )}
                    </div>
                </header>
            </div>
        );
    }
}
Menu.propTypes = {
    links: PropTypes.array.isRequired
};
export default Menu;