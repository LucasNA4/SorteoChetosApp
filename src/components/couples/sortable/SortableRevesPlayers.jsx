import { SortableContainer } from "react-sortable-hoc"
import { SortableReves } from "./SortableReves"


export const SortableRevesPlayers = SortableContainer(({ couples }) => {

    const estilizar = (i) => {

        if ( (i % 2) === 0 ) {
            return <p style={{ margin: 0 }}>V</p>;
        } else if ( i < 7 && i !== 3 ){
            return <hr />;
        }

        return null;
    }

    return (
        <div>
            {
                couples?.map( ({ couple }, i) => (
                    <div key={ i * 10 }>
                        <SortableReves key={ i } couple={ couple } index={ i } iterator={ i } />
                        {
                            estilizar(i)
                        }
                        {/* {
                            ( i === 3 ) ? <h2 style={{ textAlign: "left" }}>Zona 2</h2> : null
                        } */}
                    </div>
                    
                ))
            }
            
        </div>
    )
})
