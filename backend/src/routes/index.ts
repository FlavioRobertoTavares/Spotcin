import { Express, Router } from 'express';
import { di } from '../di/index';
import TestController from '../controllers/test.controller';
import TestService from '../services/test.service';
import CategoriaController from '../controllers/category.controller';
import CategoriaService from '../services/category.service';


const router = Router();
const prefix = '/api';

export default (app: Express) => {
  app.use(
    prefix,
    new TestController(router, di.getService(TestService)).router
  );

  app.use(
    prefix,
    new CategoriaController(router, di.getService(CategoriaService)).router
  );

  app.use('/api', router);
};
