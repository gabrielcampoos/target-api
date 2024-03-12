import { Profile } from "../shared/enums";
import { Base } from "./Base";

export interface UserJSON {
  id: string;
  name: string;
  profile: Profile;
  username: string;
  createdAt: Date;
  companyName?: string;
}

export class User extends Base {
  constructor(
    _id: string,
    private _name: string,
    private _profile: Profile,
    private _username: string,
    private _password: string,
    private _companyName: string
  ) {
    super();
  }

  toJSON(): UserJSON {
    return {
      id: this._id,
      name: this._name,
      profile: this._profile,
      username: this._username,
      createdAt: this._createdAt,
      companyName: this._companyName,
    };
  }

  toJSONWithPassword() {
    return {
      id: this._id,
      name: this._name,
      profile: this._profile,
      username: this._username,
      password: this._password,
      createdAt: this._createdAt,
      companyName: this._companyName,
    };
  }
}
