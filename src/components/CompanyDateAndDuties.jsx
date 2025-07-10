const CompanyDateAndDuties = (props) => (
    <>
        <div id="experience-title-container">
            <h3 class="resume" id="experience-company">{props.company}</h3>
            <h3 class="resume" id="experience-date">{props.date}</h3>
        </div>

        <div id="experience-bullets">
            <ul>
                <li>{props.responsibilities}</li>
                <li>{props.responsibilities}</li>
                <li>{props.responsibilities}</li>
            </ul>
        </div>
    </>
)

export default CompanyDateAndDuties;