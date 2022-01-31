import React, { useState } from 'react';
import { ViewWrapper, Wrapper } from './Team.styles';
import { Title } from '../../atoms/Title/Title';
import { PlayerCard } from '../../moleculas/PlayerCard/PlayerCard';
import { FormPlayer } from '../../moleculas/FormPlayer/FormPlayer';

const cases = {
  Goalkeeper: 'Goalkeeper',
  Defender: 'Defender',
  Midfielder: 'Midfielder',
  Forward: 'Forward',
};

const initialFormValue = {
  search: '',
};

const filterPlayers = (dataPlayer) => {
  const goalkeepers = dataPlayer.filter((player) => player.position === cases.Goalkeeper);
  const defender = dataPlayer.filter((player) => player.position === cases.Defender);
  const midfielder = dataPlayer.filter((player) => player.position === cases.Midfielder);
  const forward = dataPlayer.filter((player) => player.position === cases.Forward);

  return { goalkeepers, defender, midfielder, forward };
};

export const Team = ({ state: { post } }) => {
  const [formValue, setValue] = useState(initialFormValue);

  const filtereedPlayers = filterPlayers(post);

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
