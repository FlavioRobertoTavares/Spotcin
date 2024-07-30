import BaseModel from './base.model';

class PlaylistModel extends BaseModel {
  name: string;
  description: string;
  songs: string[];
  categories: string[];
  userId: string;
  
  constructor({
    id,
    name,
    description,
    songs,
    categories,
    userId
  }: {
    id: string;
    name: string;
    description: string;
    songs: string[];
    categories: string[];
    userId: string;
  }) {
    super(id);
    this.name = name;
    this.description = description;
    this.songs = songs;
    this.categories = categories;
    this.userId = userId;
  }
}

export default PlaylistModel;
