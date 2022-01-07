export const from = (val) => ({
    type: 'Ref',
    value: val
})

export const get = (ref) => {
    return ref.value
}

export const set = (ref, val) => {
    ref.value = val

    return ref
}

export const update = (ref, f) => {
    ref.value = f(ref.value)

    return ref
}