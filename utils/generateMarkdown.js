// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== "NONE") {
    license = license.split(" ").join("%20")
    return`![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return`* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return`## License

    This project is licensed under ${license} for this project.`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [installation](#installation)
  * [usage](#usage)
  * [test](#test)
  ${renderLicenseLink(data.license)}
  * [contributing](#contributing)

  ${renderLicenseSection(data.license)}

  ## Installation 
  Install the project by running the following script 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Test
  To run test run the following command ${data.test}

  ## Contact
  if you have any questions contact me at
  ${data.email} 
  view more of my work at
  [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
