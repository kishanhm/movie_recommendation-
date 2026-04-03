const TMDB_IMG = "https://image.tmdb.org/t/p/w300";
 
// TMDB poster paths — fetched once at build time from public TMDB data
const POSTER_MAP = {
  1:  "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",  // The Dark Knight
  2:  "/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",  // Inception
  3:  "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",  // Interstellar
  4:  "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",  // The Matrix
  5:  "/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",  // Avatar
  6:  "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",  // Pulp Fiction
  7:  "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",  // Fight Club
  8:  "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",  // Parasite
  9:  "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",  // Spirited Away
  10: "/3bhkrj58Vtu7enYsLrgTrQx5We.jpg",  // The Godfather
  11: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",  // Avengers: Endgame
  12: "/q719jXXEzOoYaps6babgKnONONX.jpg",  // Your Name
  13: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",  // Dune
  14: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",  // The Shawshank Redemption
  15: "/7fn624j5lj3xTme2SgiLCeuedmO.jpg",  // Whiplash
  16: "/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",  // La La Land
  17: "/tFXcEccSQMVl9dQ3LQ1NNEZN8bj.jpg",  // Get Out
  18: "/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",  // Knives Out
  19: "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",  // Mad Max: Fury Road
  20: "/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",  // The Grand Budapest Hotel
  21: "/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",  // Hereditary
  22: "/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",  // Everything Everywhere All at Once
  23: "/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",  // No Country for Old Men
  24: "/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",  // Arrival
  25: "/cMYCDADoLKLbB83g4WnJegaZimC.jpg",  // Princess Mononoke
  26: "/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",  // Oppenheimer
  27: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",  // Blade Runner 2049
  28: "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",  // Coco
  29: "/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",  // Shutter Island
  30: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",  // Parasite (Director's Cut)
};
 
