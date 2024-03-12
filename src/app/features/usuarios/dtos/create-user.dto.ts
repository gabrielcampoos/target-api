import { Profile } from "../../../shared/enums";

export interface CreateUserDTO {
  name: string;
  profile: Profile;
  username: string;
  password: string;
  companyName: string;
}
