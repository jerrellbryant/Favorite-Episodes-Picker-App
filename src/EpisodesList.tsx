import React from "react";
import { IEpisode } from "./interfaces";

import { EpisodeBox } from "../styles/AppStyles.js";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <EpisodeBox key={episode.id}>
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </section>
      </EpisodeBox>
    );
  });
}
