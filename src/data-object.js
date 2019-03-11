let nanoid = require('nanoid');//random id
export const tasks = {
    [nanoid(4)]:{name: 'First Task',
        created: new Date(),
        id: nanoid(4),
        done: false,
        showTask: true},

    [nanoid(4)]:{name: 'Second Task',
        created: new Date(),
        id: nanoid(4),
        done: true,
        showTask: true},
    [nanoid(4)]:{name: 'Third Task',
        created: new Date(),
        id: nanoid(4),
        done: false,
        showTask: true},

};
