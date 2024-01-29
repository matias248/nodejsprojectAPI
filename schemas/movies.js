import z from 'zod';
import { mongoose } from 'mongoose';


const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required.'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).optional(),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Movie genre is required.',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
  )
})

export function validateMovie(input) {
  return movieSchema.safeParse(input)
}

export function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input)
}

export const movieSchemaMongoDB = mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    duration: { type: Number, required: true },
    rate: { type: Number, required: false},
    poster: { type: String, required: true },
    genre: { type: [String], required: true }
  });

export const movieModelMoongoose = mongoose.model('MovieTest', movieSchemaMongoDB);