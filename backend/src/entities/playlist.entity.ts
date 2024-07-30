import BaseEntity from './base.entity';

class PlaylistEntity extends BaseEntity {
    name: string;
    description: string;
    songs: string[];
    categories: string[];
    userId: string;

    constructor(data: Partial<PlaylistEntity>) {
        super(data.id || '');
        this.name = data.name || '';
        this.description = data.description || '';
        this.songs = data.songs || [];
        this.categories = data.categories || [];   
        this.userId = data.userId || '';
    }

}

export default PlaylistEntity;


