const fs = require('fs')
const path = require('path')

const getComponentName = () => {
    const { argv } = process

    for (let i = 0; i < argv.length; i++) {
        if (i === 2) {
            return argv[i].charAt(0).toUpperCase() + argv[i].slice(1)
        }
    }
}

const createJsxFileContent = (componentName) => (
    [
        'import React from \'react\'',
        '',
        `const ${componentName} = () => {`,
        '\treturn (',
        `\t\t<div className="${componentName.toLowerCase()}">`,
        '',
        '\t\t</div>',
        '\t)',
        '}',
        '',
        `export default ${componentName}`
    ].join('\n')
)

const createFolderAndFiles = (componentName) => {
    const { INIT_CWD } = process.env
    const folderPath = INIT_CWD + '/' + componentName

    if (fs.existsSync(folderPath)) {
        console.error('folder name already used!')
        return
    }
    
    fs.mkdirSync(folderPath)

    const jsxFileContent = createJsxFileContent(componentName)
    const jsxFilePath = `${INIT_CWD}/${componentName}/${componentName}.jsx`
    fs.writeFile(jsxFilePath, jsxFileContent, (err) => {
        if (err) {
            console.log(err)
            return
        }
    });

    const scssFileContent = [`.${componentName.toLowerCase()} {`, '', '}'].join('\n')
    const scssFilePath = `${INIT_CWD}/${componentName}/${componentName}.scss`
    fs.writeFile(scssFilePath, scssFileContent, (err) => {
        if (err) {
            console.log(err)
            return
        }
    });
}

(function createComponent() {
    const componentName = getComponentName()
    createFolderAndFiles(componentName)
})()
