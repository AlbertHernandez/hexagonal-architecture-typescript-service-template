import { InMemoryUserRepository } from "./user-repository/in-memory-user-repository";
import { WelcomeMessageSender } from "../application/welcome-message-sender";
import { emailSender, logger } from "../../shared/infrastructure/dependencies";
import { UserController } from "./rest-api/user-controller";

const userRepository = new InMemoryUserRepository();
const welcomeEmailSender = new WelcomeMessageSender(
  userRepository,
  emailSender,
  logger
);

export const userController = new UserController(welcomeEmailSender);
