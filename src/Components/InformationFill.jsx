import "../Styles/InformationFill.css";
import PersonalInformation from "./Forms/PersonalInformation";
import Education from "./Forms/Education";
import Experience from "./Forms/Experience";
import ExampleCVButton from "./Forms/ExampleCVButton";

function InformationFill({ personalInfo, setPersonalInfo, onInputChange, schools, setSchools, companies, setCompanies }) {
    return (
        <div className="informationFill">
            <ExampleCVButton setPersonalInfo={setPersonalInfo} setSchools={setSchools} setCompanies={setCompanies} />
            <PersonalInformation personalInfoData={personalInfo} onInputChange={onInputChange} />
            <Education schools={schools} setSchools={setSchools} />
            <Experience companies={companies} setCompanies={setCompanies} />
        </div>
    );
}

export default InformationFill;