const MOVIES = [
  {id:1, title:"The Dark Knight", year:2008, genres:["Action","Crime","Thriller"], keywords:["superhero","batman","joker","gotham","vigilante"], rating:9.0, desc:"Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos."},
  {id:2, title:"Inception", year:2010, genres:["Action","Sci-Fi","Thriller"], keywords:["dreams","heist","mind","subconscious","nolan"], rating:8.8, desc:"A thief who steals secrets through dreams takes one final job to implant an idea."},
  {id:3, title:"Interstellar", year:2014, genres:["Sci-Fi","Drama"], keywords:["space","time","wormhole","gravity","nolan","future"], rating:8.6, desc:"Astronauts travel through a wormhole near Saturn in search of humanity's new home."},
  {id:4, title:"The Matrix", year:1999, genres:["Action","Sci-Fi"], keywords:["simulation","hacker","ai","reality","dystopia"], rating:8.7, desc:"A hacker discovers the world is a simulation and joins a rebellion against machines."},
  {id:5, title:"Avatar", year:2009, genres:["Action","Sci-Fi","Adventure"], keywords:["alien","planet","nature","war","pandora"], rating:7.8, desc:"A soldier falls in love with a native of a lush alien planet he's sent to invade."},
  {id:6, title:"Pulp Fiction", year:1994, genres:["Crime","Drama","Thriller"], keywords:["tarantino","hitman","crime","nonlinear","dialogue"], rating:8.9, desc:"Multiple intersecting crime stories in Los Angeles told in nonlinear order."},
  {id:7, title:"Fight Club", year:1999, genres:["Drama","Thriller"], keywords:["rebellion","identity","anarchy","twist","underground"], rating:8.8, desc:"An insomniac office worker forms an underground fight club that evolves dangerously."},
  {id:8, title:"Parasite", year:2019, genres:["Thriller","Drama","Comedy"], keywords:["class","family","korea","social","bong"], rating:8.5, desc:"A poor family schemes to become employed by a wealthy family with unexpected results."},
  {id:9, title:"Spirited Away", year:2001, genres:["Animation","Fantasy","Adventure"], keywords:["miyazaki","spirit","japan","magic","girl","studio ghibli"], rating:8.6, desc:"A girl gets trapped in a spirit world and must work to save her transformed parents."},
  {id:10, title:"The Godfather", year:1972, genres:["Crime","Drama"], keywords:["mafia","power","family","coppola","corleone"], rating:9.2, desc:"The patriarch of a crime dynasty transfers control to his youngest son."},
  {id:11, title:"Avengers: Endgame", year:2019, genres:["Action","Sci-Fi","Adventure"], keywords:["marvel","superhero","thanos","time travel","epic"], rating:8.4, desc:"After Thanos wipes out half the universe, the Avengers reunite for a final stand."},
  {id:12, title:"Your Name", year:2016, genres:["Animation","Romance","Drama"], keywords:["body swap","japan","comet","love","shinkai"], rating:8.4, desc:"Two teenagers in rural and urban Japan mysteriously swap bodies in their dreams."},
  {id:13, title:"Dune", year:2021, genres:["Sci-Fi","Adventure","Drama"], keywords:["desert","spice","politics","epic","villeneuve"], rating:8.0, desc:"A noble family's heir journeys to the most dangerous planet in the universe."},
  {id:14, title:"The Shawshank Redemption", year:1994, genres:["Drama"], keywords:["prison","hope","friendship","redemption","freedom"], rating:9.3, desc:"Two imprisoned men bond over years, finding solace and eventual redemption."},
  {id:15, title:"Whiplash", year:2014, genres:["Drama","Music"], keywords:["jazz","ambition","obsession","music","teacher"], rating:8.5, desc:"A young drummer pursues greatness under a relentlessly demanding instructor."},
  {id:16, title:"La La Land", year:2016, genres:["Romance","Music","Drama"], keywords:["jazz","dreams","los angeles","love","chazelle"], rating:8.0, desc:"A jazz musician and an aspiring actress fall in love while chasing their dreams."},
  {id:17, title:"Get Out", year:2017, genres:["Horror","Thriller","Mystery"], keywords:["race","social horror","twist","peele","mind control"], rating:7.7, desc:"A Black man visits his white girlfriend's family estate and uncovers a disturbing secret."},
  {id:18, title:"Knives Out", year:2019, genres:["Mystery","Crime","Comedy"], keywords:["detective","whodunit","family","inheritance","johnson"], rating:7.9, desc:"A detective investigates the death of a famous crime novelist amid his dysfunctional family."},
  {id:19, title:"Mad Max: Fury Road", year:2015, genres:["Action","Adventure","Sci-Fi"], keywords:["post-apocalyptic","chase","desert","practical effects","rebellion"], rating:8.1, desc:"A woman rebels against a tyrant in a post-apocalyptic wasteland with a drifter."},
  {id:20, title:"The Grand Budapest Hotel", year:2014, genres:["Comedy","Drama","Adventure"], keywords:["wes anderson","quirky","europe","mystery","heist"], rating:8.1, desc:"A concierge is implicated in the theft of a priceless painting and a murder."},
  {id:21, title:"Hereditary", year:2018, genres:["Horror","Drama","Mystery"], keywords:["grief","occult","family","slow burn","aster"], rating:7.3, desc:"A grieving family unravels dark secrets after the death of their secretive grandmother."},
  {id:22, title:"Everything Everywhere All at Once", year:2022, genres:["Action","Sci-Fi","Comedy","Drama"], keywords:["multiverse","family","existential","humor","absurd"], rating:7.8, desc:"A laundromat owner discovers she must connect with parallel-universe versions of herself."},
  {id:23, title:"No Country for Old Men", year:2007, genres:["Crime","Drama","Thriller"], keywords:["coen brothers","hunter","chance","fate","west texas"], rating:8.1, desc:"Violence and fate collide when a hunter stumbles upon a drug deal gone wrong."},
  {id:24, title:"Arrival", year:2016, genres:["Sci-Fi","Drama","Mystery"], keywords:["language","time","aliens","communication","villeneuve"], rating:7.9, desc:"A linguist works to decode the language of extraterrestrial visitors on Earth."},
  {id:25, title:"Princess Mononoke", year:1997, genres:["Animation","Fantasy","Adventure"], keywords:["miyazaki","nature","spirits","war","japan","studio ghibli"], rating:8.3, desc:"A prince seeks a cure while caught between a forest god and industry's encroachment."},
  {id:26, title:"Oppenheimer", year:2023, genres:["Drama","History","Thriller"], keywords:["nuclear","war","science","nolan","atomic bomb"], rating:8.3, desc:"The story of J. Robert Oppenheimer and the development of the atomic bomb."},
  {id:27, title:"Blade Runner 2049", year:2017, genres:["Sci-Fi","Drama","Mystery"], keywords:["replicants","identity","dystopia","villeneuve","future"], rating:8.0, desc:"A young blade runner discovers a secret that leads him to find a missing predecessor."},
  {id:28, title:"Coco", year:2017, genres:["Animation","Adventure","Drama"], keywords:["pixar","family","music","mexico","afterlife"], rating:8.4, desc:"A boy accidentally enters the Land of the Dead and seeks his great-great-grandfather."},
  {id:29, title:"Shutter Island", year:2010, genres:["Mystery","Thriller","Drama"], keywords:["mind","asylum","twist","scorsese","detective"], rating:8.1, desc:"A U.S. Marshal investigates the disappearance of a murderer from a mental institution."},
  {id:30, title:"Parasite (Director's Cut)", year:2019, genres:["Comedy","Drama","Thriller"], keywords:["class warfare","wealth","deception","bong","korea"], rating:8.6, desc:"A dark comedy thriller about social inequality and the collision of two families."}
];
 
