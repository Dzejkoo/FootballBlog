import React, { useState } from 'react';

export const TeamContext = React.createContext({
  filterPlayers: () => {},
  getMatchingStudents: () => {},
});

const TeamProvider = ({ children }) => {
  //searching phrase useSate
  const [searchPhrase, setSearchPhrase] = useState('');

  const cases = {
    Goalkeeper: 'Goalkeeper',
    Defender: 'Defender',
    Midfielder: 'Midfielder',
    Forward: 'Forward',
  };

  const getMatchingPlayers = (data) => {
    if (!data) return;
    const matchedPlayers = data.filter((player) => player.name.fullName.toLowerCase().includes(searchPhrase.toLowerCase()));
    return matchedPlayers;
  };

  const filterPlayers = (data) => {
    const goalkeepers = data.filter((player) => player.position === cases.Goalkeeper);
    const defender = data.filter((player) => player.position === cases.Defender);
    const midfielder = data.filter((player) => player.position === cases.Midfielder);
    const forward = data.filter((player) => player.position === cases.Forward);

    return { goalkeepers, defender, midfielder, forward };
  };
  return <TeamContext.Provider value={{ filterPlayers, getMatchingPlayers, searchPhrase, setSearchPhrase }}>{children}</TeamContext.Provider>;
};

export default TeamProvider;
