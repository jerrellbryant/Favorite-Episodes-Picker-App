import React from 'react'
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

/**
 * styled-components imports
 */
import { EpisodesContainer } from "./styles/AppStyles";

/**
 * import using lazy and suspense
 */
const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));


export default function Home() {
      const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
      state.episodes.length === 0 && fetchDataAction(dispatch);
    });

     const props: IEpisodeProps = {
       episodes: state.episodes,
       store: {state, dispatch},
       toggleFavAction,
       favorites: state.favorites,
     };

    return (
      <div>
        <React.Suspense fallback={<div>loading...</div>}>
            <EpisodesContainer>
              <EpisodesList {...props} />
            </EpisodesContainer>
        </React.Suspense>
      </div>
    );
}
