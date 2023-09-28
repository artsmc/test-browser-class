```javascript
class EventObserver {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('click', this.handleClickEvent);
    }

    handleClickEvent(event) {
        console.log('Click event detected:', event);
    }
}

new EventObserver();
```