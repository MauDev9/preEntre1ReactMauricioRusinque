import React from 'react';
import PropTypes from 'prop-types';

const ItemListContainer = (props) => {
    return (
        <div>
            <h3>{props.greeting || defaultProps.greeting}</h3>
        </div>
    );
};

const propTypes = {
    greeting: PropTypes.string,
};

const defaultProps = {
    greeting: "No se ingresó saludo.",
};

export default ItemListContainer;