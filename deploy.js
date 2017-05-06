#!/usr/bin/babel-node
import path from 'path'
import { spawnSync } from 'child_process'
import { makeDir, moveDir, cleanDir } from 'fs'
import {remote, version} from './package.json'
import fetch from 'isomorphic-fetch'


function deploy(){

  let options = {
    cwd: path.resolve(__dirname)
  };
  //commit veriosn bump in main repo
  spawnSync('git',['reset','HEAD'],options);
  spawnSync('git',['add','package.json'],options);
  spawnSync('git',['tag',version],options);
  spawnSync('git',['commit','-m',`Release:${version}`],options);
  spawnSync('git',['push','origin','master','--tags'],options);

  options = {
    cwd: path.resolve(__dirname, './dist')
  };
  //push dist folder to deploy repo
  console.log('[DEPLOY]: Initialising Repository');
  spawnSync('git',['init'],options);
  console.log('[DEPLOY]: Adding remote url');
  spawnSync('git',['remote','add', remote.name, remote.gitPath],options)
  console.log('[DEPLOY]: Add all files');
  spawnSync('git',['add','.','--all'],options)
  console.log(`[DEPLOY]: Commit with v${version}`);
  spawnSync('git', ['commit','-m',`v${version}`], options)
  console.log('[DEPLOY]: Push the changes to repo');
  let {stdout} = spawnSync('git', ['push', '-f', remote.name, 'master'],options)
  console.log(stdout.toString());
}
deploy();
