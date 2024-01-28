import { createApp } from "./index.js"

import { MovieModel } from "./models/mongodb/movieModel.js"

createApp({ movieModel: MovieModel })