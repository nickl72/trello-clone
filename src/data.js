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
            title: 'Go to the dentist',
            description: 'Make sure to arrive by 9 AM',
            dueDate: '2020-10-27',
            category: "To-Do",
            private: true
        },
        {
            taskId: 2,
            user: 'admin',
            title: 'Buy ingredients to make dinner',
            description: 'making paella, need onion, tomato, shrimp, oil',
            dueDate: '2020-10-23',
            category: "To-Do",
            private: false
        },
        {
            taskId: 3,
            user: 'admin',
            title: 'Work Out!',
            description: 'Running MWF Swimming TuTh',
            dueDate: '2020-10-24',
            category: "In Progress",
            private: true
        },
        {
            taskId: 4,
            user: 'admin',
            title: 'Grab a cold one with the boys',
            description: 'Zoom ID: 123-456789-456, meet at 7',
            dueDate: '2020-12-25',
            category: "In Progress",
            private: false
        },
        {
            taskId: 5,
            user: 'admin',
            title: 'See Star Wars',
            description: 'Watch a New Hope',
            dueDate: '2020-10-21',
            category: "Completed",
            private: true
        },
        {
            taskId: 6,
            user: 'testdummy',
            title: 'Get an oil change',
            description: 'See if they can rotate the tires while at the shop',
            dueDate: '2020-11-15',
            category: "In Progress",
            private: false
        },
        {
            taskId: 7,
            user: 'testdummy',
            title: 'Buy Christmas presents',
            description: 'Johnny: PS4. Suzie: iPhone 12 Pro X plus 5G. Timmy: DJI mavic drone',
            dueDate: '2020-12-25',
            category: "In Progress",
            private: false
        },
        {
            taskId: 8,
            user: 'testdummy',
            title: 'Vote!',
            description: 'Vote early',
            dueDate: '2020-11-3',
            category: "Completed",
            private: false
        },
        {
            taskId: 9,
            user: 'testdummy',
            title: 'Rake the yard',
            description: '',
            dueDate: '2020-10-25',
            category: "Completed",
            private: true
        },
        {
            taskId: 10,
            user: 'testdummy',
            title: 'Buy more cereal',
            description: 'Make sure to get the big bag of Marshmallow Mateys. you know its the same just way cheaper than Lucky Charms',
            dueDate: '2020-10-20',
            category: "Completed",
            private: true
        }
    ]
}

export default data;