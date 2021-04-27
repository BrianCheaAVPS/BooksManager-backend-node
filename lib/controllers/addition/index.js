import express                        from 'express';
import * as additionControllerFuncs   from './funcs'
import * as restUtils                 from '../../utils/rest-utils'

const additionController = express.Router();
const $result = restUtils.$result;

additionController.post('/',             $result(additionControllerFuncs.onAddition))

export default additionController