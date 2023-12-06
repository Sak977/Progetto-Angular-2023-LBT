export interface AcquistoFilm {
  id: number;
  userId: number;
  title: string;
  price: string;
  pathFilm: string;
  description: string;
  qta: number;
}

export class AcquistoFilmPost {
  constructor(
    public userId: number,
    public title: string,
    public pathFilm: string,
    public description: string,
    public price: string = '12',
    public qta: number = 1
  ) {}
}
