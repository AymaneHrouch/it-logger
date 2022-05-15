import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const onSubmit = () => {
        if (fname === "" || lname === "") {
            M.toast({ html: "Please enter the first and last name" });
        } else {
            console.log(fname, lname);

            // Clear fields
            setFname("");
            setLname("");
        }
    };
    return (
        <div id="add-tech-modal" className="modal">
            <h4>New technicien</h4>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="fname" value={fname} onChange={e => setFname(e.target.value)} />
                    <label htmlFor="fname" className="active">
                        First Name
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="lname" value={lname} onChange={e => setLname(e.target.value)} />
                    <label htmlFor="lname" className="active">
                        Last Name
                    </label>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#" onClick={onSubmit} className="modal-close blue waves-effect waves-green btn">
                    Enter
                </a>
            </div>
        </div>
    );
};

export default AddTechModal;
