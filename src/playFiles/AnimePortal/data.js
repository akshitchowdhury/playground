const animeData = {
    success: true,
    message: "Anime list fetched successfully",
    data: {
      categories: [
        {
          category: "Shonen",
          animeList: [
            { title: "Naruto", genre: "Action, Adventure", releaseYear: 2002, rating: 8.3, status: "Completed" },
            { title: "One Piece", genre: "Action, Adventure", releaseYear: 1999, rating: 9.0, status: "Ongoing" },
            { title: "Attack on Titan", genre: "Action, Dark Fantasy", releaseYear: 2013, rating: 9.1, status: "Completed" },
            { title: "Bleach", genre: "Action, Supernatural", releaseYear: 2004, rating: 8.0, status: "Completed" },
            { title: "Demon Slayer", genre: "Action, Adventure", releaseYear: 2019, rating: 8.9, status: "Ongoing" },
            { title: "Jujutsu Kaisen", genre: "Action, Supernatural", releaseYear: 2020, rating: 8.7, status: "Ongoing" }
          ]
        },
        {
          category: "Seinen",
          animeList: [
            { title: "Berserk", genre: "Dark Fantasy, Horror", releaseYear: 1997, rating: 9.3, status: "Completed" },
            { title: "Vinland Saga", genre: "Action, Historical", releaseYear: 2019, rating: 8.8, status: "Ongoing" },
            { title: "Ergo Proxy", genre: "Psychological, Sci-Fi", releaseYear: 2006, rating: 8.0, status: "Completed" },
            { title: "Monster", genre: "Psychological, Thriller", releaseYear: 2004, rating: 9.0, status: "Completed" },
            { title: "Parasyte: The Maxim", genre: "Horror, Sci-Fi", releaseYear: 2014, rating: 8.4, status: "Completed" }
          ]
        },
        {
          category: "Isekai",
          animeList: [
            { title: "Re:Zero - Starting Life in Another World", genre: "Fantasy, Thriller", releaseYear: 2016, rating: 8.4, status: "Ongoing" },
            { title: "That Time I Got Reincarnated as a Slime", genre: "Fantasy, Adventure", releaseYear: 2018, rating: 8.1, status: "Ongoing" },
            { title: "No Game No Life", genre: "Fantasy, Adventure", releaseYear: 2014, rating: 8.2, status: "Completed" },
            { title: "Sword Art Online", genre: "Fantasy, Sci-Fi", releaseYear: 2012, rating: 7.6, status: "Completed" },
            { title: "Konosuba", genre: "Comedy, Fantasy", releaseYear: 2016, rating: 8.2, status: "Completed" }
          ]
        },
        {
          category: "Slice of Life",
          animeList: [
            { title: "Your Lie in April", genre: "Drama, Music", releaseYear: 2014, rating: 8.6, status: "Completed" },
            { title: "Clannad", genre: "Drama, Romance", releaseYear: 2007, rating: 8.0, status: "Completed" },
            { title: "Horimiya", genre: "Romance, Comedy", releaseYear: 2021, rating: 8.2, status: "Completed" },
            { title: "Barakamon", genre: "Comedy, Slice of Life", releaseYear: 2014, rating: 8.4, status: "Completed" },
            { title: "March Comes in Like a Lion", genre: "Drama, Slice of Life", releaseYear: 2016, rating: 8.9, status: "Completed" }
          ]
        },
        {
          category: "Mecha",
          animeList: [
            { title: "Neon Genesis Evangelion", genre: "Mecha, Psychological", releaseYear: 1995, rating: 8.5, status: "Completed" },
            { title: "Code Geass: Lelouch of the Rebellion", genre: "Mecha, Thriller", releaseYear: 2006, rating: 8.9, status: "Completed" },
            { title: "Gurren Lagann", genre: "Action, Mecha", releaseYear: 2007, rating: 8.6, status: "Completed" },
            { title: "Mobile Suit Gundam", genre: "Mecha, Sci-Fi", releaseYear: 1979, rating: 8.0, status: "Completed" },
            { title: "Aldnoah.Zero", genre: "Mecha, Sci-Fi", releaseYear: 2014, rating: 7.5, status: "Completed" }
          ]
        },
        {
          category: "Sports",
          animeList: [
            { title: "Haikyuu!!", genre: "Sports, Comedy", releaseYear: 2014, rating: 8.7, status: "Completed" },
            { title: "Blue Lock", genre: "Sports, Thriller", releaseYear: 2022, rating: 8.5, status: "Ongoing" },
            { title: "Kuroko's Basketball", genre: "Sports, Drama", releaseYear: 2012, rating: 8.1, status: "Completed" },
            { title: "Ace of Diamond", genre: "Sports, Drama", releaseYear: 2013, rating: 8.2, status: "Completed" },
            { title: "Ping Pong the Animation", genre: "Sports, Psychological", releaseYear: 2014, rating: 8.6, status: "Completed" }
          ]
        }
      ]
    }
  };
  
  export default animeData;
  