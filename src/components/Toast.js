import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Style.scss";

export const warningMessage = (message) => {
    toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'warning-message'
    });
}

export const successMessage = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        className: 'success-message'
    });
}

export const dangerMessage = (message) => {
    toast.danger(message, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'danger-message'
    });
}

export const warningMessageCenter = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
}

export const successUpdate = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_RIGHT });
}