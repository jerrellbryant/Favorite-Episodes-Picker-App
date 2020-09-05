/**
 * component imports
 */
import React from "react";
import { Store } from "./Store";
import { IAction, IEpisode } from "./interfaces";
const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

/**
 * styled-components imports
 */
import { EpisodesContainer, EpisodeBox, Header } from "../styles/AppStyles.js";


export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
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

   const props = {
     episodes: state.episodes,
     toggleFavAction,
     favorites: state.favorites,
   };

  return (
    <>
      <Header>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>Favorite(s): {state.favorites.length}</div>
      </Header>
      <React.Suspense fallback={<div>loading...</div>}>
        <EpisodesContainer>
          <EpisodesList {...props} />
        </EpisodesContainer>
      </React.Suspense>
    </>
  );
}
