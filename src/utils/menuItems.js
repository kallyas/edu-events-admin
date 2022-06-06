export const menuItems = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'IconLayoutDashboard',
        layout: '/admin',
        isActive: true
    },
    {
        name: 'Events',
        path: '#',
        icon: 'IconCalendarEvent',
        layout: '/admin',
        isActive: true,
        dropdown: [
            {
                name: 'Events',
                path: '/events',
                icon: 'calendar'
            },
            {
                name: 'Event Calendar',
                path: '/event-calendar',
                icon: 'calendar'
            }
        ]
    },
    {
        name: 'Users',
        path: '/users',
        icon: 'IconUsers',
        layout: '/admin',
        isActive: true
    },
    {
        name: 'Projects',
        path: '/projects',
        icon: 'IconApps',
        layout: '/admin',
        isActive: true
    },
    {
        name: 'Enrollments',
        path: '/enrollments',
        icon: 'IconListDetails',
        layout: '/admin',
        isActive: true
    }
];