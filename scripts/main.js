```javascript
import EventObserver from './EventObserver.js';
import LocationObserver from './LocationObserver.js';

class Main {
  constructor() {
    this.eventObserver = new EventObserver();
    this.locationObserver = new LocationObserver();

    this.init();
  }

  init() {
    this.eventObserver.listenToClickEvents();
    this.locationObserver.observeHrefChanges();
  }
}

new Main();
```