import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { User } from '../../interfaces';
import { loggedInUrl, loginUrl, signUpUrl } from '../hostUrl/url';

interface loggedUser {
  logged_in: boolean;
  user: User;
}

interface SignUpUser {
  status: string;
  user: User;
}

export const loggedRepository = async (): Promise<loggedUser> => {
  const res: AxiosResponse<loggedUser> = await axios.get(loggedInUrl, {
    withCredentials: true,
  });
  return res.data;
};

export const loginRepository = async (
  email: string,
  password: string
): Promise<loggedUser> => {
  const res: AxiosResponse<loggedUser> = await axios.post(
    loginUrl,
    {
      user: { email: email, password: password },
    },
    {
      withCredentials: true,
    }
  );
  return res.data;
};

export const signUpRepository = async (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  avatarImage?: File | null
): Promise<SignUpUser> => {
  const regex = /^(?=.*[./-])[a-zA-Z0-9.?/-]{8,24}$/;
  if (!name && !email && !password && !passwordConfirmation) {
    throw new Error('全ての項目を入力してください');
  }
  if (!regex.test(password)) {
    if (password.length <= 8 || password.length >= 24) {
      throw new Error('パスワードは8文字以上24文字以下に設定してください');
    }
    throw new Error(
      'パスワードは記号を少なくとも一つ含めてくさださい。\nもしくは許可されていない文字種があります。'
    );
  }
  if (password !== passwordConfirmation) {
    throw new Error('パスワードが一致しません。');
  }
  const formData = new FormData();
  formData.append('name', name);
  formData.append('avatar', avatarImage as File);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('password_confirmation', passwordConfirmation);
  console.log(formData);
  const res: AxiosResponse<SignUpUser> = await axios.post(signUpUrl, formData, {
    withCredentials: true,
  });
  return res.data;
};
