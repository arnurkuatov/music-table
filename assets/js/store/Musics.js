import {makeAutoObservable} from 'mobx';

class Musics {
    music = [];
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    setMusicList(list) {
        this.music = list;
        this.loading = false;
    }
}

export default new Musics();