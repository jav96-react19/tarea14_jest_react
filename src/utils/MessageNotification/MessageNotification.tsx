import {toast} from "sonner";
export const MessageNotification = () => {    
    return {
        success: () => toast.success("Se ha registrado correctamente"),
        error: () => toast.error("Se ha producido un error al registrar"),
    }
}