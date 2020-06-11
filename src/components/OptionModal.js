import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.select}
        contentLabel= "Select Opption"
        onRequestClose ={props.handleClosemodal}
    >
        <h3>Selected Option</h3>
        {props.select && <p>{props.select}</p> }
        <button onClick ={props.handleClosemodal}>Okay</button>
    </Modal>
)

export default OptionModal;
