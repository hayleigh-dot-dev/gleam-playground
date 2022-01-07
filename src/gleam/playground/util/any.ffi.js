export const from = (val) => val

export const to_string = (val) => {
    return val.to_string ? val.to_string() : val + ''
}