import { book, building, document, dollar, grid, note, receipt } from "../assets/images";

export const sidebarData = [
    {
        id: 1,
        title: 'Dashboard',
        url: '/',
        icon: grid,
    },
    {
        id: 2,
        title: 'Company',
        url: '/company',
        icon: building,
    },
    {
        id: 3,
        title: 'Documents',
        url: '/documents',
        icon: document,
    },
    {
        id: 4,
        title: 'Services',
        url: '/services',
        icon: note,
    },
    {
        id: 5,
        title: 'Compliance',
        url: '/compliance',
        icon: receipt,
    },
    {
        id: 6,
        title: 'Books',
        url: '/books',
        icon: book,
    },
    {
        id: 7,
        title: 'Money',
        url: '/money',
        icon: dollar,
    },
]