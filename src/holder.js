// Information holding object

const todo = (arg)=>{
    const proto = {
        type: 'Todo',
        t : arg[0],
        d : arg[1],
        dd : arg[2],
        p : arg[3],
        getVal(key) {
            return this.key;
        },
        setVal(key, value) {
            this[key] = value;
        }
    }

    return Object.assign(Object.create(proto), {arg})
};

const projects = () => {
    const proto = {
        type: 'Projects',
        initial : [],
        getVal(key) {
            return this.key;
        },
        setVal(key, v) {
            this[key] = v;
        }
    }
    return Object.create(proto);
}

export { todo, projects }