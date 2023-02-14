import { DrivePlayers } from "../DrivePlayers";
import { SortableRevesPlayers } from "./SortableRevesPlayers";


export const SortableComponent = ({ couples, onSortEnd }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="list-group">
                        <SortableRevesPlayers couples={ couples } onSortEnd={ onSortEnd } />
                    </div>
                </div>
                <div className="col-6">
                    <div className="list-group">
                        <DrivePlayers couples={ couples } onSortEnd={ onSortEnd } />
                    </div>
                </div>
            </div>
        </div>
    )
}
