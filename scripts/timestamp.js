#!/usr/bin/env node

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const path = require('path');
const semver = require('semver');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const timestamp = dayjs.utc().format('YYYYMMDDHHmmss');

const rootDir = path.resolve('.');
const packageJson = path.resolve(rootDir, 'package.json');
const meta = require(packageJson);
meta.version.replace(/-.*/, '');
const targetVersion = semver.inc(meta.version, 'patch') + '-' + timestamp;

// eslint-disable-next-line no-console
console.log(`::set-output name=stamp::${targetVersion}`);
