import { Router } from 'express';
import BooksComponent from '../Books';

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router: Router = Router();

/**
 * Route serving list of books.
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', BooksComponent.chart);

/**
 * @export {express.Router}
 */
export default router;
