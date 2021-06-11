import type { NextApiRequest, NextApiResponse } from 'next';

import fetcher from 'utils/fetcher';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query;
  const result = await fetcher(
    `${process.env.API_URL}/repos/github/${name}`,
    process.env.GITHUB_TOKEN
  );
  const data = !result.status ? result : {};

  res.status(200).json(data);
};
