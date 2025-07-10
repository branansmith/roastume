import CompanyDateAndDuties from './CompanyDateAndDuties'

const ProfessionalExperience = () => (
    <>
    <div id="experience-container">
    <h2 class="section">Professional Experience</h2>
    </div>
    <CompanyDateAndDuties company="Fossil Group, Inc" date="May 2022 - Present" responsibilities="Generate a million dollars in revenue for the company."/>
    <CompanyDateAndDuties company="Firehouse Subs" date="May 2018 - December 2020" responsibilities="Made sandwiches"/>
    </>
)

export default ProfessionalExperience;