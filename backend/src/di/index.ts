import OtherRepository from '../repositories/other.repository';
import TestRepository from '../repositories/test.repository';
import TestService from '../services/test.service';
import Injector from './injector';

import PlaylistRepository from '../repositories/playlist.repository';
import PlaylistService from '../services/playlist.service';

import UserRepository from '../repositories/user.repository';
import UserService from '../services/user.service';
import LoginService from '../services/login.service';

export const di = new Injector();

// Test
di.registerRepository(TestRepository, new TestRepository());
di.registerRepository(OtherRepository, new OtherRepository());
di.registerService(
  TestService,
  new TestService(
    di.getRepository(TestRepository),
    di.getRepository(OtherRepository)
  )
);

// Playlist
di.registerRepository(PlaylistRepository, new PlaylistRepository());
di.registerService(PlaylistService, new PlaylistService(di.getRepository(PlaylistRepository)));

// Users
di.registerRepository(UserRepository, new UserRepository());
di.registerService(
  UserService,
  new UserService(
    di.getRepository(UserRepository)
  ));

// Login
di.registerService(
  LoginService,
  new LoginService(di.getRepository(UserRepository)
));
