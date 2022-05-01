export const DEC = 'DEC'
export const INC = 'INC'
export const RESET = 'RESET'

export const decreaseCounter = () => ({
    type: DEC
})

export const increaseCounter = () => ({
    type: INC
})

export const resetCounter = () => ({
    type: RESET
})