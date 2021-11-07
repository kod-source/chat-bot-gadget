import axios, { AxiosResponse } from 'axios';
import { User } from '../../interfaces';
import { loggedInUrl, loginUrl, signUpUrl } from '../hostUrl/url';

interface UserResponse {
  id: number;
  name: string;
  email: string;
  password_digest: string;
  created_at: Date;
  updated_at: Date;
  avatar?: { url: string };
}
interface loggedUserResponse {
  logged_in: boolean;
  user: UserResponse;
}

interface loggedUser {
  loggedIn: boolean;
  user: User;
}

interface SignUpUser {
  status: string;
  user: User;
}

interface SignUpUserResponse {
  status: string;
  user: UserResponse;
}

export const loggedRepository = async (): Promise<loggedUser> => {
  const res: AxiosResponse<loggedUserResponse> = await axios.get(loggedInUrl, {
    withCredentials: true,
  });
  return userCreateResponse(res.data);
};

export const loginRepository = async (
  email: string,
  password: string
): Promise<loggedUser> => {
  const res: AxiosResponse<loggedUserResponse> = await axios.post(
    loginUrl,
    {
      user: { email: email, password: password },
    },
    {
      withCredentials: true,
    }
  );
  return userCreateResponse(res.data);
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
  const res: AxiosResponse<SignUpUserResponse> = await axios.post(
    signUpUrl,
    formData,
    {
      withCredentials: true,
    }
  );
  return userCreateSignUpResponse(res.data);
};

const userCreateResponse = (res: loggedUserResponse): loggedUser => {
  return {
    loggedIn: res.logged_in,
    user: {
      id: res.user.id,
      name: res.user.name,
      email: res.user.email,
      passwordDigest: res.user.password_digest,
      createdAt: res.user.created_at,
      updatedAt: res.user.updated_at,
      avatar: res.user.avatar,
    },
  };
};

const userCreateSignUpResponse = (res: SignUpUserResponse): SignUpUser => {
  return {
    status: res.status,
    user: {
      id: res.user.id,
      name: res.user.name,
      email: res.user.email,
      passwordDigest: res.user.password_digest,
      createdAt: res.user.created_at,
      updatedAt: res.user.updated_at,
      avatar: res.user.avatar,
    },
  };
};
