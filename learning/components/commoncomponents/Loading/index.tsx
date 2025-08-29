type Listener = (active: boolean) => void;

class LoadingBus {
    private count = 0;
    private listeners = new Set<Listener>();

    inc() { this.count++; this.emit(); }
    dec() { this.count = Math.max(0, this.count - 1); this.emit(); }
    reset() { this.count = 0; this.emit(); }
    get active() { return this.count > 0; }

    subscribe(fn: Listener) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
    private emit() { const a = this.active; this.listeners.forEach(fn => fn(a)); }
}

export const loadingBus = new LoadingBus();