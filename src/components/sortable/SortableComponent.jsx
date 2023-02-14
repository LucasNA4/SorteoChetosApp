import { SortableDrivePlayers } from "./SortableDrivePlayers";
import { SortableList } from "./SortableList";


export const SortableComponent = ({ couples, onSortEnd }) => {
    return (
        <ol className="list-group list-group-numbered mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="list-group">
                            <SortableList couples={ couples } onSortEnd={ onSortEnd } />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="list-group">
                            <SortableDrivePlayers couples={ couples } onSortEnd={ onSortEnd } />
                        </div>
                    </div>
                </div>
            </div>
        </ol>
    )
}
