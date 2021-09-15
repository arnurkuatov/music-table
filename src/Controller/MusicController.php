<?php

namespace App\Controller;

use App\Entity\Music;
use App\Repository\MusicRepository;
use App\Repository\MusicGenresRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function PHPUnit\Framework\classHasStaticAttribute;

/**
 * @Route("/api/music", name="music")
 */
class MusicController extends AbstractController
{
    private $entityManager;
    private $musicRepository;
    private $musicGenresRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        MusicRepository $musicRepository,
        MusicGenreRepository $musicGenresRepository
    )
    {

        $this->entityManager = $entityManager;
        $this->musicRepository = $musicRepository;
        $this->musicGenresRepository = $musicGenresRepository;
    }

    /**
     * @Route("/", name="music")
     */
    public function index(): Response
    {
        $musicList = $this->musicRepository->findAll();
        $musicGenres = $this->musicGenresRepository->findAll();

        $arrayOfMusicGenres = [];
        foreach ($musicGenres as $genre) {
            $arrayOfMusicGenres[] = $genre->toArray();
        }

        $arrayOfMusic = [];
        foreach ($musicList as $music) {
            $arrayOfMusic[] = $music->toArray($arrayOfMusicGenres);
        }

        return $this->json($arrayOfMusic);
    }

    /**
     * @Route("/genres", name="music_genres")
     */
    public function genres(): Response
    {
        $musicGenres = $this->musicGenresRepository->findAll();

        $arrayOfMusicGenres = [];
        foreach ($musicGenres as $genre) {
            $arrayOfMusicGenres[] = $genre->toArray();
        }

        return $this->json($arrayOfMusicGenres);
    }

    /**
     * @Route("/create", name="create_song")
     * @param Request $request
     */
    public function create(Request $request): Response
    {
        $musicGenres = $this->musicGenresRepository->findAll();
        $arrayOfMusicGenres = [];
        foreach ($musicGenres as $genre) {
            $arrayOfMusicGenres[] = $genre->toArray();
        }

        $content = json_decode($request->getContent());

        $song = new Music();
        $song->setArtist($content->artist);
        $song->setSong($content->song);
        $song->seGenreId($content->genreId);
        $song->setYear($content->year);

        try {
            $this->entityManager->persist($song);
            $this->entityManager->flush();
            return $this->json([
                'song' => $song->toArray($arrayOfMusicGenres),
            ]);
        } catch (\Exception $exception) {
            //error
        }
    }
}
