// const express = require("express");
// const connectDb = require('./Config/database');
// const cors = require("cors");
// const userRoutes = require('./routes/userRoutes');
// const app = express();
// const PORT=process.env.PORT || 5000;
// const dotenv = require('dotenv');
// dotenv.config();
// connectDb()

// app.get('/', (req, res) => {
//   res.send('API is running successfully.');
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use('/api', userRoutes);


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const connectDb = require('./Config/database');
// const cors = require("cors");
//  const userRoutes = require('./routes/userRoutes');
 

//  const productRoutes = require('./routes/productRoutes');
// app.use('/api/products', productRoutes);


// const app = express();
// const PORT=process.env.PORT || 5000;
// const dotenv = require('dotenv');
// dotenv.config();
// connectDb()

// // app.get('/', (req, res) => {
// //    res.send('API is running successfully.');
// //  });


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use('/api', userRoutes);


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const connectDb = require('./Config/database');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api', userRoutes);
app.use('/api/products', productRoutes);

// ...existing code...
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// ...existing code...

// app.get('/', (req, res) => {
//   res.send('API is running successfully.');
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// const express = require("express");
// const connectDb = require('./Config/database');
// const cors = require("cors");
// const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
// const dotenv = require('dotenv');
// const path = require("path");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to database
// connectDb();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // Serve uploads folder as static
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // API routes
// app.use('/api', userRoutes);
// app.use('/api/products', productRoutes);

// // Optional: Health check route
// // app.get('/', (req, res) => {
// //   res.send('API is running successfully.');
// // });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });