export interface ICommandHandler<Command, Response> {
  handle(command: Command): Response;
}