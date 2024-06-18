import { useState } from "react";
import "../../Styles/Forms/Education.css";
import educationCapIcon from "../../Images/education_cap.svg";
import downArrowIcon from "../../Images/down_arrow.svg";
import upArrowIcon from "../../Images/up_arrow.svg";
import deleteButtonIcon from "../../Images/delete.svg";
import editIcon from "../../Images/edit.svg";

function Education({ schools, setSchools }) {
    const [isFormExpanded, setIsFormExpanded] = useState(false); // State for form display
    const [showSchools, setShowSchools] = useState(true); // State for showing universities
    const [editIndex, setEditIndex] = useState(null); // Index of the school being edited
    const [editedSchool, setEditedSchool] = useState({
        name: "",
        degree: "",
        startDate: "",
        endDate: "",
    });

    const toggleForm = () => {
        setIsFormExpanded(!isFormExpanded);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        const newSchool = {
            name: event.target.school.value,
            degree: event.target.degree.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
        };

        setSchools([...schools, newSchool]);
        setShowSchools(true); // Show the list of universities
    };

    const handleCancel = () => {
        setShowSchools(true);
    };

    const handleAddEducation = () => {
        setShowSchools(false);
    };

    const handleDeleteEducation = (index) => {
        const updatedSchools = schools.filter((school, currIndex) => currIndex !== index);
        setSchools(updatedSchools);
    };

    const handleEditEducation = (index) => {
        setEditIndex(index); // Set the index of the school being edited
        setEditedSchool({ ...schools[index] }); // Populate the temp data
        setShowSchools(false);
    };

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        const updatedSchools = [...schools];
        updatedSchools[editIndex] = editedSchool;
        setSchools(updatedSchools);
        setEditIndex(null);
        setShowSchools(true);
    };

    return (
        <div className="education">
            <div className="infoHeader">
                <img src={educationCapIcon} alt="Person" />
                <h2 id="segmentTitle">Education</h2>
                <button className="dropdownToggle" type="button" id="formToggleBtn" onClick={toggleForm}>
                    {isFormExpanded ? <img src={upArrowIcon} alt="Up Arrow" /> : <img src={downArrowIcon} alt="Down Arrow" />}
                </button>
            </div>
            {isFormExpanded ? (
                showSchools ? (
                    <div className="schoolsList">
                        {schools.length > 0 && (
                            <div className="universityList">
                                <ul>
                                    {schools.map((school, index) => (
                                        <li key={index}>
                                            <div>
                                                {school.name} / {school.degree}
                                            </div>
                                            <div className="listButtons">
                                                <button className="editButton" onClick={() => handleEditEducation(index)}>
                                                    <img src={editIcon} alt="Edit Button" />
                                                </button>
                                                <button className="deleteButton" onClick={() => handleDeleteEducation(index)}>
                                                    <img src={deleteButtonIcon} alt="Delete Button" />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button className="addEducationButton" onClick={handleAddEducation}>
                            + Education
                        </button>
                    </div>
                ) : editIndex !== null ? (
                    // Editing form
                    <form id="editEducationForm" className={isFormExpanded ? "expanded" : ""} onSubmit={handleSubmitEdit}>
                        <div className="inputGroup">
                            <label htmlFor="school">School *</label>
                            <input
                                type="text"
                                id="school"
                                name="school"
                                value={editedSchool.name}
                                onChange={(e) => setEditedSchool({ ...editedSchool, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="degree">Degree *</label>
                            <input
                                type="text"
                                id="degree"
                                name="degree"
                                value={editedSchool.degree}
                                onChange={(e) => setEditedSchool({ ...editedSchool, degree: e.target.value })}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="startDate">Start Date *</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={editedSchool.startDate}
                                onChange={(e) => setEditedSchool({ ...editedSchool, startDate: e.target.value })}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="endDate">End Date *</label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                value={editedSchool.endDate}
                                onChange={(e) => setEditedSchool({ ...editedSchool, endDate: e.target.value })}
                                required
                            />
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
                    <form id="educationForm" className={isFormExpanded ? "expanded" : ""} onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <label htmlFor="school">School *</label>
                            <input type="text" id="school" name="school" required></input>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="degree">Degree *</label>
                            <input type="text" id="degree" name="degree" required></input>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="startDate">Start Date *</label>
                            <input type="date" id="startDate" name="startDate" required></input>
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="endDate">End Date *</label>
                            <input type="date" id="endDate" name="endDate" required></input>
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

export default Education;
