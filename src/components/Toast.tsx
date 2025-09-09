import './CSS/Toast.css'

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, duration = 1500, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    const removeTimer = setTimeout(() => {
      onClose();
    }, duration + 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [duration, onClose]);

  return (
    <div className={`toast ${visible ? "show" : ""}`}>
      {message}
    </div>
  );
}
