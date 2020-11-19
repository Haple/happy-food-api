import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import RecipesController from '../controllers/RecipesController';

const recipesRouter = Router();
const recipesController = new RecipesController();

recipesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      i: Joi.string().required(),
    },
  }),
  recipesController.index,
);

export default recipesRouter;
