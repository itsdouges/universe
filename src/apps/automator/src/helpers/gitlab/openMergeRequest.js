// @flow

import fetch from '@mrtnzlml/fetch';
import ENV from '@kiwicom/environment';

import { dryLog } from '../../log';

const PROJECT_ID = 1419; // https://gitlab.skypicker.com/incubator/universe

export default async function openMergeRequest(
  sourceBranch: string,
  commitMessage: string,
) {
  const apiURL = `https://gitlab.skypicker.com/api/v4/projects/${PROJECT_ID}/merge_requests`;

  if (__DEV__) {
    dryLog(`Calling API: ${apiURL}`);
  } else {
    const response = await fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify({
        id: PROJECT_ID,
        source_branch: sourceBranch,
        target_branch: 'master',
        title: commitMessage,
        labels: 'automator',
        remove_source_branch: true,
      }),
      headers: {
        'Private-Token': ENV.AUTOMATOR_GITLAB_PRIVATE_TOKEN,
        'Content-Type': 'application/json',
      },
    });

    // eslint-disable-next-line no-console
    console.warn(await response.json());
  }
}
