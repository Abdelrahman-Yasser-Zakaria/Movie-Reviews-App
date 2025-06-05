# Movie Reviews App 🎬

A full-stack movie review application that allows users to browse popular movies, search for specific titles, and manage reviews. The application features a modern responsive design with dark/light mode toggle and seamless movie data integration from The Movie Database (TMDb) API.

## 🚀 Features

### Frontend Features

- **Movie Browsing**: Browse popular movies with poster images and titles
- **Search Functionality**: Search for specific movies using TMDb API
- **Dark/Light Mode Toggle**: Switch between dark and light themes with persistent preference storage
- **Movie Reviews**: View and manage reviews for individual movies
- **Responsive Design**: Mobile-friendly layout that works across different screen sizes
- **Modern UI**: Clean and intuitive user interface with smooth interactions

### Backend Features

- **RESTful API**: Well-structured API endpoints for review management
- **CRUD Operations**: Create, Read, Update, and Delete movie reviews
- **MongoDB Integration**: Persistent data storage for user reviews
- **CORS Support**: Cross-origin resource sharing enabled for frontend communication
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with CSS variables for theming
- **Vanilla JavaScript** - Dynamic functionality and API interactions
- **TMDb API** - Movie data and poster images
- **LocalStorage** - Theme preference persistence

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **MongoDB Driver** - Native MongoDB client for Node.js
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

### Development Tools

- **ES6 Modules** - Modern JavaScript module system
- **Environment Variables** - Secure configuration management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14.0.0 or higher)
- **npm** (Node Package Manager)
- **MongoDB Atlas Account** (for cloud database) or **MongoDB** (for local installation)
- **TMDb API Key** (free registration at [The Movie Database](https://www.themoviedb.org/))

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd "Movie app"
```

### 2. Backend Setup

```bash
# Navigate to the backend directory
cd Back-end

# Install dependencies
npm install

# Create environment variables file
touch .env
```

### 3. Configure Environment Variables

Create a `.env` file in the `Back-end` directory with the following variables:

```env
MONGO_USERNAME=your_mongodb_username
MONGO_PASSWORD=your_mongodb_password
```

**MongoDB Setup:**

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user with username and password
4. Get the connection string and extract the username and password

### 4. Frontend Setup

```bash
# Navigate to the frontend directory
cd ../Front-end

# Update the API key in config.js
# Replace the existing API key with your TMDb API key
```

**TMDb API Setup:**

1. Register for a free account at [The Movie Database](https://www.themoviedb.org/)
2. Navigate to Settings > API
3. Request an API key
4. Replace the API key in `Front-end/config.js`

### 5. Running the Application

#### Start the Backend Server

```bash
# From the Back-end directory
cd Back-end
node index.js
```

The server will start on `http://localhost:8000`

#### Start the Frontend

```bash
# From the Front-end directory
cd Front-end

# Option 1: Using a simple HTTP server (Python)
python3 -m http.server 3000

# Option 2: Using Node.js http-server (install globally first)
npm install -g http-server
http-server -p 3000

# Option 3: Using Live Server extension in VS Code
# Right-click on index.html and select "Open with Live Server"
```

The frontend will be available at `http://localhost:3000`

## 📁 Directory Structure

```
Movie app/
├── Back-end/                          # Backend server files
│   ├── api/                          # API routes and controllers
│   │   ├── reviews.controller.js     # Review operations controller
│   │   └── reviews.route.js          # Review API routes
│   ├── dao/                          # Data Access Objects
│   │   └── reviewsDAO.js             # MongoDB operations for reviews
│   ├── index.js                      # Main server entry point
│   ├── server.js                     # Express server configuration
│   └── package.json                  # Backend dependencies
├── Front-end/                        # Frontend client files
│   ├── config.js                     # API configuration (TMDb key)
│   ├── index.html                    # Main page
│   ├── movie-reviews.html            # Individual movie reviews page
│   ├── movie-reviews.css             # Styles for reviews page
│   ├── movie-reviews.js              # JavaScript for reviews page
│   ├── script.js                     # Main page JavaScript
│   ├── style.css                     # Main page styles
│   ├── explanation.md                # Technical documentation
│   └── toys.jpeg                     # Sample image asset
└── README.md                         # This file
```

## 🔧 API Endpoints

### Reviews API (`/api/v1/reviews`)

| Method | Endpoint                    | Description                          |
| ------ | --------------------------- | ------------------------------------ |
| GET    | `/api/v1/reviews/movie/:id` | Get all reviews for a specific movie |
| GET    | `/api/v1/reviews/:reviewId` | Get a specific review by ID          |
| POST   | `/api/v1/reviews`           | Create a new review                  |
| PUT    | `/api/v1/reviews/:reviewId` | Update an existing review            |
| DELETE | `/api/v1/reviews/:reviewId` | Delete a review                      |

### Request/Response Examples

#### Create a Review (POST)

```json
{
  "movieId": 123456,
  "user": "john_doe",
  "review": "Great movie! Highly recommended."
}
```

#### Update a Review (PUT)

```json
{
  "user": "john_doe",
  "review": "Updated review text here."
}
```

## 🎨 Features in Detail

### Theme Toggle

- Persistent theme selection using localStorage
- Smooth transitions between dark and light modes
- Emoji-based toggle button (🌙/☀️)

### Movie Integration

- Real-time movie data from TMDb API
- High-quality poster images
- Search functionality with live results
- Popular movies displayed by default

### Review System

- User-based review management
- CRUD operations for reviews
- Movie-specific review grouping
- Error handling and validation

## 🐛 Troubleshooting

### Common Issues

1. **Backend won't start**

   - Check if MongoDB credentials are correct in `.env`
   - Ensure MongoDB Atlas IP whitelist includes your IP
   - Verify all dependencies are installed (`npm install`)

2. **Movies not loading**

   - Verify TMDb API key is correct in `config.js`
   - Check browser console for API errors
   - Ensure internet connection is stable

3. **CORS errors**

   - Make sure backend server is running on port 8000
   - Check if frontend is trying to connect to the correct backend URL

4. **Reviews not saving**
   - Verify MongoDB connection is established
   - Check backend console for error messages
   - Ensure proper request format is being sent

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie API
- [MongoDB Atlas](https://www.mongodb.com/atlas) for cloud database services
- [Express.js](https://expressjs.com/) for the web framework
- [Node.js](https://nodejs.org/) for the runtime environment

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information about the problem

---

**Happy movie reviewing! 🍿**
