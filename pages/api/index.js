import { messages } from './messages'

export default function handler(req, res) {
    res.status(200).json(messages);
}