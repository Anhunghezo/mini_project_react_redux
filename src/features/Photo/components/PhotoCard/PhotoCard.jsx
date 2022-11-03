import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody } from 'reactstrap';
import './PhotoCard.scss';
import { useState } from 'react';
PhotoCard.propTypes = {
    photo: PropTypes.object,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
};
PhotoCard.defaultProps = {
    photo: {},
    onEditClick: null,
    onRemoveClick: null,
}

function PhotoCard(props) {
    const [modal, setModal] = useState(false);
    const { photo, onEditClick, onRemoveClick } = props;

    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo);
    }

    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(photo);
    }

    const toggle = () => setModal(!modal);

    return (
        <div className="photo" onClick={toggle}>
            <Modal isOpen={modal} toggle={toggle} size='lg' keyboard={true} centered={true}>
                <ModalBody>
                    <img src={photo.photo} alt={photo.title} className='img-Modal' />
                </ModalBody>
            </Modal>

            <img src={photo.photo} alt={photo.title} />
            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>

                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={handleEditClick}>
                            Edit
                        </Button>
                    </div>

                    <div>
                        <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PhotoCard;