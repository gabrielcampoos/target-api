import { UserJSON } from "../../../models";
import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Profile } from "../../../shared/enums";
import { Result, ResultDTO } from "../../../shared/utils";
import { UsersRepository } from "../repository";

const PREFIX_CACHE = "list-all-users";

export class ListAllUsersUsecase {
  async execute(filter?: keyof typeof Profile): Promise<ResultDTO> {
    const repository = new UsersRepository();
    const cacheRepository = new CacheRepository();

    const cacheUsers = await cacheRepository.get<UserJSON[]>(PREFIX_CACHE);

    let users: UserJSON[] = [];

    if (!cacheUsers) {
      const usersDB = await repository.listUsers();

      const users = usersDB.map((user) => user.toJSON());

      await cacheRepository.set(PREFIX_CACHE, users);
    } else {
      users = cacheUsers;
    }

    if (filter) {
      users = users.filter((user) => user.profile === filter);
    }

    return Result.success(200, "Usuários cadastrados.", users);
  }
}
