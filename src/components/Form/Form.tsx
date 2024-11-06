import useFormData from "@/hooks/FormData/useFormData";
import { MessageNotification } from "@/utils/MessageNotification/MessageNotification";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster} from "sonner";
import { FormDataType, FormProps } from "@/types/FormDataType";

const Form = (props: FormProps) => 
{ 
  const {success, error} = MessageNotification();
  const {ButtonClicked} = props;

  const {
    register, 
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm<FormDataType>();
  
  const {FormData, setFormData} = useFormData();
  const {name, email, feedback} = FormData;

  const SubmitForm: SubmitHandler<FormDataType> = (data) => {
    //Método de useForm que comprueba que el formulario no tenga errores en el momento que se este enviando
    //y en caso afirmativo almacena los datos para mostrarlos en el DOM
    if(isValid)
    {
      success();
      setFormData(data);
    }
  }
  const SubmitError = () => error();

    return ( 
        <div className="p-12 relative flex flex-col rounded-xl bg-transparent bg-clip-border shadow-none">
          <form onSubmit={handleSubmit(SubmitForm, SubmitError)} className="mx-auto w-80 max-w-screen-lg mobile:w-full">
              <h4 className="mb-8 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
                  {isSubmitSuccessful ? "¡Gracias por contactarme!" : "¡Contáctame!"}
              </h4>

              {/*Pedimos la información del nombre, email y feedback cuando el formulario no se haya enviado*/}

              {!isSubmitSuccessful &&
                <div className="mb-4 flex flex-col gap-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                      <input
                        className="text-white peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " 
                        {...register("name", {
                            required: {
                              value: true,
                              message: "El nombre es obligatorio"
                            },
                            pattern: {
                              value: /^[a-zA-Z]+$/,
                              message: "Nombre inválido"
                            }
                        })} 
                      />
                      <label className="text-white before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
                        Name
                      </label>
                      {errors?.name && <p className="mt-2 text-[#f87171] text-sm">🔥 {errors.name.message}</p>}
                    </div>

                    <div className={`${errors.name ? "mt-8" : "mt-0"} relative h-11 w-full min-w-[200px]`}>
                        <input
                          className="text-white peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" " 
                        {...register("email", {
                            required: {
                              value: true,
                              message: "El correo es obligatorio"
                            },
                            pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Correo electrónico no válido"
                            }
                          }) }
                        />
                        <label className="text-white before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
                          Email
                        </label>
                        {errors?.email && <p className="mt-2 text-[#f87171] text-sm">🔥 {errors.email.message}</p>}
                    </div>
                    <div className={`${errors.email ? "mt-8" : "mt-0"} relative h-40 w-full min-w-[200px]`}>
                  <textarea
                    className="text-white peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none"
                    placeholder=" " 
                    {...register("feedback", {
                      required: {
                        value: true,
                        message: "Debes de poner un comentario"
                      }
                    })   
                    }
                    ></textarea>
                  <label className="text-white before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
                    Comentario
                  </label>
                  {errors?.feedback && 
                      <p className="mt-2 text-[#f87171] text-sm">🔥 {errors.feedback.message}</p>   
                    }
                    </div>
                </div>
              }
              {/*Mostramos la información del usuario cuando la respuesta del formulario haya sido exitosa*/}
              {isSubmitSuccessful &&
                  <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Datos</h2>
                      <div className="mb-4">
                      <strong className="block text-gray-700">Nombre:</strong>
                      <span className="text-gray-900">{name}</span>
                      </div>
                      <div className="mb-4">
                    <strong className="block text-gray-700">Correo:</strong>
                    <span className="text-gray-900">{email}</span>
                      </div>
                      <div>
                          <strong className="block text-gray-700 mb-2">Tú Comentario:</strong>
                          <p className="bg-gray-100 p-4 rounded-md border border-gray-200 text-gray-800">
                            {feedback}
                          </p>
                      </div>
                  </div> 
              }
              {/*Condicional renderizado: 
                  El primero muestra el botón ENVIA TUS DATOS cuando el form no se ha enviado.
                  El segundo tiene objetivo de resetear todo el estado del formulario, como sus datos,
                  para volver a la vista inicial del form.
              */}

              {!isSubmitSuccessful ?  
                  <button
                    className="mt-16 block w-full select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-light="true"
                    onClick={ButtonClicked}
                  >
                    ENVÍA TUS DATOS
                </button> :
                  <input
                    className="mt-16 block w-full select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() =>
                      //Elimina todo el estado del formulario
                      reset()
                    }
                  value="VOLVER AL FORMULARIO"
                />
            }
          </form>

          <Toaster position="bottom-right" richColors/>
        </div>
    )
}
export default Form;