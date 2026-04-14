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

// After pasting the EventEmitter class above, run the following code

const emitter = new EventEmitter();

console.log("=== Event Emitter Test Start ===\n");

// Normal Event
emitter.on("click", (x, y) => {
    console.log(`✅ Click event: Position (${x}, ${y})`);
});

emitter.on("login", (user) => {
    console.log(`✅ User logged in: ${user}`);
});

// Once Event
emitter.once("data", (data) => {
    console.log("✅ Data received (once only):", data);
});

// To emit
emitter.emit("click", 150, 250);
emitter.emit("login", "jihad");

emitter.emit("data", { id: 101, msg: "Welcome" });

// It will not print again (because of once).
emitter.emit("data", "second try");

console.log("\n=== Test Completed ===");