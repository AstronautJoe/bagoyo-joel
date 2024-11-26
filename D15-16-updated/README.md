To start building this project run the following commands:
npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv cors
npm install --save-dev nodemon

mkdir -p controllers middleware models routes && \
touch controllers/{authController.js,blogController.js,commentController.js} \
middleware/authMiddleware.js \
models/{User.js,Blog.js,Comment.js} \
routes/{authRoutes.js,blogRoutes.js,commentRoutes.js} \
.env app.js

