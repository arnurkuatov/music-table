import {makeAutoObservable} from 'mobx';

class MusicGenres {
    genres = [];

    constructor() {
        makeAutoObservable(this);
    }

    setMusicGenres(list) {
        this.genres = list;
    }
}

export default new MusicGenres();