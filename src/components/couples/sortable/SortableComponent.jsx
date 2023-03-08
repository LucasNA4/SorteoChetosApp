import { SortableRevesPlayers } from "./SortableRevesPlayers";
import { SortableDrivePlayers } from "./SortableDrivePlayers"


export const SortableComponent = ({ couples, onSortEnd, onSortStart }) => {
    return (
        <div className="container mt-4">
            <div>
                <div className="row">
                    <div className="col-4" style={{ padding: "0px" }}>
                        <h2 style={{ textAlign: "center", marginTop: "20px" }}>Zona  1</h2>

                        <h5 style={{ marginTop: "65px", marginBottom: "57px" }}>Cancha 1</h5>
                        <hr/>
                        <h5 style={{ marginTop: "56px" }}>Cancha 2</h5>

                        <h2 style={{ textAlign: "center", marginTop: "80px" }}>Zona 2</h2>
                        
                        <h5 style={{ marginTop: "68px", marginBottom: "57px" }}>Cancha 3</h5>
                        <hr />
                        <h5 style={{ marginTop: "58px" }}>Cancha 4</h5>
                    </div>
                    <div className="col-4"  style={{ padding: "0px", marginTop: "80px" }}>
                        <div className="list-group" style={{ textAlign: "right" }}>
                            <SortableRevesPlayers couples={ couples } onSortEnd={ onSortEnd } onSortStart={ onSortStart } />
                        </div>
                    </div>
                    
                    <div className="col-4"  style={{ padding: "0px", marginTop: "80px" }}>
                        <div className="list-group" style={{ textAlign: "left" }}>
                            <SortableDrivePlayers couples={ couples } onSortEnd={ onSortEnd } onSortStart={ onSortStart } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
