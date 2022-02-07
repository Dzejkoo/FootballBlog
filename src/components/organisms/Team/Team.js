import React, { useContext } from 'react';
import { ViewWrapper, Wrapper, LoadingWrapper } from './Team.styles';
import { Title } from '../../atoms/Title/Title.styles';
import { PlayerCard } from '../../moleculas/PlayerCard/PlayerCard';
import { FormPlayer } from '../../moleculas/FormPlayer/FormPlayer';
import { TeamContext } from '../../../providers/TeamProvider';
import Spinner from '../../atoms/Spinner/Spinner';

export const Team = ({ state: { post, loading } }) => {
  const { filterPlayers, searchPhrase, getMatchingPlayers } = useContext(TeamContext);
  const matchedPlayers = getMatchingPlayers();
  const filtereedPlayers = filterPlayers();

  console.log(matchedPlayers, filtereedPlayers);

  return (
    <ViewWrapper>
      <FormPlayer name="Search" />
      {searchPhrase && matchedPlayers.length
        ? matchedPlayers.map((playerData) => <PlayerCard playerData={playerData} />)
        : Object.keys(filtereedPlayers).map((key) => {
            return (
              <Wrapper key={key}>
                <Title>{key}</Title>
                {filtereedPlayers[key].map((playerData) => {
                  return <PlayerCard key={playerData.id} playerData={playerData} />;
                })}
              </Wrapper>
            );
          })}
    </ViewWrapper>
  );
};
