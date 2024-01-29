import { createApp } from "./index.js"

import { MovieModel } from "./models/mongodb/movieModelMongoose.js"
import {connectionDB} from "./mongooseinitDB.js"


createApp({ movieModel: MovieModel })
connectionDB();
