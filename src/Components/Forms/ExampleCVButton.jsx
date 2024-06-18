import "../../Styles/Forms/ExampleCVButton.css";

function ExampleCVButton({ setPersonalInfo, setSchools, setCompanies }) {
    const loadExampleCV = () => {
        setPersonalInfo({
            fullName: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: "123 Main St, City, State 12345",
        });

        setSchools([
            {
                name: "Example University",
                degree: "Bachelor of Science in Computer Science",
                startDate: "2011-09-01",
                endDate: "2015-05-31",
            },
        ]);

        setCompanies([
            {
                name: "Acme Tech Solutions",
                positionTitle: "Web Developer",
                startDate: "2016-02-01",
                endDate: "2019-05-15",
                description: "Created responsive websites and user interfaces.",
            },
            {
                name: "Example Company",
                positionTitle: "Software Engineer",
                startDate: "2019-06-01",
                endDate: "2023-05-31",
                description: "Developed and maintained web applications.",
            },
        ]);
    };

    return (
        <button id="loadExampleBtn" onClick={loadExampleCV}>
            Load Example CV
        </button>
    );
}

export default ExampleCVButton;
