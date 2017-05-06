import path from 'path'
import { spawnSync } from 'child_process'
import { makeDir, moveDir, cleanDir } from 'fs'
import {remote, version} from './package.json'
import fetch from 'isomorphic-fetch'

const options = {
  cwd: path.resolve(__dirname, './dist')
};

function deploy(){
  //commit veriosn bump in main repo
  spawnSync('git',['reset','HEAD'],options);
  spawnSync('git',['add','package.json'],options);
  spawnSync('git',['tag',version],options);
  spawnSync('git',['commit','-m',`Relase:${version}`],options);
  spawnSync('git',['push','origin','master','--tags'],options);

  //push dist folder to deploy repo
  spawnSync('git',['init'],options);
  console.log('Initialising Repository');
  spawnSync('git',['init'],options);
  console.log('Adding remote url');
  spawnSync('git',['remote','add', remote.name, remote.gitPath],options)
  console.log('Add all files');
  spawnSync('git',['add','.','--all'],options)
  console.log(`Commit with v${version}`);
  spawnSync('git', ['commit','-m',`v${version}`], options)
  console.log('Push the changes to repo');
  let {output} = spawnSync('git', ['push', '-f', remote.name, 'master'],options)
  console.log(output);
}

deploy();
