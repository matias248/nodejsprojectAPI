import { Router } from "express";
import { MovieController } from "../controllers/movieController.js";


export const createMovieRouter = ({ movieModel }) => {
    const moviesrouter = Router()
    const movieController = new MovieController({ movieModel })

    moviesrouter.get('/', movieController.getAll)
    moviesrouter.post('/', movieController.create)
    moviesrouter.get('/:id', movieController.getById)
    moviesrouter.delete('/:id', movieController.delete)
    moviesrouter.patch('/:id', movieController.update)

    return moviesrouter;
}





