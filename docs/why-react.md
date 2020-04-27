# Why Do People Choose React?

## Simplicity

### React Component
```jsx
import React from 'react';

export const HelloComponent = () => (
    <div>Hello</div>
);
```

### Angular Component
```typescript
// ./hello.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {

}
```

```html
// ./hello.component.html
<div>Hello</div>
```

```css
/* ./hello.component.css */
```

### Vue Component

```vue
<template>
    <div>Hello</div>
</template>

<script>
module.exports = {
    data: function() {
    
    }   
}
</script>

<style scoped>

</style>
```

## Library over Framework

### React is a View Library

### Angular is a SPA Framework

### Vue is somewhere in the middle

## Community

### React Weekly Downloads: ~8.5 million

### Angular Weekly Downloads: ~1.5 million

### Vue Weekly Downloads: ~1.6 million

### Google Trends

![React vs Angular vs Vue Google Trends](./images/react-vs-angular-vue-google-trends.png)