import { useState } from "react";
import { CouplesForm, SortableComponent } from "./components";
import { generateCouples } from "./helpers/generateCouples";
import { validateFormData } from "./helpers/validateFormData";


export const SorteoChetosApp = () => {

    const [couples, setCouples] = useState([]);
    const [isFormValid, setisFormValid] = useState({ valid: true, errorMessage: '' })

    const setPlayers = (formDrives, formReves) => {
        setisFormValid( validateFormData( formDrives, formReves ) );
        if ( !isFormValid.valid ) return;

        const newCouples = generateCouples( formDrives, formReves );
        setCouples( newCouples );
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        let couplesCopy = [...couples];

        const auxReves = couplesCopy[oldIndex].couple.reves;
        couplesCopy[oldIndex].couple.reves = couplesCopy[newIndex].couple.reves;
        couplesCopy[newIndex].couple.reves = auxReves;

        setCouples(couplesCopy);
    }

    return (
        <div className="container">
            <CouplesForm setPlayers={ setPlayers } />

            {
                ( isFormValid.valid ) 
                    ? <SortableComponent couples={ couples } onSortEnd={ onSortEnd } />
                    : <p>{ isFormValid.errorMessage }</p>
            }
        </div>
    )
}
