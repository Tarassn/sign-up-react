export function sortBy(fn, xs) {
    return [...xs].sort((x1, x2) => {
        return fn(x2) > fn(x1) ? -1 : 1
    })
}

export function toDict(xs, key) {
    return xs.reduce((z, x) => ({...z, [x[key]]: x}), {})
}

export function toArray(obj, key) {
    return sortBy(x => x[key], Object.keys(obj).map(key => obj[key]))
}