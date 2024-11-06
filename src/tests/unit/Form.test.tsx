import {fireEvent, render, screen, act} from "@testing-library/react"
import '@testing-library/jest-dom'

import Form from "@/components/Form/Form"

test("render App component", () => 
{
    render(<Form />)
})

//Test que controla cuando se clica el botón de ENVÍA TUS DATOS

test("submit action user", async() => 
{
    /*Mock que controlará el comportamiento del botón, que nos permitirá
    saber si el usuario ha clicado en el botón de ENVÍA TUS DATOS*/
    const submitButton: jest.Mock = jest.fn()

    render(<Form ButtonClicked={submitButton}/>);
    
    await act(async() => 
    {
        //screen.getByText --> Accedemos al botón con el texto de ENVÍA TUS DATOS
        //fireEvent.click --> Evento que dispara el click del botón

        //Simulo el click dentro del botón de ENVÍA TUS DATOS
        fireEvent.click(screen.getByText("ENVÍA TUS DATOS"));
    })
    //Controlamos si el mock ha sido llamado almenos una vez
    expect(submitButton).toHaveBeenCalled();
})