import { User } from '../Entity/User';

export interface UserResponseObject {
  id: number;
  name: string;
  email: string;
  password_digest: string;
  memo: string;
  created_at: Date;
  updated_at: Date;
  avatar?: { url: string };
}

export interface loggedUser {
  loggedIn: boolean;
  user: User | undefined;
}

export interface loggedUserResponse {
  logged_in: boolean;
  user: UserResponseObject;
}

export interface SignUpUserResponse {
  status: string;
  user: UserResponseObject;
}

export interface SignUpUser {
  status: string;
  user: User;
}
export class UserFactory {
  static createFromResponse(res: UserResponseObject): User {
    return new User(
      res.id,
      res.name,
      res.email,
      res.password_digest,
      res.memo,
      new Date(res.created_at),
      new Date(res.updated_at),
      res.avatar
    );
  }

  static createLoggedResponse(res: loggedUserResponse): loggedUser {
    if (res.logged_in === false) {
      return {
        loggedIn: res.logged_in,
        user: undefined,
      };
    } else {
      return {
        loggedIn: res.logged_in,
        user: new User(
          res.user.id,
          res.user.name,
          res.user.email,
          res.user.password_digest,
          res.user.memo,
          new Date(res.user.created_at),
          new Date(res.user.updated_at),
          res.user.avatar
        ),
      };
    }
  }

  static createSignUpResponse(res: SignUpUserResponse): SignUpUser {
    return {
      status: res.status,
      user: new User(
        res.user.id,
        res.user.name,
        res.user.email,
        res.user.password_digest,
        res.user.memo,
        new Date(res.user.created_at),
        new Date(res.user.updated_at),
        res.user.avatar
      ),
    };
  }
}
