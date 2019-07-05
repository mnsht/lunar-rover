import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import LunarRover from './';

const stories = storiesOf('Lunar Rover', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const num = number('Number', 2);

  return <LunarRover number={num} />;
});
