// if (process.cwd() === process.env.INIT_CWD) process.exit(0);

const base = require('@high-standards-nodejs/base');
base.default.checkAcceptedHighStandards();

/*
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const mkdirp = require('mkdirp');
const semver = require('semver');
const initPackageJsonPath = `${process.env.INIT_CWD}/package.json`
let initPackageJson = require(initPackageJsonPath);
const ownPackageJson = require('../package.json');

function getCleanedName(name) {
  return name.replace('@gluecode-it/', '')
}

const newInitPackageJson = Object.assign({}, initPackageJson);
// newPackageJson.scripts['gcp-build'] = 'npx tsc'; removed at 2020-06-16 because suddendly broken
newInitPackageJson.scripts['gcp-build'] = 'tsc --noEmitOnError';
newInitPackageJson.main = 'dist/src/index.js';
[ 'typescript', 'express', '@types/node', '@types/express' ].forEach((package) => {
  newInitPackageJson.dependencies[package] = ownPackageJson.dependencies[package];
});

if (!newInitPackageJson['cloud-function']) {
  newInitPackageJson['cloud-function'] = {};
}

if (!newInitPackageJson['cloud-function'].region) {
  newInitPackageJson['cloud-function'].region = ownPackageJson['cloud-function'].region;
}

if (!newInitPackageJson['cloud-function'].memory) {
  newInitPackageJson['cloud-function'].memory = ownPackageJson['cloud-function'].memory;
}

const minVersion = semver.minVersion(ownPackageJson.engines.node)
const majorVersion = semver.major(minVersion);
newInitPackageJson['cloud-function'].runtime = `nodejs${majorVersion}`

const fileContent = JSON.stringify(newInitPackageJson, null, 2);
fs.writeFileSync(initPackageJsonPath, fileContent);
initPackageJson = newInitPackageJson;

return ensureFileExisting(
  'templates/openapi.yml.ejs',
  `${process.env.INIT_CWD}/spec/openapi.yml`,
  false,
  { packageName: getCleanedName(initPackageJson.name) }
)
.then(() => {
  return ensureFileExisting(
    'templates/tsconfig.json.ejs',
    `${process.env.INIT_CWD}/tsconfig.json`,
    true,
    {},
  );
})
.then(() => {
  return ensureFileExisting(
    'templates/.gitignore.ejs',
    `${process.env.INIT_CWD}/.gitignore`
  );
})
.then(() => {
  return ensureFileExisting(
    'templates/cloudbuild.yaml.ejs',
    `${process.env.INIT_CWD}/cloudbuild.yaml`,
    true,
    { 
      packageName: getCleanedName(initPackageJson.name),
      ...initPackageJson['cloud-function']
    }
  );
})
.then(() => {
  return ensureFileExisting(
    'templates/path_index.ts.ejs',
    `${process.env.INIT_CWD}/src/paths/index.ts`,
  );
})
.then(() => {
  return ensureFileExisting(
    'templates/index.ts.ejs',
    `${process.env.INIT_CWD}/src/index.ts`,
    true,
    { packageName: getCleanedName(initPackageJson.name) }
  );
})

function ensureFileExisting(sourcePath, targetPath, forceCreation = false, parameter = {}) {
  return new Promise((resolve, reject) => {
    const directory = path.dirname(targetPath);
    if (!fs.existsSync(directory) || forceCreation) {
      try { mkdirp.sync(directory) } catch {}
    }
    if (!fs.existsSync(targetPath) || forceCreation) {
      //fs.copyFileSync(sourcePath, targetPath);
      ejs.renderFile(sourcePath, parameter, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        
        fs.writeFile(targetPath, data, resolve);
        return 
      })
    }
    resolve()
  })
}
*/