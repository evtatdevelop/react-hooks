import { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null

  const {type, text} = alert;
  return (
    <div 
      className={`alert alert-${type || 'secondary'} alert-dismissible fade show`} 
      role="alert"
    >
      {text}
      <button 
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      ></button>
    </div>
  )
}