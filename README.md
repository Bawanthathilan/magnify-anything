# Magnify Anything 🔎
![magnify-anything](https://socialify.git.ci/Bawanthathilan/magnify-anything/image?description=1&font=Inter&forks=1&issues=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

A flexible React component for creating a magnifying glass effect on any content.

## Installation

Install the package using npm or yarn:

```bash
npm i magnify-anything
```
![](https://github.com/Bawanthathilan/anything-zoomer/blob/master/assets/gif.gif)

# Usage
```bash
import React from 'react';
import Magnifier from 'magnify-anything';

const App = () => {
  return (
    <Magnifier previewSize={200} zoom={2} borderColor="blue">
      <div>
        <h1>Hover over me!</h1>
        <p>This is an example of content that can be magnified.</p>
      </div>
    </Magnifier>
  );
};

export default App;

```

# Props
The Magnifier component accepts the following props:

| Prop          | Type       | Description                                         |
|---------------|------------|-----------------------------------------------------|
| `children`    | `ReactNode`| The content to be magnified.                        |
| `previewSize` | `number`   | The size of the magnifying glass in pixels.         |
| `zoom`        | `number`   | The zoom level for the magnified content.           |
| `borderColor` | `string`   | The border color of the magnifying glass.           |


# Contributing

Contributions are welcome! Please open an issue or submit a pull request on [Github](https://github.com/Bawanthathilan/anything-zoomer).

# Contact
For any questions or feedback, please contact [bawantharathnayaka@gmail.com].
