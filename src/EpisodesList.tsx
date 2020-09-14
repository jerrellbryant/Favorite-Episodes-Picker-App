import React from "react";
import { IEpisode } from "./interfaces";

/**
 * styled-components imports
 */
import { EpisodeBox, Button } from "./styles/AppStyles";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites, store } = props;
  const {state, dispatch} = store
  // console.log(state)
  return episodes.map((episode: IEpisode) => {
    return (
      <EpisodeBox key={episode.id}>
        {episode.image.medium === null ? (
          null
        ) : (
          <img
            src={episode.image.medium}
            alt={`The Boondocks ${episode.name}`}
          />
        )}
        {/* {console.log (episode.image.medium === null ? "null" : "")} */}
        <div style={{fontSize: "1rem"}}>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{fontSize: "1rem"}}>
            Season: {episode.season} Number: {episode.number}
          </div>
          <Button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </Button>
        </section>
      </EpisodeBox>
    );
  });
}
