const storage = {
    // используется для удаления события
    eventIdToDelete: null,
    // хранит дату понедельника той отображаемой недели
    displayedWeekStart: null,
    // хранит массив всех событий
    events: [],
    // это все данные, которые вам нужно хранить для работы приложения
    // eventIdToUpdate: null,
}
// export function getItem(key) {
//     return JSON.parse(localStorage.getItem(key))
// }

// export function setItem(key, value) {
//     const isArray = key === 'events' && !Array.isArray(value)
//     let events = value

//     if (isArray) {
//         events = getItem(key)
//         events.push(value)
//     }

//     localStorage.setItem(key, JSON.stringify(events))
// }

export const setItem = (key, value) => {
    localStorage.clear()
    localStorage.setItem(key, JSON.stringify(value))
}
export const getItem = (key) => JSON.parse(localStorage.getItem(key))

console.log(localStorage)

// export const setItem = (key, value) => {
//     return Object.assign(storage, { [key]: value })
//     // ф-ция должна устанавливать значения в объект storage
// }

// export const getItem = (key) => storage[key]
// // // ф-ция должна возвращать по ключу значения из объекта storage

export const getDisplayedWeekStart = () =>
    new Date(JSON.parse(localStorage.getItem('displayedWeekStart')))

// пример объекта события
const eventExample = {
    id: 0.7520027086457333, // id понадобится для работы с событиями
    title: 'Title',
    description: 'Some description',
    start: new Date('2020-03-17T01:10:00.000Z'),
    end: new Date('2020-03-17T04:30:00.000Z'),
}
