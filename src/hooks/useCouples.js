import { useContext, useState } from "react";


export const useCouples = ( i, couple, couples ) => {

    // const { couples } = useContext(CouplesContext);
    const [indexOver, setIndexOver] = useState(-1);
    console.log(couple);

    if ( JSON.stringify( couples[i].couple ) === JSON.stringify( couple ) ) {
        // indexFound = i;
        // indexFound = couples[i].couple.id;
        setIndexOver(i);
    }

    return indexOver;
}
