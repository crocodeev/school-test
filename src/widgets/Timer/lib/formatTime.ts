export const toMMss = (seconds: number): string => {
    
    const mm = Math.floor(seconds/60).toString().padStart(2, "0")
    const ss = (seconds%60).toString().padStart(2, "0")

    return `${mm}:${ss}`
}