import fetch from 'cross-fetch';

async function fetcher(path: string, token?: string) {
  const options: Record<string, unknown> = {};

  if (token) {
    options.headers = {
      Authorization: `token ${token}`,
    };
  }

  try {
    const res = await fetch(`${path}`, options);

    if (res.status >= 400) {
      throw new Error();
    }

    const json = await res.json();

    if (json.status >= 400) {
      throw new Error();
    }

    return json;
  } catch (e) {
    // this should go to proper logging infrastructure
    console.log('error', { e });

    return {
      status: 404,
    };
  }
}

export default fetcher;
