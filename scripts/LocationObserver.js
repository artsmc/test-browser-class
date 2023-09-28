```javascript
class LocationObserver {
    constructor() {
        this.observeLocationChange();
    }

    observeLocationChange() {
        let oldHref = document.location.href;

        setInterval(() => {
            const newHref = document.location.href;

            if (oldHref !== newHref) {
                oldHref = newHref;
                console.log('Location changed to: ' + newHref);
            }
        }, 100);
    }
}

new LocationObserver();
```