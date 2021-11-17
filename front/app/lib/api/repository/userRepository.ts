import axios, { AxiosResponse } from 'axios';
import { User } from '../Entity/User';
import { UserFactory, UserResponseObject } from '../Factory/UserFactory';
import { editUserProfileUrl } from '../hostUrl/url';
export interface EditUserProfile {
  id: number;
  name: string;
  email: string;
  memo: string;
  avatar?: File | null;
}

export class UserRepository {
  static async update(editUserProfile: EditUserProfile): Promise<User> {
    const UserData = new FormData();
    UserData.append('name', editUserProfile.name);
    UserData.append('avatar', editUserProfile.avatar as File);
    UserData.append('email', editUserProfile.email);
    UserData.append('memo', editUserProfile.memo);
    const res: AxiosResponse<UserResponseObject> = await axios.patch(
      `${editUserProfileUrl}/${editUserProfile.id}`,
      UserData,
      {
        withCredentials: true,
      }
    );

    return UserFactory.createFromResponse(res.data);
  }
}