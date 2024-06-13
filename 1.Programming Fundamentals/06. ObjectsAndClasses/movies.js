function solveMovies(arr) {
    let moviesArr = [];
    for(let i = 0; i < arr.length; i++) {
        let line = arr[i];
        let movieInfo = null;
        let movieObj = {}; 
        if(line.includes('addMovie')) {
            movieInfo = line.split('addMovie ');
                movieObj.title = movieInfo[1];
                moviesArr.push(movieObj);            
        } else if(line.includes('directedBy')){
            movieInfo = line.split(' directedBy ');
            let name = movieInfo[0];
            let director = movieInfo[1];

            for(let movie of moviesArr) {
                const {title} = movie;
                if(title === name) {
                    movie.director = director;
                    break;
                }
            }
        } else if(line.includes('onDate')){
            movieInfo = line.split(' onDate ');
            let name = movieInfo[0];
            let date = movieInfo[1];

            for(let movie of moviesArr) {
                const{title} = movie;
                if(title === name) {
                    movie.date = date;
                    break;
                }
            }
        }
    }
    
    let filteredMovies = moviesArr.filter(movie => movie.director !== null && movie.date !== null);
    JSON.stringify(filteredMovies);
    for(movie of filteredMovies) {
        console.log(movie);
    } 
        
    
}

solveMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )