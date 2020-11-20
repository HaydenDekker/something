```js script
import { html } from '@open-wc/demoing-storybook';
import '../some-thing.js';

export default {
  title: 'SomeThing',
  component: 'some-thing',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# SomeThing

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add some-thing
```

```js
import 'some-thing/some-thing.js';
```

```js preview-story
export const Simple = () => html`
  <some-thing></some-thing>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <some-thing title="Hello World"></some-thing>
`;
```
