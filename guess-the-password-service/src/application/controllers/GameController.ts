import { body } from 'express-validator';
import validator from '../../middleware/requestValidation';
import { Router, Request, Response } from 'express';
import { IController } from '../IController';
import { ICommandHandler } from '../ICommandHandler';
import { IQueryHandler } from '../IQueryHandler';
import { CreateNewGameCommand, CreateNewGameResponse } from '../commands/CreateNewGameCommand';
import { GetGuessValidationQuery, GetGuessValidationQueryResponse } from '../queries/GetGuessValidationQuery';

const clientValidationRules = [
  body('hint', 'Hint is required').isString(),
  body('guess', 'Guess is required').isString(),
];

export class GameController implements IController {
  private _createNewGameCommandHandler: ICommandHandler<CreateNewGameCommand, CreateNewGameResponse>;
  private _getGuessValidationQueryHandler: IQueryHandler<GetGuessValidationQuery, GetGuessValidationQueryResponse>;

  constructor(
    createNewGameCommandHandler: ICommandHandler<CreateNewGameCommand, CreateNewGameResponse>,
    getGuessValidationQueryHandler: IQueryHandler<GetGuessValidationQuery, GetGuessValidationQueryResponse>,
  ) {
    this._createNewGameCommandHandler = createNewGameCommandHandler;
    this._getGuessValidationQueryHandler = getGuessValidationQueryHandler;
  }

  public addRoutes(router: Router) {
    router.post('/new-password', this.createNewGame.bind(this));
    router.post('/verify-password', clientValidationRules, validator, this.verifyPassword.bind(this));
  }

  public async createNewGame(request: Request, response: Response) {
    const command = new CreateNewGameCommand();

    const createGameResponseDto = await this._createNewGameCommandHandler.handle(command);
  
    response.status(201).send(createGameResponseDto);
  }

  public async verifyPassword(request: Request, response: Response) {
    const getGuessValidationQuery = new GetGuessValidationQuery(request.body.hint, request.body.guess);

    const handlerResponse = this._getGuessValidationQueryHandler.handle(getGuessValidationQuery);
    
    const httpResponse = handlerResponse
      .responseDto.map<any>(responseDto => ({ statusCode: 200, payload: responseDto }))
      .getOrElse({ statusCode: 404 });
    response
      .status(httpResponse.statusCode)
      .send(httpResponse.payload);
  }
}