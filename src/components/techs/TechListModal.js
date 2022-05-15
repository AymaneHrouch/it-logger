import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TechItem from "./TechItem";
import axios from 'axios';

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);
    const getTechs = async () => {
        setLoading(true)
        const res = await axios.get("/techs");
        const data = res["data"];
        setTechs(data);
        setLoading(false)
    };

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">{!loading && techs !== null && techs.map(tech => <TechItem tech={tech} key={tech.id} />)}</ul>
            </div>
        </div>
    );
};

export default TechListModal;
