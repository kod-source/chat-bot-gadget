import axios, { AxiosResponse } from 'axios';
import { contactSendMailUrl } from '../hostUrl/url';

export const contactSendMailRepository = async (
  selectCategory: string,
  name: string,
  email: string,
  text: string
): Promise<void> => {
  const params = {
    category: selectCategory,
    name: name,
    email: email,
    text: text,
  };
  const res: AxiosResponse<void> = await axios.post(
    contactSendMailUrl,
    { mail_request: params },
    {
      withCredentials: true,
    }
  );
  console.log(res);
  return res.data;
};