const ALL_GENRES = [...new Set(MOVIES.flatMap(m => m.genres))].sort();
 
let selectedIds = new Set();
let activeGenres = new Set();
let searchQuery = "";
 
//  Utility 
 
function posterUrl(id) {
  const path = POSTER_MAP[id];
  return path ? TMDB_IMG + path : null;
}
 
function posterImg(id, title) {
  const url = posterUrl(id);
  if (url) {
    return `<img src="${url}" alt="${title}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=\\'poster-fallback\\'><div class=\\'poster-fallback-title\\'>${title.replace(/'/g, "&#39;")}</div></div>'">`;
  }
  return `<div class="poster-fallback"><div class="poster-fallback-title">${title}</div></div>`;
}
 
function starRating(r) {
  return "&#9733;".repeat(Math.floor(r / 2)) + (r / 2 - Math.floor(r / 2) >= 0.5 ? "½" : "");
}
 
function getRankClass(i) {
  return ['rank-1', 'rank-2', 'rank-3', 'rank-other'][Math.min(i, 3)];
}
 
// Algorithm 
 
function buildVector(movie) {
  const vec = {};
  movie.genres.forEach(g => { vec["g_" + g] = 2; });
  movie.keywords.forEach(k => { vec["k_" + k] = 1; });
  return vec;
}
 
function cosineSim(vecA, vecB) {
  let dot = 0, magA = 0, magB = 0;
  const allKeys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
  allKeys.forEach(k => {
    const a = vecA[k] || 0, b = vecB[k] || 0;
    dot += a * b; magA += a * a; magB += b * b;
  });
  if (!magA || !magB) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}
 
