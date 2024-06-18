import { useState } from "react";
import downArrowIcon from "../../Images/down_arrow.svg";
import upArrowIcon from "../../Images/up_arrow.svg";
import personIcon from "../../Images/person.svg";
import "../../Styles/Forms/PersonalInformation.css";

function PersonalInformation({ personalInfoData, onInputChange }) {
    const [isFormExpanded, setIsFormExpanded] = useState(true); // State for form display

    const toggleForm = () => {
        setIsFormExpanded(!isFormExpanded);
    };
    return (
        <div className="personalInfo">
            <div className="infoHeader">
                <img src={personIcon} alt="Person" />
                <h2 id="segmentTitle">Personal Information</h2>
                <button className="dropdownToggle" type="button" id="formToggleBtn" onClick={toggleForm}>
                    {isFormExpanded ? <img src={upArrowIcon} alt="Up Arrow" /> : <img src={downArrowIcon} alt="Down Arrow" />}
                </button>
            </div>

            <form id="personalInfoForm" className={isFormExpanded ? "expanded" : ""}>
                <div className="inputGroup">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={personalInfoData.fullName}
                        onChange={onInputChange}
                        required
                    ></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={personalInfoData.email} onChange={onInputChange} required></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" value={personalInfoData.phone} onChange={onInputChange} required></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="address">Address *</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={personalInfoData.address}
                        onChange={onInputChange}
                        required
                    ></input>
                </div>
            </form>
        </div>
    );
}

export default PersonalInformation;
