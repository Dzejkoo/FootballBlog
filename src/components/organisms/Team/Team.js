import React, { useState, useContext } from 'react';
import { ViewWrapper, Wrapper } from './Team.styles';
import { Title } from '../../atoms/Title/Title.styles';
import { PlayerCard } from '../../moleculas/PlayerCard/PlayerCard';
import { FormPlayer } from '../../moleculas/FormPlayer/FormPlayer';
import { TeamContext } from '../../../providers/TeamProvider';

const initialFormValue = {
  search: '',
};

export const Team = ({ state: { post } }) => {
  const { filterPlayers } = useContext(TeamContext);
  const filtereedPlayers = filterPlayers(post);

  const [formValue, setValue] = useState(initialFormValue);

  const handleInputChange = (e) => {
    e.preventDefault();

    setValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ViewWrapper>
      <FormPlayer onChange={handleInputChange} value={formValue.search} onSubmit={handleSubmit} />
      {Object.keys(filtereedPlayers).map((key) => {
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
