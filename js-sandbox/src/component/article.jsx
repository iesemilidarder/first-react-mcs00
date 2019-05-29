import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const text = this.props.data;
        return (
            <div className='text'>
                <article className='col text-center'>
                    <p>{text}</p>
                </article>
            </div>
        );
    }
}
Article.propTypes = {
    data: PropTypes.array
};
