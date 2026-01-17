        import { ClickCounter } from './assets/js/clickCounter/ClickCounter.js';
        import { EventBus } from './assets/js/services/EventBus.js';

        const eventBus = new EventBus();

        for (let i = 0; i < 5; i++) {
            const counter = new ClickCounter(eventBus);
            counter.render('#click-counters');
        }