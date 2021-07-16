// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/${license}.svg)](https://opensource.org/licenses/Apache-2.0)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
   ${data.description}

   ## Table Of Contents 
   google examples 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Constribution
  ${data.contribution}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Questions 

  My email is : ${data.email}

  Github Profile: ${data.github}
`;
}

module.exports = generateMarkdown;
