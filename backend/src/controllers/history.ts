import { Router } from 'express';
import History from '../models/History';

const router = Router();

// History Page
router.get('/history', (req, res) => {
  res.render('history');
});

// View Song History
router.get('/history/songs', async (req, res) => {
  const userId = req.query.userId as string;
  const songsHistory = await History.find({ userId, itemType: 'song' }).sort('-listenedAt').exec();
  res.render('songHistory', { songsHistory });
});

// View Podcast History
router.get('/history/podcasts', async (req, res) => {
  const userId = req.query.userId as string;
  const podcastsHistory = await History.find({ userId, itemType: 'podcast' }).sort('-listenedAt').exec();
  res.render('podcastHistory', { podcastsHistory });
});

export default router;
