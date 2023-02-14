import { SortableContainer } from "react-sortable-hoc"
// import { ReactSortable } from "react-sortablejs";
// import { Swap } from "sortablejs";
import Sortable from "sortablejs";
// import { SortableItem } from "./SortableItem"
import { SortableRevesTestItem } from "./SortableRevesTestItem";

// Sortable.mount(new Swap());

export const SortableRevesTest = ({ couples, setCouples, onSortEnd }) => {

    const sortableReves = document.getElementById('sortableReves');
    console.log(sortableReves);

    if ( sortableReves ) {
        Sortable.create( sortableReves, {
            swap: true, // Enable swap plugin
	        swapClass: 'highlight', // The class applied to the hovered swap item
            animation: 150,
            // onEnd: (e) => {
            //     let couplesCopy = [...couples];

            //     const auxReves = couplesCopy[e.oldIndex].couple.reves;
            //     couplesCopy[e.oldIndex].couple.reves = couplesCopy[e.newIndex].couple.reves;
            //     couplesCopy[e.newIndex].couple.reves = auxReves;

            //     setCouples(couplesCopy);
            //     // console.log({ oldIndex: e.oldIndex, newIndex: e.newIndex })
            //     // onSortEnd({ oldIndex: e.oldIndex, newIndex: e.newIndex });
            // }
        });
    }

    return (
        <div id="sortableReves">
            {
                couples?.map( ({ couple }, i) => (
                    <SortableRevesTestItem key={ i } couple={ couple } />
                ))
            }
        </div>
    )
}