import React, { useRef, useState, useEffect } from "react";
import "./stylesLayaout.css";

export default function MenuLay() {
  const { audioBtn, controlsBtn, guideBtn, logoutbtn } = useRef();

  const [controlModalOpen, setControlModalOpen] = useState(false);
  const [guidelModalOpen, setGuidelModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openControlModal = () => {
    setControlModalOpen(true);
  };

  const openGuiaModal = () => {
    setGuidelModalOpen(true);
  };

  const closeModal = () => {
    setControlModalOpen(false);
    setGuidelModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-box">
      <section className="contend-box">
        <div className="audio-box">
          <button className="btn-audio" ref={audioBtn}>
            <img
              src="/assets/images/uiImages/btns/audiobtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Audio</text>
        </div>
        <div className="contro-box">
          <button
            className="btn-control"
            ref={controlsBtn}
            onClick={openControlModal}
          >
            <img
              src="/assets/images/uiImages/btns/controlsbtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Controles</text>
        </div>
        <div className="guide-box">
          <button className="btn-guide" ref={guideBtn} onClick={openGuiaModal}>
            <img
              src="/assets/images/uiImages/btns/guidebtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Guia</text>
        </div>
        <div className="logout-box">
          <button className="btn-logout" ref={logoutbtn}>
            <img
              src="/assets/images/uiImages/btns/logoutbtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Salir</text>
        </div>
      </section>
      {/* Modal para los controles */}

      <div className="hover-root">

        {controlModalOpen && (
          <div id="controlModal" className="modal" ref={modalRef}>
            <div className="modal-content">
              {/* <span className="close" onClick={closeModal}>
              &times;
            </span> */}
              <img
                alt=""
                src="/assets/images/uiImages/controls/KeysGame1.png"
              />
            </div>
          </div>
        )}

        {guidelModalOpen && (
          <div id="guideModal" className="modal" ref={modalRef}>
            <div className="modal-content">
              {/* <span className="close" onClick={closeModal}>
              &times;
            </span> */}
              <img alt="" src="/assets/images/uiImages/guides/guideBox1.png" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}