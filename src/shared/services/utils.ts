export function range(size: number, start = 1, step = 1): number[] {
    let arr: number[] = []
    for (let i = 0; i < size; i += step) {
        arr.push(i + start)
    }
    return arr
}

export function randomGenerator(max: number): number {
    return Math.ceil(Math.random() * max)
}
