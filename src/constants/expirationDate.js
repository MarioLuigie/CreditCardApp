//MONTHS
export const months = [
    {value : "January", label : "01"},
    {value : "February", label : "02"},
    {value : "March", label : "03"},
    {value : "April", label : "04"},
    {value : "May", label : "05"},
    {value : "Juni", label : "06"},
    {value : "July", label : "07"},
    {value : "August", label : "08"},
    {value : "September", label : "09"},
    {value : "October", label : "10"},
    {value : "November", label : "11"},
    {value : "December", label : "12"},
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
