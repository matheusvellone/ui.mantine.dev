import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ButtonMenu } from './ButtonMenu';

storiesOf('ButtonMenu', module).add('ButtonMenu', () => (
  <StoryWrapper attributes={attributes} component={ButtonMenu} />
));
