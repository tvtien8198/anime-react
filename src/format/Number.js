export const compactNumber = value => {
    if(typeof value == 'number') {
        const suffixes = ["", "k", "m", "b", "t"]

        const valueLengh = ("" + value).length

        const suffixNum = Math.floor(
            valueLengh >= 7 ? valueLengh / 3 : valueLengh /4
        )

        let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2))

        if(shortValue % 1 !== 0) {
            shortValue = shortValue.toFixed(1)
        }
        
        return shortValue + suffixes[suffixNum]
    }else {
        return `...`
    }
    
    
}