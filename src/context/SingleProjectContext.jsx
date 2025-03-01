
import {  createContext } from 'react';
import { dataofprojects } from '../data/dataofprojects';
import { useParams } from "react-router-dom";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
    let { id } = useParams();
    const projectId = parseInt(id, 10); // Convert id to a number (since useParams returns a string)

    // Find the project with the matching ID
    const selectedProject = dataofprojects.find(project => project.id === projectId);

    return (
        <SingleProjectContext.Provider value={{ selectedProject }}>
            {children}
        </SingleProjectContext.Provider>
    );
};

export default SingleProjectContext;

