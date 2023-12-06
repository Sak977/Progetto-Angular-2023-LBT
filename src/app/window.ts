import { Film } from './models/film';

export {};
declare global {
  interface Window {
    films: Film[];
    currentPage: number;
  }
}
