export interface IQueryHandler<Query, Response> {
  handle(query: Query): Response;
}