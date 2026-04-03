# movie_recommendation-
An intelligent movie recommendation web app that suggests films based on your taste using Content-Based Filtering and Cosine Similarity.

Features:

Search movies by title, genre, or keywords
Filter movies by genre
Select your favorite movies
Get instant AI-powered recommendations
Match percentage visualization
Modern, responsive UI design



CineMatch uses a Content-Based Recommendation System:

Feature Extraction
Each movie is converted into a vector using:
Genres (weight = 2)
Keywords (weight = 1)
User Preference Modeling
Selected movies are combined into a single preference vector
Similarity Calculation
Cosine similarity is used to compare movies
Recommendation Generation
Top matching movies are ranked and displayed


Tech Stack
Frontend: HTML, CSS, JavaScript
Algorithm:
Content-Based Filtering
TF-IDF inspired weighting
Cosine Similarity

📁 CineMatch
│── index.html      # Main UI structure
│── style.css       # Styling and layout
│── app.js          # Logic and recommendation algorithm


Usage
Search or browse movies
Select one or more movies you like
View personalized recommendations instantly


Future Improvements
 Integrate real-time movie API (like TMDB)
 User login & saved preferences
 Collaborative filtering
 Mobile app version

 Installation & Setup
   Clone the repository:
      git clone https://github.com/kishanhm/cinematch.git

   Open the project folder:
      cd cinematch
      
   Run the app:
      Simply open index.html in your browser

  
Author:
Kishan H M
GitHub: https://github.com/kishanhm

      
