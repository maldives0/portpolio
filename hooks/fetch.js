import fetch from 'isomorphic-unfetch'

const newFetch = async (...args) => {
    const res = await fetch(...args)
    return res.json()
}
export default newFetch;