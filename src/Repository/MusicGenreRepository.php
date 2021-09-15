<?php

namespace App\Repository;

use App\Entity\MusicGenre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MusicGenre|null find($id, $lockMode = null, $lockVersion = null)
 * @method MusicGenre|null findOneBy(array $criteria, array $orderBy = null)
 * @method MusicGenre[]    findAll()
 * @method MusicGenre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MusicStylesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MusicGenre::class);
    }

}
