import React from "react";
import '../../assets/css/styles.css';

export default function MessageBox({ message, show }) {
  return (
    <div className={`message-box ${show ? "show" : ""}`}>
      {message}
    </div>
  );
}
