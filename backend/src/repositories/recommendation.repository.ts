import RecommendationEntity from '../entities/recommendation.entity';
import PlaylistEntity from '../entities/playlist.entity';
import { InternalServerError } from '../utils/errors/http.error';
import BaseRepository from './base.repository';
import SongEntity from '../entities/song.entity';
import SongRepository from './song.repository';

class Song {
    id: string;
    name: string;
    artist: string;
    genre?: string;
    tags?: string[];

    constructor({ id, name, artist, genre = '', tags = [] }: Song) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.genre = genre;
        this.tags = tags;
    }
}

class RecommendationRepository extends BaseRepository<RecommendationEntity> {
    constructor() {
        super('recommendations'); // initialize the repository for the 'recommendations' collection/table.
    }

    public songRepository: SongRepository = new SongRepository();
    allSongs=this.songRepository.getAllSongs();

    public async getAllRecommendations(): Promise<RecommendationEntity[]> {
        try {
            return await this.findAll();
        } catch (e) {
            throw new InternalServerError();
        }
    }

    public convertToSongs(songEntities: SongEntity[]): Song[] {
        return songEntities.map((songEntity: SongEntity) => {
            const { id, name, artist, genre, tags } = songEntity;
            return new Song({ id, name, artist, genre, tags });
        });
    }

    //convSongs = this.convertToSongs(this.allSongs);

    public async getRecommendedSongs(listenedSongs: Song[]): Promise<Song[]> {
        try {
            const recommendedSongs: Song[] = [];
            for (const song of listenedSongs) {
                const genre = song.genre;
                const tags = song.tags;
                //const filteredSongs = this.allSongs.filter((s: Song) => s.genre === genre && this.areTagsSimilar(s.tags, tags));
                const filteredSongs = [{ id: '1', name: 'Song1', artist: 'artist'}] //RESEE THIS
                recommendedSongs.push(...filteredSongs.slice(0, 5));
            }
            return recommendedSongs;
        } catch (e) {
            throw new InternalServerError();
        }
    }

    private areTagsSimilar(tags1: string[], tags2: string[]): boolean {
        // Implement your logic to determine if the tags are similar
        // For example, you can check if they have at least one common tag
        return tags1.some(tag => tags2.includes(tag));
    }

    public async getRecommendationByUserId(userId: string): Promise<RecommendationEntity | undefined> {
        try {
            const recommendations = await this.findAll();
            const songs = recommendations.flatMap(rec => rec.recommendedSongs);
            //return songs;
            return recommendations.find(rec => rec.userId === userId); //RESEE THIS
        } catch (e) {
            throw new InternalServerError();
        }
    }

    public async deleteRecommendationByUserId(userId: string): Promise<void> {
        try {
            const recommendation = await this.getRecommendationByUserId(userId);
            if (recommendation) {
                await this.delete(rec => rec.userId === userId);
            }
        } catch (e) {
            throw new InternalServerError();
        }
    }

    public async updateRecommendationByUserId(newRecommendation: RecommendationEntity, userId: string): Promise<RecommendationEntity | undefined> {
        try {
            const existingRecommendation = await this.getRecommendationByUserId(userId);
            if (existingRecommendation) {
                const updatedRecommendation = {
                    ...existingRecommendation,
                    ...newRecommendation,
                };
                return await this.update(rec => rec.userId === userId, updatedRecommendation) || undefined;
            }
            return undefined;
        } catch (e) {
            throw new InternalServerError();
        }
    }

    //Checks if a recommendation exists for a user and either updates or creates a new recommendation.
    public async createOrUpdateRecommendation(newRecommendation: RecommendationEntity): Promise<RecommendationEntity | undefined> {
        try {
            const existingRecommendation = await this.getRecommendationByUserId(newRecommendation.userId);
            if (existingRecommendation) {
                return await this.updateRecommendationByUserId(newRecommendation, newRecommendation.userId);
            } else {
                return await this.add(newRecommendation);
            }
        } catch (e) {
            throw new InternalServerError();
        }
    }

    public async deleteSongFromRecommendation(userId: string, song: Song): Promise<void> {
        try {
            const recommendation = await this.getRecommendationByUserId(userId);
            if (recommendation) {
                const updatedSongs = recommendation.recommendedSongs.filter(songObj => songObj.name !== song.name);
                const updatedRecommendation = {
                    ...recommendation,
                    recommendedSongs: updatedSongs,
                };
                await this.updateRecommendationByUserId(updatedRecommendation, userId);
            }
        } catch (e) {
            throw new InternalServerError();
        }
    }

    public async addSongToRecommendation(userId: string, song: Song): Promise<void> {
        try {
            const recommendation = await this.getRecommendationByUserId(userId);
            if (recommendation) {
                const updatedSongs = [...recommendation.recommendedSongs, song];
                const updatedRecommendation = {
                    ...recommendation,
                    recommendedSongs: updatedSongs,
                };
                //await this.updateRecommendationByUserId(updatedRecommendation, userId); RESEE THIS
            }
        } catch (e) {
            throw new InternalServerError();
        }
    }
}

export default RecommendationRepository;
