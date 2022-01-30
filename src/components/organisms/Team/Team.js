import React, { useState } from 'react';
import { ViewWrapper, Wrapper, PositionTitle } from './Team.styles';
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

export const Team = ({ state: { post } }) => {
  const [formValue, setValue] = useState(initialFormValue);

  const goalkeepers = post.filter((player) => player.position === cases.Goalkeeper);
  const defender = post.filter((player) => player.position === cases.Defender);
  const midfielder = post.filter((player) => player.position === cases.Midfielder);
  const forward = post.filter((player) => player.position === cases.Forward);

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
      <Wrapper>
        <PositionTitle>{cases.Goalkeeper}</PositionTitle>
        {goalkeepers.map((playerData, i) => (
          <PlayerCard playerData={playerData} key={i} />
        ))}
      </Wrapper>
      <Wrapper>
        <PositionTitle>{cases.Defender}</PositionTitle>
        {defender.map((playerData, i) => (
          <PlayerCard playerData={playerData} key={i} />
        ))}
      </Wrapper>
      <Wrapper>
        <PositionTitle>{cases.Midfielder}</PositionTitle>
        {midfielder.map((playerData, i) => (
          <PlayerCard playerData={playerData} key={i} />
        ))}
      </Wrapper>
      <Wrapper>
        <PositionTitle>{cases.Forward}</PositionTitle>
        {forward.map((playerData, i) => (
          <PlayerCard playerData={playerData} key={i} />
        ))}
      </Wrapper>
    </ViewWrapper>
  );
};
