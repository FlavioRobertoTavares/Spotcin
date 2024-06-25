import History from '../models/history';

class HistoryService {
  public async getSongHistory(userId: string) {
    try {
      const songHistory = await History.find({ userId, itemType: 'song' }).sort('-data').exec();
      return songHistory;
    } catch (error) {
      console.error('Error fetching song history:', error);
      throw new Error('Could not fetch song history');
    }
  }

  public async getPodcastHistory(userId: string) {
    try {
      const podcastHistory = await History.find({ userId, itemType: 'podcast' }).sort('-data').exec();
      return podcastHistory;
    } catch (error) {
      console.error('Error fetching podcast history:', error);
      throw new Error('Could not fetch podcast history');
    }
  }

  public async addHistoryEntry(userId: string, itemType: 'song' | 'podcast', itemId: string) {
    try {
      const newHistory = new History({
        userId,
        itemType,
        itemId,
      });
      await newHistory.save();
      return newHistory;
    } catch (error) {
      console.error('Error adding history entry:', error);
      throw new Error('Could not add history entry');
    }
  }
}

export default new HistoryService();
