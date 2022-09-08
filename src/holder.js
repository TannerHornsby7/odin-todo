const todo = (t, d, dd, p, n)=>{
    const proto = {
        type: 'Todo',
        t,
        d,
        dd,
        p,
        n,
        getVal(key) {
            return this.key;
        },
        setVal(key, value) {
            this[key] = value;
        }
    }

    return Object.assign(Object.create(proto), {t, d, dd, p, n})
};

export default todo