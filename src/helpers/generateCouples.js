

export const generateCouples = ( formDrives, formReves ) => {

    let newCouples = [];
    let auxDrives = formDrives;
    let auxReves = formReves;
    const iterator = auxDrives.length;

    for (let i = 0; i < iterator; i++) {
        let randomDrive = auxDrives[Math.floor( Math.random() * auxDrives.length )];
        let randomReves = auxReves[Math.floor( Math.random() * auxReves.length )];
        newCouples = [ ...newCouples, { id: i, couple: { reves: randomReves, drive: randomDrive }} ];
        auxDrives = auxDrives.filter( (drive) => drive !== randomDrive );
        auxReves = auxReves.filter( (reves) => reves !== randomReves );
    }

    return newCouples;
}
