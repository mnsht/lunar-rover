import React from 'react';

export const squared = num => num * num;

export default ({ number }) => <div>{squared(number)}</div>;
