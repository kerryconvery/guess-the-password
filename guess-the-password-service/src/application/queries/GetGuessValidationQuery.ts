import { IQueryHandler } from '../IQueryHandler';
import { GameRepository } from '../../repositories/GameRepository';
import { Game } from '../../domain/entities/Game';
import { Maybe } from '../../types/Maybe';

export class GetGuessValidationQuery {
  constructor(hint: string, guess: string) {
    this.hint = hint;
    this.guess = guess;
  }

  public hint: string; 
  public guess: string;
}

export class GetGuessValidationResponseDto {
  constructor(isCorrect: boolean, hint: string, guess: string, validCharacterIndexes: Array<number>) {
    this.isCorrect = isCorrect;
    this.hint = hint;
    this.guess = guess;
    this.validCharacterIndexes = validCharacterIndexes; 
  }

  public isCorrect: boolean;
  public hint: string;
  public guess: string;
  public validCharacterIndexes: Array<number>;

  public static guessedCorrectly(hint: string, guess: string, validCharacterIndexes: Array<number>): GetGuessValidationResponseDto {
    return new GetGuessValidationResponseDto(true, hint, guess, validCharacterIndexes)
  }

  public static guessedWrongly(
    hint: string, guess: string, validCharacterIndexes: Array<number>): GetGuessValidationResponseDto {
    return new GetGuessValidationResponseDto(false, hint, guess, validCharacterIndexes)
  }
}

export class GetGuessValidationQueryResponse {
  constructor(responseDto: Maybe<GetGuessValidationResponseDto>) {
    this.responseDto = responseDto;
  }

  public responseDto: Maybe<GetGuessValidationResponseDto>;
}

export class GetGuessValidationQueryHandler implements IQueryHandler<GetGuessValidationQuery, GetGuessValidationQueryResponse> {
  private _gameRepository: GameRepository;

  constructor(gameRepository: GameRepository) {
    this._gameRepository = gameRepository;
  }

  public handle(query: GetGuessValidationQuery): GetGuessValidationQueryResponse {
    const maybeGame = this._gameRepository.get(query.hint);

    const maybeResponseDto = maybeGame
      .map<GetGuessValidationResponseDto>(game => this.validationPasswordGuess(game, query.guess))

    return new GetGuessValidationQueryResponse(maybeResponseDto);
  }

  private validationPasswordGuess(game: Game, guess: string): GetGuessValidationResponseDto {
    const validCharacterIndexes = game.getMatchedCharacterIndexes(guess);

    if (game.verifyGuess(guess)) {
      return GetGuessValidationResponseDto.guessedCorrectly(game.hint, guess, validCharacterIndexes);
    };

    return GetGuessValidationResponseDto.guessedWrongly(game.hint, guess, validCharacterIndexes);
  }
}