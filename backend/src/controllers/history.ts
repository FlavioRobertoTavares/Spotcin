import { Router } from 'express';
import History from '../models/history';

const router = Router();

router.get('/history', (req, res) => {
  res.render('history');
});

router.get('/history/songs', async (req, res) => {
  const userId = req.query.userId as string;
  const songsHistory = await History.find({ userId, itemType: 'música' }).sort('-data').exec();
  res.render('songHistory', { songsHistory });
});

router.get('/history/podcasts', async (req, res) => {
  const userId = req.query.userId as string;
  const podcastsHistory = await History.find({ userId, itemType: 'podcast' }).sort('-data').exec();
  res.render('podcastHistory', { podcastsHistory });
});

export default router;
