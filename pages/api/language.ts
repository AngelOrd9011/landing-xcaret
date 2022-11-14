// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const fetchData = async () => {
	const data = await fetch('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json').then((res) => res.json());
	return data;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method === 'POST') {
		if (req.body.lang === 'es') {
			const es = await fetchData().then((data) => data.es);
			return res.status(200).json({ language: 'es', data: es });
		}
		if (req.body.lang === 'en') {
			const en = await fetchData().then((data) => data.en);
			return res.status(200).json({ language: 'en', data: en });
		}
	}
	return res.status(200).json({ message: 'Invalid request method' });
}
