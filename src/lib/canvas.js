export const init = () => {
    const c = document.createElement('canvas')
    document.body.appendChild(c)
    return c.getContext("webgl2")
}