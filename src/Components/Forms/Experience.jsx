import "../../Styles/Forms/Experience.css";
import { useState } from "react";
import briefcaseIcon from "../../Images/briefcase.svg";
import downArrowIcon from "../../Images/down_arrow.svg";
import upArrowIcon from "../../Images/up_arrow.svg";
import deleteButtonIcon from "../../Images/delete.svg";
import editIcon from "../../Images/edit.svg";

function Experience({ companies, setCompanies }) {
    const [isFormExpanded, setIsFormExpanded] = useState(false); // State for form display
    const [showCompanies, setShowCompanies] = useState(true); // State for showing universities
    const [editIndex, setEditIndex] = useState(null); // Index of the school being edited
    const [editedCompany, setEditedCompany] = useState({
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        description: "",
    });

    const toggleForm = () => {
        setIsFormExpanded(!isFormExpanded);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        const newCompany = {
            companyName: event.target.companyName.value,
            positionTitle: event.target.positionTitle.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            description: event.target.description.value,
        };

        setCompanies([...companies, newCompany]);
        setIsFormExpanded(true); // Hide the form after submission
        setShowCompanies(true); // Show the list of universities
    };

    const handleCancel = () => {
        setIsFormExpanded(true);
        setShowCompanies(true);
    };

    const handleAddExperience = () => {
        setIsFormExpanded(true);
        setShowCompanies(false);
    };

    const handleDeleteExperience = (index) => {
        const updatedCompanies = companies.filter((company, currIndex) => currIndex !== index);
        setCompanies(updatedCompanies);
    };

    const handleEditExperience = (index) => {
        setEditIndex(index); // Set the index of the school being edited
        setEditedCompany({ ...companies[index] }); // Populate the temp data
        setShowCompanies(false);
    };

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        const updatedCompanies = [...companies];
        updatedCompanies[editIndex] = editedCompany;
        setCompanies(updatedCompanies);
        setEditIndex(null);
        setShowCompanies(true);
    };

    return (
        <div className="experience">
            <div className="infoHeader">
                <img src={briefcaseIcon} alt="Person" />
                <h2 id="segmentTitle">Experience</h2>
                <button className="dropdownToggle" type="button" id="formToggleBtn" onClick={toggleForm}>
                    {isFormExpanded ? <img src={upArrowIcon} alt="Up Arrow" /> : <img src={downArrowIcon} alt="Down Arrow" />}
                </button>
            </div>
            {isFormExpanded ? (
                showCompanies ? (
                    <div className="companiesList">
                        {companies.length > 0 && (
                            <div className="temp">
                                <ul>
                                    {companies.map((company, index) => (
                                        <li key={index}>
                                            <div>
                                                {company.name} / {company.positionTitle}
                                            </div>
                                            <div className="listButtons">
                                                <button className="editButton" onClick={() => handleEditExperience(index)}>
                                                    <img src={editIcon} alt="Edit Button" />
                                                </button>
                                                <button className="deleteButton" onClick={() => handleDeleteExperience(index)}>
                                                    <img src={deleteButtonIcon} alt="Delete Button" />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button className="addExperienceButton" onClick={handleAddExperience}>
                            + Experience
                        </button>
                    </div>
                ) : editIndex !== null ? (
                    // Editing form
                    <form id="editExperienceForm" className={isFormExpanded ? "expanded" : ""} onSubmit={handleSubmitEdit}>
                        <div className="inputGroup">
                            <label htmlFor="companyName">Company Name *</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={editedCompany.companyName}
                                onChange={(e) => setEditedCompany({ ...editedCompany, companyName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="positionTitle">Position Title *</label>
                            <input
                                type="text"
                                id="positionTitle"
                                name="positionTitle"
                                value={editedCompany.positionTitle}
                                onChange={(e) => setEditedCompany({ ...editedCompany, positionTitle: e.target.value })}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="startDate">Start Date *</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={editedCompany.startDate}
                                onChange={(e) => setEditedCompany({ ...editedCompany, startDate: e.target.value })}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="endDate">End Date *</label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                value={editedCompany.endDate}
                                onChange={(e) => setEditedCompany({ ...editedCompany, endDate: e.target.value })}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="description">
                                <span>Description</span>
                                <span id="optionalText">optional</span>
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={editedCompany.description}
                                onChange={(e) => setEditedCompany({ ...editedCompany, description: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="buttons">
                            <button className="cancelButton" type="button" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className="saveButton" type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                ) : (
                    <form id="experienceForm" className={isFormExpanded ? "expanded" : ""} onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label htmlFor="companyName">Company Name *</label>
                            <input type="text" id="companyName" name="companyName" required></input>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="positionTitle">Position Title *</label>
                            <input type="text" id="positionTitle" name="positionTitle" required></input>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="startDate">Start Date *</label>
                            <input type="date" id="startDate" name="startDate" required></input>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="endDate">End Date *</label>
                            <input type="date" id="endDate" name="endDate" required></input>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="description">
                                <span>Description</span>
                                <span id="optionalText">optional</span>
                            </label>
                            <textarea id="description" name="description"></textarea>
                        </div>
                        <div className="buttons">
                            <button className="cancelButton" type="button" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className="saveButton" type="submit">
                                Save
                            </button>
                        </div>
                    </form>
                )
            ) : (
                <></>
            )}
        </div>
    );
}

export default Experience;
