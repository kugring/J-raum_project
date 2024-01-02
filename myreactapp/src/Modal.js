import React, {useState} from 'react';
import './Modal.css';

const Modal = ({isOpen, onClose, children, option}) => {
	const modalStyle = {
		display: isOpen ? 'flex' : 'none',
		// 추가적인 스타일 속성들을 필요에 따라 설정
	};

	return (
		<div className="modal_overlay" style={modalStyle}>
			<div className="modal">
				<div className="modal-content">
					<span className="close-btn" onClick={onClose}>&times;</span>
					{children}
					{option}
				</div>
			</div>
		</div>
	);
};


export default Modal;