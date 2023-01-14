import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import { USERS } from "./users";

export class InMemoryUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    return USERS.find((user) => user.id === id) || null;
  }
}
