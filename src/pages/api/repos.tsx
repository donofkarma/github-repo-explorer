import type { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';

import fetcher from 'utils/fetcher';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await fetcher(
    `${process.env.API_URL}/orgs/github/repos?${queryString.stringify(
      req.query
    )}`,
    process.env.GITHUB_TOKEN
  );
  const data = !result.status ? result : [];

  res.status(200).json(data);
};
