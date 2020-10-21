const data = {
    users: [
        {
            username: 'admin',
            password: 'admin',
            admin: true           
        },
        {
            username: 'testdummy',
            password: '1234',
            admin: false
        }
    ],
    tasks: [
        {
            taskId: 1,
            user: 'admin',
            title: 'Admin Task #1',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "To-Do",
            private: false
        },
        {
            taskId: 2,
            user: 'admin',
            title: 'Admin Task #2',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "To-Do",
            private: false
        },
        {
            taskId: 3,
            user: 'admin',
            title: 'Admin Task #3',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "In Progress",
            private: false
        },
        {
            taskId: 4,
            user: 'admin',
            title: 'Admin Task #4',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "Completed",
            private: false
        },
        {
            taskId: 5,
            user: 'admin',
            title: 'Admin Task #5',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "Completed",
            private: false
        },
        {
            taskId: 6,
            user: 'testdummy',
            title: 'Dummy Task #1',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "To-Do",
            private: false
        },
        {
            taskId: 7,
            user: 'testdummy',
            title: 'Dummy Task #2',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "In Progress",
            private: false
        },
        {
            taskId: 8,
            user: 'testdummy',
            title: 'Dummy Task #3',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "Completed",
            private: false
        },
        {
            taskId: 9,
            user: 'testdummy',
            title: 'Dummy Task #4',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "Completed",
            private: false
        },
        {
            taskId: 10,
            user: 'testdummy',
            title: 'Dummy Task #5',
            description: 'This task is fake, so make sure it has high priority',
            dueDate: '2020-12-25',
            category: "Completed",
            private: false
        }
    ]
}

export default data;