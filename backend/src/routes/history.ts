import { Router } from 'express';
import historyService from '../services/historyService';

const router = Router();

router.get('/history', (req, res) => {
  res.render('history');
});

router.get('/history/songs', async (req, res) => {
  const userId = req.query.userId as string;
  try {
    const songsHistory = await historyService.getSongHistory(userId);
    res.render('songHistory', { songsHistory });
  } catch (error) {
    res.status(500).send('Error fetching song history');
  }
});

router.get('/history/podcasts', async (req, res) => {
  const userId = req.query.userId as string;
  try {
    const podcastsHistory = await historyService.getPodcastHistory(userId);
    res.render('podcastHistory', { podcastsHistory });
  } catch (error) {
    res.status(500).send('Error fetching podcast history');
  }
});

export default router;
