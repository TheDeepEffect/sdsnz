import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string
}
export default function (
    req: NextApiRequest,
    res: NextApiResponse<Data>) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({});
    console.log(req.body)
}