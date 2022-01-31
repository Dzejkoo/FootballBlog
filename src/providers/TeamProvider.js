import React from 'react';

export const TeamContext = React.createContext({
  filterPlayers: () => {},
});

const TeamProvider = ({ children }) => {
  const cases = {
    Goalkeeper: 'Goalkeeper',
    Defender: 'Defender',
    Midfielder: 'Midfielder',
    Forward: 'Forward',
  };

  const filterPlayers = (dataPlayer) => {
    const goalkeepers = dataPlayer.filter((player) => player.position === cases.Goalkeeper);
    const defender = dataPlayer.filter((player) => player.position === cases.Defender);
    const midfielder = dataPlayer.filter((player) => player.position === cases.Midfielder);
    const forward = dataPlayer.filter((player) => player.position === cases.Forward);

    return { goalkeepers, defender, midfielder, forward };
  };
  return <TeamContext.Provider value={{ filterPlayers }}>{children}</TeamContext.Provider>;
};

export default TeamProvider;
