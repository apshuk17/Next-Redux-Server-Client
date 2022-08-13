import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { UserDetail } from '../../types';

const usersHandler: NextApiHandler = async (
  request: NextApiRequest,
  response: NextApiResponse<UserDetail[]>
) => {
  if (request.method === "GET") {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    response.status(200).json(data);
  }
};

export default usersHandler;
