// @flow strict-local

import { invariant } from '@kiwicom/js';

import RepoGIT from '../RepoGIT';

export default function createCheckCorruptedRepoPhase(repoPath: string) {
  return () => {
    const repo = new RepoGIT(repoPath);

    // We should eventually nuke the repo and clone it again. But we do not
    // store the repos in CI yet so it's not necessary. Also, be careful not
    // to nuke monorepo in CI.
    invariant(repo.isCorrupted() === false, `Repo located in '${repoPath}' is corrupted.`);
  };
}
