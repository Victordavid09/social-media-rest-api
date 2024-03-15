import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter)

mongoose.connect('mongodb+srv://brandonmunongi:blessingrutendo29@cluster0.02okvqj.mongodb.net/?retryWrites=true&w=majority&appName=Blog'
).then(() => app.listen(5000)).then(() => console.log('Connected to Database...')).catch((err) => console.log(err));


