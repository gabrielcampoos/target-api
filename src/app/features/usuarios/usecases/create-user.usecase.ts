import { Result, ResultDTO, bcrypt } from "../../../shared/utils";
import { CreateUserDTO } from "../dtos";
import { UsersRepository } from "../repository";

export class CreateUserUsecase {
  async execute(data: CreateUserDTO): Promise<ResultDTO> {
    const repository = new UsersRepository();

    const userFound = await repository.findUserByUsername(data.username);

    if (userFound) return Result.error(400, "Usuário já cadastrado.");

    const passwordHash = await bcrypt.generateHash(data.password);
    data.password = passwordHash;

    const newUser = await repository.create(data);

    return Result.success(
      200,
      "Usuário cadastrado com sucesso.",
      newUser.toJSON()
    );
  }
}