function recommend() {
  if (!selectedIds.size) return [];
  const userVec = {};
  MOVIES.filter(m => selectedIds.has(m.id)).forEach(m => {
    Object.entries(buildVector(m)).forEach(([k, v]) => {
      userVec[k] = (userVec[k] || 0) + v;
    });
  });
  return MOVIES
    .filter(m => !selectedIds.has(m.id))
    .map(m => ({ movie: m, score: cosineSim(userVec, buildVector(m)) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
 
// Filtering
 
function filteredMovies() {
  const q = searchQuery.toLowerCase();
  return MOVIES.filter(m => {
    const matchQ = !q
      || m.title.toLowerCase().includes(q)
      || m.genres.some(g => g.toLowerCase().includes(q))
      || m.keywords.some(k => k.includes(q));
    const matchG = !activeGenres.size || m.genres.some(g => activeGenres.has(g));
    return matchQ && matchG;
  });
}
 
// State Updates
 
function updateStats() {
  document.getElementById("ns-selected").textContent = selectedIds.size;
  document.getElementById("ns-recs").textContent = selectedIds.size ? recommend().length : 0;
}
 
function toggleGenre(g) {
  activeGenres.has(g) ? activeGenres.delete(g) : activeGenres.add(g);
  renderGenres();
  renderMovies();
}
 
function toggleSelect(id) {
  selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id);
  renderMovies();
  renderRecs();
  updateStats();
}
 
// Render: Genre Row ─
 
function renderGenres() {
  document.getElementById("genre-row").innerHTML = ALL_GENRES.map(g =>
    `<button class="genre-btn ${activeGenres.has(g) ? 'active' : ''}" onclick="toggleGenre('${g}')">${g}</button>`
  ).join('');
}
 
//  Render: Movie Grid 
 
function renderMovies() {
  const grid = document.getElementById("movie-grid");
  const movies = filteredMovies();
 
  if (!movies.length) {
    grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">&#128269;</div><div class="empty-text">No movies match your search</div></div>';
    return;
  }
 
  grid.innerHTML = movies.map(m => {
    const sel = selectedIds.has(m.id);
    return `<div class="movie-card ${sel ? 'selected' : ''}" onclick="toggleSelect(${m.id})">
      ${sel ? '<div class="selected-badge">&#10003;</div>' : ''}
      <div class="card-poster">
        ${posterImg(m.id, m.title)}
        <div class="poster-overlay"></div>
      </div>
      <div class="card-body">
        <div class="card-title">${m.title}</div>
        <div class="card-year">${m.year}</div>
        <div class="card-rating">
          <span class="star-fill">${starRating(m.rating)}</span>
          <span class="rating-num">${m.rating}</span>
        </div>
        <div class="card-genres">${m.genres.slice(0, 2).map(g => `<span class="genre-tag">${g}</span>`).join('')}</div>
      </div>
    </div>`;
  }).join('');
}
 
//  Render: Recommendations
 
function renderRecs() {
  const recs = recommend();
  const list = document.getElementById("rec-list");
 
  if (!recs.length) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">&#127916;</div>
      <div class="empty-text">Select one or more movies above and watch the recommendations appear instantly</div>
    </div>`;
    return;
  }
 
  const maxScore = recs[0].score || 1;
  list.innerHTML = recs.map(({ movie: m, score }, i) => {
    const pct = Math.round((score / maxScore) * 100);
    const url = posterUrl(m.id);
    const recThumb = url
      ? `<img src="${url}" alt="${m.title}" loading="lazy" onerror="this.style.display='none'">`
      : `<div class="rec-poster-fallback">${m.title}</div>`;
 
    return `<div class="rec-card" style="animation-delay:${i * 0.05}s">
      <div class="rec-rank ${getRankClass(i)}">${i + 1}</div>
      <div class="rec-poster-wrap">${recThumb}</div>
      <div class="rec-body">
        <div class="rec-title">${m.title}</div>
        <div class="rec-meta">${m.year} &nbsp;&middot;&nbsp; ${m.genres.join(', ')} &nbsp;&middot;&nbsp; ${starRating(m.rating)} ${m.rating}</div>
        <div class="rec-tags">${m.keywords.slice(0, 5).map(k => `<span class="rec-tag">${k}</span>`).join('')}</div>
        <div class="rec-desc">${m.desc}</div>
        <div class="match-bar-wrap">
          <div class="match-label"><span>Match score</span><span class="match-pct">${pct}%</span></div>
          <div class="match-track"><div class="match-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
    </div>`;
  }).join('');
}
 
// Search Actions
 
function runSearch() {
  searchQuery = document.getElementById("search-input").value;
  renderMovies();
}
 
function clearAll() {
  searchQuery = "";
  activeGenres.clear();
  selectedIds.clear();
  document.getElementById("search-input").value = "";
  renderGenres();
  renderMovies();
  renderRecs();
  updateStats();
}
 
// Init
 
document.getElementById("search-input").addEventListener("keydown", e => {
  if (e.key === "Enter") runSearch();
});
 
renderGenres();
renderMovies();
renderRecs();
