import { rest } from 'msw';
import { arsenalPlayers } from '../data/arsenalPlayers';

export const handlers = [
  rest.get('/arsenalPlayers', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ arsenalPlayers }));
  }),
];
