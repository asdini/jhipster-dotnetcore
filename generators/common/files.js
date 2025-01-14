/**
 * Copyright 2013-2019 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const constants = require('../generator-dotnetcore-constants');

const SERVER_SRC_DIR = constants.SERVER_SRC_DIR;

const dockerFiles = {
    global: [
        {
            path: SERVER_SRC_DIR,
            templates: [{ file: 'Project/Dockerfile', renameTo: generator => `${generator.mainProjectDir}/Dockerfile` }]
        },
        {
            templates: [{ file: 'dockerignore', renameTo: () => '.dockerignore', method: 'copy' }]
        }
    ]
};

function writeFiles() {
    return {
        writeDockerFiles() {
            this.writeFilesToDisk(dockerFiles, this, false, 'dotnetcore');
        }
    };
}

module.exports = {
    writeFiles,
    dockerFiles
};
