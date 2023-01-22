const turncateString = (e, max) => {
    if (e === null) {
        return ""
    } else if (e.length < 50) {
        return e
    } else {
        return e.slice(0, max) + "..."
    }
}

export {
    turncateString
}
