class EventEmitter {
    constructor() {
        this.events = {}; 
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
        return this;
    }

    once(eventName, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(eventName, wrapper);
        };
        return this.on(eventName, wrapper);
    }

    off(eventName, listener) {
        if (!this.events[eventName]) return this;

        this.events[eventName] = this.events[eventName].filter(fn => fn !== listener);

        if (this.events[eventName].length === 0) {
            delete this.events[eventName];
        }
        return this;
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) return false;

        const listeners = [...this.events[eventName]];

        listeners.forEach(listener => {
            try {
                listener(...args);
            } catch (error) {
                console.error(`Error in event "${eventName}":`, error);
            }
        });

        return true;
    }

    removeAllListeners(eventName) {
        if (eventName) {
            delete this.events[eventName];
        } else {
            this.events = {};
        }
        return this;
    }
}