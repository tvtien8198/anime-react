import { lazy } from "react";

const VAAnime = lazy(() => import('../components/TopAll/AnimeViewAll'))
const VAManga = lazy(() => import('../components/TopAll/MangaViewAll'))
const VACharacter = lazy(() => import('../components/TopAll/CharacterViewAll'))
const VAPeople = lazy(() => import('../components/TopAll/PeopleViewAll'))
const AnimeDetail = lazy(() => import('../components/Details/AnimeDetail'))
const MangaDetail = lazy(() => import('../components/Details/MangaDetail'))
const CharacterDetail = lazy(() => import('../components/Details/CharacterDetail'))
const Search = lazy(() => import('../components/Search'))

export const routes = [
    {
        path: "/view-anime-all/",
        component: VAAnime,
        title: "Anime"
    },
    {
        path: "/view-manga-all/",
        component: VAManga,
        title: "Manga"
    },
    {
        path: "/view-character-all/",
        component: VACharacter,
        title: "Character"
    },
    {
        path: "/view-people-all/",
        component: VAPeople,
        title: "People"
    },
    {
        path: "/anime/:id",
        component: AnimeDetail,
        title: "Anime"
    },
    {
        path: "/manga/:id",
        component: MangaDetail,
        title: "Anime"
    },
    {
        path: "/character/:id",
        component: CharacterDetail,
        title: "Anime"
    },
    {
        path: "/search/",
        component: Search,
        title: "Anime"
    }
]