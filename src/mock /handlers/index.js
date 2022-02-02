import { rest } from 'msw';
import { arsenalPlayers } from '../data/arsenalPlayers';

export const handlers = [
  rest.get('/arsenalPlayers', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ arsenalPlayers }));
  }),
  rest.post('/arsenalPlayers/search', (req, res, ctx) => {
    const matchingPlayers = req.body.searchPhrase
      ? arsenalPlayers.filter((player) => player.name.toLowerCase().includes(req.body.searchPhrase.toLowerCase()))
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        players: matchingPlayers,
      })
    );
  }),
];
