import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { User } from "../../../models";
import { UserEntity } from "../../../shared/entities";
import { CreateUserDTO } from "../dtos";

export class UsersRepository {
  private _manager = DatabaseConnection.connection.manager;

  async findUserByUsername(username: string): Promise<User | null> {
    const userFound = await this._manager.findOneBy(UserEntity, { username });

    if (!userFound) return null;

    return this.entityToModel(userFound);
  }

  async create(user: CreateUserDTO): Promise<User> {
    const createUser = this._manager.create(UserEntity, { ...user });

    const createdUser = await this._manager.save(createUser);

    return this.entityToModel(createdUser);
  }

  async listUsers(): Promise<User[]> {
    const listUser = await this._manager.find(UserEntity);

    return listUser.map((user) => this.entityToModel(user));
  }

  private entityToModel(dataDB: UserEntity): User {
    return new User(
      dataDB.id,
      dataDB.name,
      dataDB.profile,
      dataDB.username,
      dataDB.password,
      dataDB.companyName
    );
  }
}
