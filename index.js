import express, { json } from 'express';
import { corsMiddleware } from './middlewares/corsmiddleware.js';
import { createMovieRouter } from './routes/movies.js';

export const createApp = ({ movieModel }) => {
    const app = express(); 
    
    app.use(json())
    app.use(corsMiddleware(0))
    app.disable('x-powered-by')

    app.get('/', (req, res) => {
        res.json({ message: 'it works' })
    })
    app.use('/movies', createMovieRouter({ movieModel }))

    const PORT = process.env.PORT ?? 3001

    app.listen(PORT, () => {
        console.log('server listening')
    })

}
