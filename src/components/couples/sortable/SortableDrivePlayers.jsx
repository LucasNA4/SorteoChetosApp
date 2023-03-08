import { SortableContainer } from "react-sortable-hoc"
import { SortableDrive } from "./SortableDrive";


export const SortableDrivePlayers = SortableContainer(({ couples }) => {

    const estilizar = (i) => {

        if ( (i % 2) === 0 ) {
            return <p style={{ margin: 0 }}>S</p>;
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
                        <SortableDrive key={ i } couple={ couple } index={ i } iterator={ i } />
                        {/* {
                            ( i === 4 ) ? <li className="list-group-item" style={{ marginTop: "100px" }}>{ couple.drive }</li> : <li className="list-group-item" style={{ margin: "0px" }}>{ couple.drive }</li>
                        } */}
                        {/* <li className="list-group-item" style={{ margin: "0px" }}>{ couple.drive }</li> */}
                        {
                            estilizar(i)
                        }
                    </div>
                ))
            }
        </div>
    )
})