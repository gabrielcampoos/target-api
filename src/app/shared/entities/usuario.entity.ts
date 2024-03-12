import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Profile } from "../enums";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column({ type: "enum", enum: Profile })
  profile!: Profile;

  @Column()
  password!: string;

  @Column({ name: "company_name" })
  companyName!: string;
}
