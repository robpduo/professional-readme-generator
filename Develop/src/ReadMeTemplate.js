import LicenseInfo from "./LicenseInfo.js";

const renderTests = testData => {
    return `<ol>${testData.map(data => {
        return `<li>${data}</li>`
    }).join(' ')} </ol>`
}

const renderBadge = badge => {
    return `[![license](https://img.shields.io/badge/license-${badge}-blue)](https://shields.io)`;
};

export default templateData => {
    const {title, description, installation, usage, tests, license, username} = templateData; 

    return `# ${title}
${license.map(data => {
    return renderBadge(data);
}).join(' ')}
## Table of Contents
[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[Tests](#tests)<br>
[Credits](#credits)<br>
[License](#license)<br>
[Questions](#questions)<br>
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Tests
${renderTests(tests)}

## License <br>
${license.map(data => {
    return `${LicenseInfo(data, username)}`
}).join(' ')}
`;
}