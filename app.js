import express from 'express';
import mongoose from 'mongoose';
import router from '../social-media-rest-api/routes/user-routes';

const app = express();
app.use(express.json());
app.use('/api/user', router);

mongoose.connect('mongodb+srv://brandonmunongi:blessingrutendo29@cluster0.02okvqj.mongodb.net/?retryWrites=true&w=majority&appName=Blog'
).then(() => app.listen(5000)).then(() => console.log('Connected to Database...')).catch((err) => console.log(err));


