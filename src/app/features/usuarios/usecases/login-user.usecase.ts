import { Result, ResultDTO, bcrypt, jwt } from "../../../shared/utils";
import { LoginUserDTO } from "../dtos/login-user.dto";
import { UsersRepository } from "../repository";

export class LoginUserUsecase {
  async execute(data: LoginUserDTO): Promise<ResultDTO> {
    const repository = new UsersRepository();

    const userFound = await repository.findUserByUsername(data.username);

    if (!userFound) return Result.error(404, "Usuário não encontrado.");

    const validatePassword = await bcrypt.compareHash(
      data.password,
      userFound.toJSONWithPassword().password
    );

    if (!validatePassword)
      return Result.error(404, "Usuário ou senha inválidos.");

    const dataUser = userFound.toJSON();
    const token = jwt.encoded(dataUser);

    return Result.success(200, "Usuário logado com sucesso.", {
      ...dataUser,
      token,
    });
  }
}
