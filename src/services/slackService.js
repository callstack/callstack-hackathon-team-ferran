import Slack from './Slack';
import Config from 'react-native-config';

export function notify(
  text: string,
  attachments: Array = [],
  channel: string = '#general',
  username: string = 'garbage_collector',
  emoji: string = ':put_litter_in_its_place:',
) {

  new Slack(Config.SLACK_WEB_HOOK).post(text, channel, username, emoji, attachments);
}
