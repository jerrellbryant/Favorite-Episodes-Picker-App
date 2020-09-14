import { IAction, IEpisode, IState } from "./interfaces";
import axios from "axios"

export const fetchDataAction = async (dispatch: any) => {
    try {
        const URL =
    await axios.get("https://api.tvmaze.com/singlesearch/shows?q=the-boondocks&embed=episodes")
    const { data } = URL
    // {console.log(data._embedded.episodes)} 
    return dispatch({
        type: "FETCH_DATA",
        payload: data._embedded.episodes
    })
    } catch (error) {
        console.log('error retreiving data in Actions.ts')
    }
};

export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
  const episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };
  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    };
  }
  return dispatch(dispatchObj);
};
