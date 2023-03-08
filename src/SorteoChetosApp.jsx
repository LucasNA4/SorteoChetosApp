import { useState } from "react";
import { CouplesForm, SortableComponent } from "./components";
import { generateCouples, validateFormData } from "./helpers";


export const SorteoChetosApp = () => {

    const [couples, setCouples] = useState([]);
    const [isFormValid, setIsFormValid] = useState({ valid: false, errorMessage: '' });
    const [playerToFind, setplayerToFind] = useState("");

    const setPlayers = (formDrives, formReves) => {
        setIsFormValid( validateFormData( formDrives, formReves ) );

        const newCouples = generateCouples( formDrives, formReves );
        setCouples( newCouples );
    }

    const onSortStart = ({ helper }) => {
        setplayerToFind( helper.innerText );
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        let couplesCopy = [...couples];

        const foundReves = couples.find( ({ couple }) => couple.reves === playerToFind );
        const foundDrive = couples.find( ({ couple }) => couple.drive === playerToFind );

        if ( foundReves ) {
            const auxReves = couplesCopy[oldIndex].couple.reves;
            couplesCopy[oldIndex].couple.reves = couplesCopy[newIndex].couple.reves;
            couplesCopy[newIndex].couple.reves = auxReves;
        } else if ( foundDrive ) {
            const auxDrive = couplesCopy[oldIndex].couple.drive;
            couplesCopy[oldIndex].couple.drive = couplesCopy[newIndex].couple.drive;
            couplesCopy[newIndex].couple.drive = auxDrive;
        } else console.log("Algo malio sal");

        setCouples(couplesCopy);
    }
        
    return (
        <div className="container">
            <CouplesForm setPlayers={ setPlayers } />

            {
                ( isFormValid.valid ) 
                    ? <SortableComponent couples={ couples } onSortEnd={ onSortEnd } onSortStart={ onSortStart } />
                    : <p>{ isFormValid.errorMessage }</p>
            }
        </div>
    )
}
