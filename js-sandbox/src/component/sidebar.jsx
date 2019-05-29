import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false,};
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        this.setState(function (prevState)  {
            return {show: !prevState.show};
        });
    }

    render() {
        const info = this.props.info;
        return (
            <div classNam e={this.state.show ? 'col-1  justify-content-center' : 'col-1 justify-content-center'}>
                <button onClick={this.changeState} className='btn btn-dark'>
                    {this.state.show ? 'Show' : 'Hide'}
                </button>
                <div className={this.state.show ? 'invisible' : 'visible'}>
                    <aside className='col-1'>
                            {info.map((l) => {
                                    return <ul key={l.label}>{l.label}</ul>
                                }
                            )}
                    </aside>
                </div>
            </div>
        );
    }
}
SidebarComponent.propTypes = {
    info: PropTypes.array,
    show: PropTypes.bool
};
export default SidebarComponent;