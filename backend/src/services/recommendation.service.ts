import RecommendationEntity from '../entities/recommendation.entity';
import PlaylistEntity from '../entities/playlist.entity';
import RecommendationRepository from '../repositories/recommendation.repository';

class RecommendationService {
    //private recommendations: RecommendationEntity[];

    //constructor() {
    //this.recommendations = [];
    //}

    private recommendations: RecommendationRepository;

    constructor(recommendations: RecommendationRepository) {
        this.recommendations = recommendations;
    }

    // Method to generate recommended songs based on user's listening history
    async generateRecommendations(userId: string, userHistory: string[]): Promise<PlaylistEntity | string> {
        try {
            const recommendedSongs = userHistory.slice(0, 5); // Recommend first 5 songs

            const recommendation = new RecommendationEntity({
                userId,
                recommendedSongs,
                recommendationHistory: [],
            });

            this.recommendations.add(recommendation);

            return new PlaylistEntity({
                name: 'Recommended songs',
                description: 'Playlist of recommended songs based on your listening history.',
                songs: recommendedSongs,
                categories: ['Recommendations'],
            });
        } catch (error) {
            console.error("Error in getMoreRecommendations:", error);
            return 'An error occurred while processing your request.';
        }
    }


    // Method to get more recommendations
    //async getMoreRecommendations(userId: string, userHistory: string[]): Promise <PlaylistEntity | string> {
    //if (userHistory==null)
    /*return "You didn't listen to enough songs to be recommended new ones."
const recommendedSongs = userHistory.slice(5, 10); // Recommend next 5 songs

const existingRecommendation = this.recommendations.findOne(rec => rec.userId === userId);
if (existingRecommendation) {
    if (typeof existingRecommendation != 'undefined'){
       existingRecommendation as RecommendationEntity
         existingRecommendation.recommendedSongs.push(...recommendedSongs);
    }
}

return new PlaylistEntity({
    name: 'See more recommendations',
    description: 'Additional recommended songs based on your listening history.',
    songs: recommendedSongs,
    categories: ['Recommendations'],
});
}*/

    async getMoreRecommendations(userId: string, userHistory: string[]): Promise<PlaylistEntity | string> {
        try {
            if (!userHistory || userHistory.length < 5) {
                return "You didn't listen to enough songs to be recommended new ones.";
            }

            const recommendedSongs = userHistory.slice(5, 10); // Recommend next 5 songs

            const existingRecommendation = await this.recommendations.getRecommendationByUserId(userId);
            if (existingRecommendation) {
                existingRecommendation.recommendedSongs.push(...recommendedSongs);
                await this.recommendations.updateRecommendationByUserId(existingRecommendation, userId);
            }

            return new PlaylistEntity({
                name: 'See more recommendations',
                description: 'Additional recommended songs based on your listening history.',
                songs: recommendedSongs,
                categories: ['Recommendations'],
            });
        } catch (error) {
            console.error("Error in getMoreRecommendations:", error);
            return 'An error occurred while processing your request.';
        }
    }

    // Method to get recommendation history
    //Retrieves the full history of recommended songs for a user
    async getRecommendationHistory(userId: string): Promise<PlaylistEntity | string > {
        try {
            const existingRecommendation = await this.recommendations.findOne(rec => rec.userId === userId);

            if (existingRecommendation) {
                return new PlaylistEntity({
                    name: 'Recommendation History',
                    description: 'Playlist of all previously recommended songs.',
                    songs: existingRecommendation.recommendationHistory,
                    categories: ['Recommendations'],
                });
            }

            return new PlaylistEntity({
                name: 'Recommendation History',
                description: 'No recommendation history found.',
                songs: [],
                categories: ['Recommendations'],
            });
        } catch (error) {
            console.error("Error in getMoreRecommendations:", error);
            return 'An error occurred while processing your request.';
        }
    }

    // Method to delete a song from recommended songs
    async deleteRecommendedSong(userId: string, songIndex: number): Promise<PlaylistEntity | string> {
        try {
            const existingRecommendation = await this.recommendations.findOne(rec => rec.userId === userId);

            if (existingRecommendation && existingRecommendation.recommendedSongs.length > songIndex) {
                const deletedSong = existingRecommendation.recommendedSongs.splice(songIndex, 1)[0];

                // Update the recommendation in the repository
                this.recommendations.updateRecommendationByUserId(existingRecommendation, userId);

                return new PlaylistEntity({
                    name: 'Recommended songs',
                    description: 'Updated playlist after deleting a recommended song.',
                    songs: existingRecommendation.recommendedSongs,
                    categories: ['Recommendations'],
                });
            }

            return 'Invalid song index or no recommendations found.';
        } catch (error) {
            console.error("Error in deleteRecommendedSong:", error);
            return 'An error occurred while deleting the recommended song.';
        }
    }

    // Method to check if user listened enough songs for recommendations
    checkUserListeningHistory(userId: string, userHistory: string[]): string | null {
        if (userHistory == null || userHistory.length < 5) {
            return "You didn't listen to enough songs to be recommended new ones.";
        }
        return null;
    }
}

export default RecommendationService;










