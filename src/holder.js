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
        },
    }

    return Object.assign(Object.create(proto), {arg})
};

// const project = ()=>{
//     const proto = {
//         type: 'Project',,
//         todo: [],
//         done: [],
//         getVal(key) {
//             return this.key;
//         },
//         setVal(key, value) {
//             this[key] = value;
//         }
//         createJSON(){

//         }
//     }

//     return Object.assign(Object.create(proto), {arg})
// }
export default todo