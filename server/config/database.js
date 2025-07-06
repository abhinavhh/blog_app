import { connect } from 'mongoose';

function connectDB() {
    connect(process.env.MONGODB_URI, {
        useNewUriParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Mongodb connected'))
    .catch((err) => console.log('Error connecting', err));
}
export default connectDB;