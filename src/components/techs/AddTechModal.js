import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";

const AddTechModal = ({ addTech }) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const onSubmit = () => {
        if (fname === "" || lname === "") {
            M.toast({ html: "Please enter the first and last name" });
        } else {
            addTech({
                firstName: fname,
                lastName: lname,
            });
            M.toast({ html: `${fname} ${lname} was added!!!` });

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
                    <input
                        type="text"
                        name="fname"
                        value={fname}
                        onChange={e => setFname(e.target.value)}
                    />
                    <label htmlFor="fname" className="active">
                        First Name
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <input
                        type="text"
                        name="lname"
                        value={lname}
                        onChange={e => setLname(e.target.value)}
                    />
                    <label htmlFor="lname" className="active">
                        Last Name
                    </label>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#"
                    onClick={onSubmit}
                    className="modal-close blue waves-effect waves-green btn"
                >
                    Enter
                </a>
            </div>
        </div>
    );
};

export default connect(null, { addTech })(AddTechModal);
