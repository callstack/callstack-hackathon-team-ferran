import Slack from './Slack';
const SLACK_WEB_HOOK = 'https://hooks.slack.com/services/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';

export function notify(
  text: string,
  attachments: Array = [],
  channel: string = '#general',
  username: string = 'garbage_collector',
  emoji: string = ':put_litter_in_its_place:',
) {

  new Slack(SLACK_WEB_HOOK).post(text, channel, username, emoji, attachments);
}
