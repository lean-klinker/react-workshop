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

### Backbone w/ Dust Component

```javascript
var HelloModel = Backbone.Model.extend({
    message: 'Hello'
});
var HelloView = Backbone.View.extend({
    el: '#hello',
    render: function () {
        var view = this;
        var template = $('#template').html();
        var compiled = dust.compile(template, 'TEMPLATE_NAME');
        dust.loadSource(compiled);
        dust.render('TEMPLATE_NAME', this.model, function (error, contents) {
            view.$el.html(contents);
        });
        return this;
    }
});
```

```html
<html>
<body>
<div id="#hello"></div>
<script id="template">
<span>{message}</span>
</script>
</body>
</html>
```

## Library over Framework

### React is a View Library

### Angular is a SPA Framework

### Backbone is a View agnostic Library

### Dust is a templating library

## Community

### React Weekly Downloads: ~8.5 million

### Angular Weekly Downloads: ~1.5 million

### Backbone Weekly Downloads: ~556,000

### Dust Weekly Downloads: ~28,000