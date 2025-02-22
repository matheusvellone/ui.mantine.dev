import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { LeadGrid } from './LeadGrid';

storiesOf('LeadGrid', module).add('LeadGrid', () => (
  <StoryWrapper attributes={attributes} component={LeadGrid} />
));
