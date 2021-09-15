import Filter from '../components/filter';

export const COLUMNS = [
    {
        accessor: 'artist',
        Header: 'Исполнитель',
        Filter: Filter,
    },
    {
        accessor: 'song',
        Header: 'Песня',
        Filter: Filter,
        disableFilters: true,
    },
    {
        accessor: 'genre',
        Header: 'Жанр',
        Filter: Filter,
    },
    {
        accessor: 'year',
        Header: 'Год',
        Filter: Filter,
    },
];

export const YEARS = [
    ...getYears()
]

function getYears(){
    const arr = []
    for (let i = 1950; i <= 2021; i++) {
        arr.push(i)
    }
    return arr.reverse();
}