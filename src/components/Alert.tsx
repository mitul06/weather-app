import React, { FC } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="alert-main">
      <div className="alert-close" onClick={onClose}></div>
      <div className="alert-card">
        <header className="alert-header">
          <p className="alert-p">{message}</p>
        </header>
        <footer className="alert-footer">
          <button className="alert-button" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Alert;
