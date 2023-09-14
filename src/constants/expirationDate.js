//MONTHS
export const months = [
    {value : "01", label : "01"},
    {value : "02", label : "02"},
    {value : "03", label : "03"},
    {value : "04", label : "04"},
    {value : "05", label : "05"},
    {value : "06", label : "06"},
    {value : "07", label : "07"},
    {value : "08", label : "08"},
    {value : "09", label : "09"},
    {value : "10", label : "10"},
    {value : "11", label : "11"},
    {value : "12", label : "12"},
]

//YEARS
const year = new Date().getFullYear()
const period = 5

function createYears (year, period) {

    const years = []

    for (let i = 0; i <= period; i++) {
        years.push({value : String(year), label : String(year)})
        year++
    }

    return years
}

export const years = createYears(year, period)
