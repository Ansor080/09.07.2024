export function reload(data, component, place) {
    place.innerHTML = ""

    for(let item of data) {
        const comp = component(item)

        place.append(comp)
    }
    
}