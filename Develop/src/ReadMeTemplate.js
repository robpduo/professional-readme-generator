import LicenseInfo from "./LicenseInfo.js";

const renderTests = testData => {
    return `<ol>${testData.map(data => {
        return `<li>${data}</li>`
    }).join(' ')} </ol>`
}

const renderBadge = badge => {
    return `[![license](https://img.shields.io/badge/license-${badge}-blue)](https://shields.io)`;
};

const renderInstall = instructions => {
    console.log(instructions.split('/'));

    return `<ol>${instructions.split('/').map(data => {
        return `<li>${data}</li>`
    }).join(' ')}</ol>`;
};

export default templateData => {
    const {title, description, installation, usage, tests, license, username, contributors, email} = templateData; 

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
[Contributors](#contributors)<br>
[Questions](#questions)<br>
## Description
${description}<br>
## Installation
${renderInstall(installation)}<br>

## Usage
${usage}

## Tests
${renderTests(tests)}

## License <br>
${license.map(data => {
    return `${LicenseInfo(data, username)}`
}).join(' ')}

## Contributors
${renderInstall(contributors)}<br>

## Questions?
GitHub Username: [${username}](https://github.com/${username}) <br>
If you have additional questions please send an message to the email below:<br>
Email Address: ${email}
`;
}