import React, {Component} from 'react';
import MovieList from '../components/MovieList';
import ApiMoviesService from '../services/ApiMoviesService';


class MoviesCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            currentCategory: '',
            updatingFilms: false,
        };

    }

    // static getDerivedStateFromProps(props, state){
    //     return null
    // }

    componentDidMount(){
        this.getDataMoviesFromAPI()
    }

    componentDidUpdate(){
        if(this.state.currentCategory !== this.props.match.params.categoryName){
            this.getDataMoviesFromAPI()
        }
    }

    async getDataMoviesFromAPI() {
        const category = this.props.match.params.categoryName;
        const dataMoviesFromApi = await ApiMoviesService.getMoviesByCategory(category);
        this.setState({
            movies: dataMoviesFromApi.results,
            currentCategory: category
        })
        
    }

    render() {

        return (
            <div className='MoviesCategory'>
                <MovieList movies={this.state.movies}/>
            </div>
        );

    }

}

export default MoviesCategory;