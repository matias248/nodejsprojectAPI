import mongoose from 'mongoose';

export const connectionDB = () => {
    mongoose.connect('mongodb+srv://usuario22:6lcH8Qh5ofqhA5c8@cluster0.ntbdgqq.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log('Successfully connected to MongoDB Atlas!');
        })
        .catch((error) => {
            console.log('Unable to connect to MongoDB Atlas!');
            console.error(error);
        });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
    });

    mongoose.connection.on('error', err => {
        console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(
                'Mongoose connection is disconnected due to app termination...'
            );
            process.exit(0);
        });
    });
}
