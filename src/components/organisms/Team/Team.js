import React, { useContext } from 'react';
import { ViewWrapper, Wrapper, NonFound } from './Team.styles';
import { Title } from '../../atoms/Title/Title.styles';
import { PlayerCard } from '../../moleculas/Team/PlayerCard/PlayerCard';
import { FormPlayer } from '../../moleculas/FormPlayer/FormPlayer';
import { TeamContext } from '../../../providers/TeamProvider';

export const Team = ({ state: { post } }) => {
  const { filterPlayers, searchPhrase, getMatchingPlayers } = useContext(TeamContext);
  const matchedPlayers = getMatchingPlayers(post);
  const filtereedPlayers = filterPlayers(post);

  return (
    <ViewWrapper>
      <FormPlayer name="Search" />
      {matchedPlayers.length ? (
        searchPhrase && matchedPlayers.length ? (
          matchedPlayers.map((playerData, id) => <PlayerCard key={id} id={id} playerData={playerData} />)
        ) : (
          Object.keys(filtereedPlayers).map((key) => {
            return (
              <Wrapper key={key}>
                <Title>{key}</Title>
                {filtereedPlayers[key].map((playerData, id) => {
                  return <PlayerCard key={id} id={id} playerData={playerData} />;
                })}
              </Wrapper>
            );
          })
        )
      ) : (
        <NonFound>Non found</NonFound>
      )}
    </ViewWrapper>
  );
};
