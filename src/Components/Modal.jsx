import "./Modal.css"
import React, {useEffect} from 'react';

function toggleBodyScrollLock(isModalOpen) {
    const body = document.body;
  
    if (isModalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }
  

export default function Modal({show, closeModal,children}){

    useEffect(() => {
        if (show){
            toggleBodyScrollLock(true);
        }
        else{
            toggleBodyScrollLock(false);
        }
    }, [show]);
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <span className="close" onClick={closeModal}>&times;</span>
                    {children}
                </div>
            </div>
        </div>
    )
}