const messages = [
    // {
    //     key: 1,
    //     name: 'test',
    //     email: 'test',
    //     message: 'test'
    // },

]
function shouldFail() {
    return Math.random() > 0.8
}
export default (req, res) => {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body)

        if (!shouldFail()) {
            const newMsg = { key: body.key, name: body.name, email: body.email, message: body.message };
            messages.unshift(newMsg);
        }

        return res.json(messages);
    }
    if (req.method === 'DELETE') {
        const body = JSON.parse(req.body)
        console.log('key:', body);
        if (!shouldFail()) {

            // messages.filter(c => c.key !== body.selectedKey);
        }

        return res.json(messages);
    }
    // setTimeout(() => {
    //     res.json(messages)
    // }, 2000)
}