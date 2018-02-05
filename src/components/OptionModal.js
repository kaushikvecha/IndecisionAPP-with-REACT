import React from "react";
import Modal from "react-modal";

const OptionModal = (props)=>(
    <div>
    <Modal isOpen={!!props.handleSelectedOption} contentLabel="selected option" onRequestClose={props.handleOkayButton} ariaHideApp={false} closeTimeoutMS= {200} className="modal">
    <h1 className="modal__title">Selected option</h1>
    {props.handleSelectedOption && <p className="modal__body">{props.handleSelectedOption}</p>}
    <button className="button" onClick={props.handleOkayButton}>
    Okay</button>
    </Modal>
    </div>
);
export default OptionModal;