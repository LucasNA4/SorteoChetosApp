import { useForm } from "../hooks/useForm";


export const CouplesForm = ({ setPlayers }) => {

    const { formDrives, formReves, onInputChange } = useForm({ formDrives: [], formReves: [] });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPlayers( formDrives, formReves );
    }

    return (
        <form onSubmit={ handleFormSubmit }>
            <div className="form-floating mb-3">
                <input type="text" placeholder="reves" name="formReves" id="formReves" onChange={ onInputChange } value={ formReves } className="form-control" required />
                <label htmlFor="formReves" className="form-label">Reves</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" placeholder="drives" name="formDrives" id="formDrives" onChange={ onInputChange } value={ formDrives } className="form-control" required />
                <label htmlFor="formDrives" className="form-label">Drives</label>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Sortear</button>
            </div>
        </form>
    )
}
