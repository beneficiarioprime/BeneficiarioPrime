export default function handler(req, res) {
    if (req.method == 'POST')
        res.status(200).json({ teste: "Oláaaaaaaaaa" })
    else
        res.status(200).json({ teste: "Oláaaaaaaaaa 2 " })
}