
const checkRepetead = ( valor, indice, lista ) => {
    return (lista.indexOf(valor) === indice);
}

export const validateFormData = ( formDrives, formReves ) => {

    const isDataValid = { valid: true };

    if ( formDrives.length !== formReves.length ) return { valid: false, errorMessage: 'La cantidad de drives no coincide con la cantidad de reves' };

    for (let i = 0; i < formDrives.length; i++) {
        if ( formDrives.includes(formReves[i]) || formReves.includes(formDrives[i]) ) return { valid: false, errorMessage: 'Hay jugadores con doble posicion' };
    }

    for (let i = 0; i < formDrives.length; i++) {
        if ( formDrives[i] === '' || formReves[i] === '' ) return { valid: false, errorMessage: 'Tiene que ingresar un jugador luego de cada coma ","' };
    }

    if (!(formDrives.every( checkRepetead )) || !(formReves.every( checkRepetead ))) return { valid: false, errorMessage: 'Hay jugadores repetidos en una de las listas' }

    return isDataValid;
}
