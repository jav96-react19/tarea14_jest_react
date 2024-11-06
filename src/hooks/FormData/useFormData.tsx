import {useState} from "react";
import { FormDataType } from "@/types/FormDataType";
const useFormData = () => 
{
    const [FormData, setFormData] = useState<FormDataType>({
        name: "", 
        email: "", 
        feedback: ""
    });

    return {FormData, setFormData};
}
export default useFormData;