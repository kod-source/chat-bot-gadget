import axios, { AxiosResponse } from 'axios';
import { EditUserProfile, User } from 'lib/interfaces';
import { editUserProfileUrl } from '../hostUrl/url';

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  password_digest: string;
  memo: string | undefined;
  created_at: Date;
  updated_at: Date;
  avatar?: { url: string };
}

export const updateRepository = async (
  editUserProfile: EditUserProfile
): Promise<User> => {
  const UserData = new FormData();
  UserData.append('name', editUserProfile.name);
  UserData.append('avatar', editUserProfile.avatar as File);
  UserData.append('email', editUserProfile.email);
  UserData.append('memo', editUserProfile.memo);
  const res: AxiosResponse<UserResponse> = await axios.patch(
    `${editUserProfileUrl}/${editUserProfile.id}`,
    UserData,
    {
      withCredentials: true,
    }
  );
  return userEditResponse(res.data);
};

const userEditResponse = (res: UserResponse): User => {
  return {
    id: res.id,
    name: res.name,
    email: res.email,
    passwordDigest: res.password_digest,
    memo: res.memo,
    createdAt: res.created_at,
    updatedAt: res.updated_at,
    avatar: res.avatar,
  };
};
