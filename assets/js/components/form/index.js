import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {Musics, MusicGenres} from "../../store/Store";
import CreateFormView from "./view";
import {observer} from "mobx-react";

const CreateForm = () => {
    const history = useHistory();
    const [song, setSong] = useState({
        artist: '',
        song: '',
        genreId: '',
        year: '',
    });

    useEffect(() => {
        const songFromStorage = localStorage.getItem('NewSong');
        if (songFromStorage) {
            setSong(JSON.parse(songFromStorage));
        }
    }, []);

    useEffect(() => {
        axios.get('/api/music/genres')
            .then(res => MusicGenres.setMusicGenres(res.data))
            .catch(err => console.error(err))
    }, []);

    const handleInputChange = e => {
        setSong({
            ...song,
            [e.target.name]: e.target.name === 'genreId' ? Number(e.target.value) : e.target.value,
        })
    }

    useEffect(() => {
        localStorage.setItem('NewSong', JSON.stringify(song));
    }, [song])

    const createSong = e => {
        e.preventDefault();
        axios.post('api/music/create', song)
            .then(res => {
                let data = [...Musics.music];
                data.push(res.data.song);
                Musics.setMusicList(data);
                localStorage.removeItem('NewSong');
                setSong({
                    artist: '',
                    song: '',
                    genreId: '',
                    year: '',
                });
                history.push('/');
            })
            .catch(err => console.error(err))
    }

    return <CreateFormView createSong={createSong} song={song} handleInputChange={handleInputChange}/>;
};

export default observer(CreateForm);