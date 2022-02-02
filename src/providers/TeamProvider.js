import React, { useState } from 'react';

export const TeamContext = React.createContext({
  filterPlayers: () => {},
  getMatchingStudents: () => {},
});

const TeamProvider = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const cases = {
    Goalkeeper: 'Goalkeeper',
    Defender: 'Defender',
    Midfielder: 'Midfielder',
    Forward: 'Forward',
  };

  const getMatchingPlayers = (data) => {
    const matchedPlayers = data.filter((player) => player.name.fullName.toLowerCase().includes(searchPhrase.toLowerCase()));
    return matchedPlayers;
  };

  const filterPlayers = (dataPlayer) => {
    const goalkeepers = dataPlayer.filter((player) => player.position === cases.Goalkeeper);
    const defender = dataPlayer.filter((player) => player.position === cases.Defender);
    const midfielder = dataPlayer.filter((player) => player.position === cases.Midfielder);
    const forward = dataPlayer.filter((player) => player.position === cases.Forward);

    return { goalkeepers, defender, midfielder, forward };
  };
  return <TeamContext.Provider value={{ filterPlayers, getMatchingPlayers, searchPhrase, setSearchPhrase }}>{children}</TeamContext.Provider>;
};

export default TeamProvider;
