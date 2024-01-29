import { movieModelMoongoose } from '../../schemas/movies.js'

export class MovieModel {
    static async getAll({ genre }) {
        try {
            const results = await movieModelMoongoose.find(genre ? { genre: genre } : {}, { __v: 0 });
            return results;
        } catch (error) {
            console.log(error.message);
        }
        return null;

    }

    static async getById({ id }) {
        try {
            const product = await movieModelMoongoose.findById(id);
            return product;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    static async create({ input }) {
        try {
            const movie = new movieModelMoongoose(input);
            const result = await movie.save();
            return result;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    static async delete({ id }) {
        try {
            const result = await movieModelMoongoose.findByIdAndDelete(id);
            return result;
        }
        catch (error) {
            console.log(error.message);
        }
        return null;
    }

    static async update({ id, input }) {
        try {
            const result = await movieModelMoongoose.findByIdAndUpdate(id, input, { new: true });
            return result;
        }
        catch (error) {
            console.log(error.message);
        }
        return null;
    }
}