import { Router } from 'express';

export interface IController {
  addRoutes(router: Router): void;
}