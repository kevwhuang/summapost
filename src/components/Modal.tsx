import React from 'react';

import useCloseModal from '../hooks/useCloseModal';

import '../styles/components/Modal.scss';

function Modal(): React.ReactElement {
    return (
        <div className="modal" onClick={useCloseModal}>
            <img />
        </div>
    );
}

export default Modal;
