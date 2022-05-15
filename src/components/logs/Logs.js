import React, { useState, useEffect } from "react";
import axios from "axios";
import LogItem from "./LogItem";
import Preloader from "./../layout/Preloader";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, []);

    const getLogs = async () => {
        setLoading(true);
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(500);
        const res = await axios.get("/logs");
        const data = res["data"];
        setLogs(data);
        setLoading(false);
    };

    if (loading) return <Preloader />;
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? <p className="center">No blogs to show</p> : logs.map(log => <LogItem log={log} />)}
        </ul>
    );
};

export default Logs;
