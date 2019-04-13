import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import AppLoader from '../components/AppLoader';
import store from '../.storybook/store'


const movies = [
  {
    vote_count: 2014,
    id: 19404,
    video: false,
    vote_average: 9,
    title: 'Dilwale Dulhania Le Jayenge',
    popularity: 18.88,
    poster_path: '/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg',
    original_language: 'hi',
    original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
    genre_ids: [
      35,
      18,
      10749
    ],
    backdrop_path: '/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg',
    adult: false,
    overview: 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
    release_date: '1995-10-20'
  },
  {
    vote_count: 12566,
    id: 278,
    video: false,
    vote_average: 8.7,
    title: 'The Shawshank Redemption',
    popularity: 32.423,
    poster_path: '/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    genre_ids: [
      18,
      80
    ],
    backdrop_path: '/j9XKiZrVeViAixVRzCta7h1VU9W.jpg',
    adult: false,
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    release_date: '1994-09-23'
  },
  {
    vote_count: 9619,
    id: 238,
    video: false,
    vote_average: 8.6,
    title: 'The Godfather',
    popularity: 30.257,
    poster_path: '/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    original_language: 'en',
    original_title: 'The Godfather',
    genre_ids: [
      18,
      80
    ],
    backdrop_path: '/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg',
    adult: false,
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    release_date: '1972-03-14'
  },
  {
    vote_count: 3818,
    id: 372058,
    video: false,
    vote_average: 8.6,
    title: 'Your Name.',
    popularity: 22.23,
    poster_path: '/xq1Ugd62d23K2knRUx6xxuALTZB.jpg',
    original_language: 'ja',
    original_title: '君の名は。',
    genre_ids: [
      10749,
      16,
      18
    ],
    backdrop_path: '/7OMAfDJikBxItZBIug0NJig5DHD.jpg',
    adult: false,
    overview: 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
    release_date: '2016-08-26'
  },
  {
    vote_count: 7619,
    id: 424,
    video: false,
    vote_average: 8.5,
    title: 'Schindler\'s List',
    popularity: 26.265,
    poster_path: '/yPisjyLweCl1tbgwgtzBCNCBle.jpg',
    original_language: 'en',
    original_title: 'Schindler\'s List',
    genre_ids: [
      18,
      36,
      10752
    ],
    backdrop_path: '/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg',
    adult: false,
    overview: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
    release_date: '1993-12-15'
  },
  {
    vote_count: 5610,
    id: 240,
    video: false,
    vote_average: 8.5,
    title: 'The Godfather: Part II',
    popularity: 22.893,
    poster_path: '/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg',
    original_language: 'en',
    original_title: 'The Godfather: Part II',
    genre_ids: [
      18,
      80
    ],
    backdrop_path: '/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg',
    adult: false,
    overview: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
    release_date: '1974-12-20'
  },
  {
    vote_count: 7068,
    id: 129,
    video: false,
    vote_average: 8.5,
    title: 'Spirited Away',
    popularity: 26.943,
    poster_path: '/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg',
    original_language: 'ja',
    original_title: '千と千尋の神隠し',
    genre_ids: [
      16,
      10751,
      14
    ],
    backdrop_path: '/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg',
    adult: false,
    overview: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    release_date: '2001-07-20'
  },
  {
    vote_count: 2804,
    id: 324857,
    video: false,
    vote_average: 8.5,
    title: 'Spider-Man: Into the Spider-Verse',
    popularity: 177.654,
    poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    original_language: 'en',
    original_title: 'Spider-Man: Into the Spider-Verse',
    genre_ids: [
      28,
      12,
      16,
      878,
      35
    ],
    backdrop_path: '/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg',
    adult: false,
    overview: 'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
    release_date: '2018-12-07'
  },
  {
    vote_count: 7859,
    id: 497,
    video: false,
    vote_average: 8.5,
    title: 'The Green Mile',
    popularity: 25.13,
    poster_path: '/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg',
    original_language: 'en',
    original_title: 'The Green Mile',
    genre_ids: [
      14,
      18,
      80
    ],
    backdrop_path: '/Rlt20sEbOQKPVjia7lUilFm49W.jpg',
    adult: false,
    overview: 'A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people\'s ailments. When the cell block\'s head guard, Paul Edgecomb, recognizes Coffey\'s miraculous gift, he tries desperately to help stave off the condemned man\'s execution.',
    release_date: '1999-12-10'
  },
  {
    vote_count: 6926,
    id: 637,
    video: false,
    vote_average: 8.4,
    title: 'Life Is Beautiful',
    popularity: 18.171,
    poster_path: '/f7DImXDebOs148U4uPjI61iDvaK.jpg',
    original_language: 'it',
    original_title: 'La vita è bella',
    genre_ids: [
      35,
      18
    ],
    backdrop_path: '/bORe0eI72D874TMawOOFvqWS6Xe.jpg',
    adult: false,
    overview: 'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.',
    release_date: '1997-12-20'
  },
  {
    vote_count: 14564,
    id: 680,
    video: false,
    vote_average: 8.4,
    title: 'Pulp Fiction',
    popularity: 30.195,
    poster_path: '/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
    original_language: 'en',
    original_title: 'Pulp Fiction',
    genre_ids: [
      53,
      80
    ],
    backdrop_path: '/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg',
    adult: false,
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
    release_date: '1994-09-10'
  },
  {
    vote_count: 405,
    id: 40096,
    video: false,
    vote_average: 8.4,
    title: 'A Dog\'s Will',
    popularity: 8.249,
    poster_path: '/uHEmM49YphluJnGep8Ef1qwD2QX.jpg',
    original_language: 'pt',
    original_title: 'O Auto da Compadecida',
    genre_ids: [
      12,
      35
    ],
    backdrop_path: '/alQqTpmEkxSLgajfEYTsTH6nAKB.jpg',
    adult: false,
    overview: 'The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small Northeast Brazil town. But when they die, they have to be judged by Christ, the Devil and the Virgin Mary, before they are admitted to paradise.',
    release_date: '2000-09-15'
  },
  {
    vote_count: 18242,
    id: 155,
    video: false,
    vote_average: 8.4,
    title: 'The Dark Knight',
    popularity: 43.134,
    poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
    original_language: 'en',
    original_title: 'The Dark Knight',
    genre_ids: [
      18,
      28,
      80,
      53
    ],
    backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
    adult: false,
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    release_date: '2008-07-16'
  },
  {
    vote_count: 4657,
    id: 539,
    video: false,
    vote_average: 8.4,
    title: 'Psycho',
    popularity: 24.045,
    poster_path: '/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
    original_language: 'es',
    original_title: 'Psycho',
    genre_ids: [
      27
    ],
    backdrop_path: '/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg',
    adult: false,
    overview: 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.',
    release_date: '1960-06-16'
  },
  {
    vote_count: 15678,
    id: 550,
    video: false,
    vote_average: 8.4,
    title: 'Fight Club',
    popularity: 30.829,
    poster_path: '/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
    original_language: 'en',
    original_title: 'Fight Club',
    genre_ids: [
      18
    ],
    backdrop_path: '/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
    adult: false,
    overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    release_date: '1999-10-15'
  },
  {
    vote_count: 182,
    id: 517814,
    video: false,
    vote_average: 8.4,
    title: 'Capernaum',
    popularity: 27.239,
    poster_path: '/dQWfLmt9aU6Xe6yNPmEZJoLOPxX.jpg',
    original_language: 'ar',
    original_title: 'کفرناحوم',
    genre_ids: [
      18
    ],
    backdrop_path: '/8e0ETQmrgcP6R8TaVjd7o9NCGj9.jpg',
    adult: false,
    overview: 'Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.',
    release_date: '2018-10-06'
  },
  {
    vote_count: 14103,
    id: 13,
    video: false,
    vote_average: 8.4,
    title: 'Forrest Gump',
    popularity: 33.346,
    poster_path: '/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg',
    original_language: 'en',
    original_title: 'Forrest Gump',
    genre_ids: [
      35,
      18,
      10749
    ],
    backdrop_path: '/wMgbnUVS9wbRGAdki8fqxKU1O0N.jpg',
    adult: false,
    overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
    release_date: '1994-07-06'
  },
  {
    vote_count: 3563,
    id: 389,
    video: false,
    vote_average: 8.4,
    title: '12 Angry Men',
    popularity: 14.93,
    poster_path: '/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg',
    original_language: 'en',
    original_title: '12 Angry Men',
    genre_ids: [
      18
    ],
    backdrop_path: '/lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg',
    adult: false,
    overview: 'The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors\' prejudices and preconceptions about the trial, the accused, and each other.',
    release_date: '1957-03-25'
  },
  {
    vote_count: 1920,
    id: 12477,
    video: false,
    vote_average: 8.4,
    title: 'Grave of the Fireflies',
    popularity: 0.6,
    poster_path: '/4u1vptE8aXuzb5zauZTmikyectV.jpg',
    original_language: 'ja',
    original_title: '火垂るの墓',
    genre_ids: [
      16,
      18,
      10752
    ],
    backdrop_path: '/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg',
    adult: false,
    overview: 'In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.',
    release_date: '1988-04-16'
  },
  {
    vote_count: 12656,
    id: 122,
    video: false,
    vote_average: 8.4,
    title: 'The Lord of the Rings: The Return of the King',
    popularity: 40.444,
    poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    original_language: 'en',
    original_title: 'The Lord of the Rings: The Return of the King',
    genre_ids: [
      12,
      14,
      28
    ],
    backdrop_path: '/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg',
    adult: false,
    overview: 'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron\'s forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord\'s realm.',
    release_date: '2003-12-01'
  }
];
const tv = [
  {
    original_name: 'I Am Not an Animal',
    genre_ids: [
      16,
      35
    ],
    name: 'I Am Not an Animal',
    popularity: 9.269,
    origin_country: [
      'GB'
    ],
    vote_count: 232,
    first_air_date: '2004-05-10',
    backdrop_path: '/o8Site0BMZ8xhknKJ0m52iLfqHg.jpg',
    original_language: 'en',
    id: 100,
    vote_average: 9.6,
    overview: 'I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.',
    poster_path: '/nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg'
  },
  {
    original_name: 'Rick and Morty',
    genre_ids: [
      16,
      35,
      10759,
      10765
    ],
    name: 'Rick and Morty',
    popularity: 80.576,
    origin_country: [
      'US'
    ],
    vote_count: 1153,
    first_air_date: '2013-12-02',
    backdrop_path: '/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg',
    original_language: 'en',
    id: 60625,
    vote_average: 8.5,
    overview: 'Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty\'s already unstable family life, these events cause Morty much distress at home and school.',
    poster_path: '/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg'
  },
  {
    original_name: 'Breaking Bad',
    genre_ids: [
      18
    ],
    name: 'Breaking Bad',
    popularity: 76.931,
    origin_country: [
      'US'
    ],
    vote_count: 3155,
    first_air_date: '2008-01-20',
    backdrop_path: '/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg',
    original_language: 'en',
    id: 1396,
    vote_average: 8.4,
    overview: 'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family\'s financial future at any cost as he enters the dangerous world of drugs and crime.',
    poster_path: '/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg'
  },
  {
    original_name: 'Sherlock',
    genre_ids: [
      80,
      18,
      9648
    ],
    name: 'Sherlock',
    popularity: 42.083,
    origin_country: [
      'GB'
    ],
    vote_count: 1644,
    first_air_date: '2010-07-25',
    backdrop_path: '/bvS50jBZXtglmLu72EAt5KgJBrL.jpg',
    original_language: 'en',
    id: 19885,
    vote_average: 8.3,
    overview: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    poster_path: '/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg'
  },
  {
    original_name: 'Planet Earth II',
    genre_ids: [
      99,
      10751
    ],
    name: 'Planet Earth II',
    popularity: 17.299,
    origin_country: [
      'GB'
    ],
    vote_count: 298,
    first_air_date: '2016-11-06',
    backdrop_path: '/xIt4DDYipMPNu2HDBrhUS4ndSYb.jpg',
    original_language: 'en',
    id: 68595,
    vote_average: 8.3,
    overview: 'David Attenborough presents a documentary series exploring how animals meet the challenges of surviving in the most iconic habitats on earth.',
    poster_path: '/uy5QoTu8fc6fGXMCTMbpQJFUEB0.jpg'
  },
  {
    original_name: 'Stranger Things',
    genre_ids: [
      18,
      9648,
      10765
    ],
    name: 'Stranger Things',
    popularity: 63.912,
    origin_country: [
      'US'
    ],
    vote_count: 2139,
    first_air_date: '2016-07-15',
    backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    original_language: 'en',
    id: 66732,
    vote_average: 8.3,
    overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    poster_path: '/vNJ95BMCzIBJZhW0IEoxzOoW53P.jpg'
  },
  {
    original_name: 'The Wire',
    genre_ids: [
      80,
      18
    ],
    name: 'The Wire',
    popularity: 26.544,
    origin_country: [
      'US'
    ],
    vote_count: 780,
    first_air_date: '2002-06-02',
    backdrop_path: '/4hWfYN3wiOZZXC7t6B70BF9iUvk.jpg',
    original_language: 'en',
    id: 1438,
    vote_average: 8.3,
    overview: 'Told from the points of view of both the Baltimore homicide and narcotics detectives and their targets, the series captures a universe in which the national war on drugs has become a permanent, self-sustaining bureaucracy, and distinctions between good and evil are routinely obliterated.',
    poster_path: '/dg7NuKDjmS6OzuNy33qt8kSkPA1.jpg'
  },
  {
    original_name: 'Planet Earth',
    genre_ids: [
      99
    ],
    name: 'Planet Earth',
    popularity: 13.282,
    origin_country: [
      'GB'
    ],
    vote_count: 466,
    first_air_date: '2006-03-05',
    backdrop_path: '/4AJnC8L5CXdqb6tMeUBL5jdHfuG.jpg',
    original_language: 'en',
    id: 1044,
    vote_average: 8.3,
    overview: 'David Attenborough celebrates the amazing variety of the natural world in this epic documentary series, filmed over four years across 64 different countries.',
    poster_path: '/tI5hLHgrfOTOhPjX22vlo9YsdgE.jpg'
  },
  {
    original_name: 'Over the Garden Wall',
    genre_ids: [
      16,
      35,
      9648,
      10751,
      10765
    ],
    name: 'Over the Garden Wall',
    popularity: 11.416,
    origin_country: [
      'US'
    ],
    vote_count: 180,
    first_air_date: '2014-11-03',
    backdrop_path: '/7vWXXOfsFiopxyuE1U303aej0fT.jpg',
    original_language: 'en',
    id: 61617,
    vote_average: 8.3,
    overview: 'Two brothers, Wirt and Greg, find themselves lost in the Unknown; a strange forest adrift in time. With the help of a wise old Woodsman and a foul-tempered bluebird named Beatrice, Wirt and Greg must travel across this strange land, in hope of finding their way home. Join them as they encounter surprises and obstacles on their journey through the wood.',
    poster_path: '/2kcGFbt768xAiqvj748FFlO9Gvl.jpg'
  },
  {
    original_name: 'Fargo',
    genre_ids: [
      80,
      18
    ],
    name: 'Fargo',
    popularity: 28.909,
    origin_country: [
      'US'
    ],
    vote_count: 971,
    first_air_date: '2014-04-15',
    backdrop_path: '/qq1S5EjaaUrQAcMsn6raNFXpzHk.jpg',
    original_language: 'en',
    id: 60622,
    vote_average: 8.3,
    overview: 'A close-knit anthology series dealing with stories involving malice, violence and murder based in and around Minnesota.',
    poster_path: '/e890UetS6XH7kqltlZ8VU6qDaHU.jpg'
  },
  {
    original_name: 'Peaky Blinders',
    genre_ids: [
      80,
      18
    ],
    name: 'Peaky Blinders',
    popularity: 32.923,
    origin_country: [
      'GB'
    ],
    vote_count: 449,
    first_air_date: '2013-09-12',
    backdrop_path: '/inPxrxF5qBQ2H5dyjcMzibX5JA6.jpg',
    original_language: 'en',
    id: 60574,
    vote_average: 8.3,
    overview: 'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.',
    poster_path: '/jeWoeUQyHdxGFNZCrzbOUP78FiZ.jpg'
  },
  {
    original_name: 'Gravity Falls',
    genre_ids: [
      16,
      35,
      9648,
      10765
    ],
    name: 'Gravity Falls',
    popularity: 32.732,
    origin_country: [
      'US'
    ],
    vote_count: 234,
    first_air_date: '2012-06-15',
    backdrop_path: '/sJjrJWsOCUUeVMexxANNC6s3dWV.jpg',
    original_language: 'en',
    id: 40075,
    vote_average: 8.2,
    overview: 'Twin brother and sister Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer helping their great uncle Stan run a tourist trap in the mysterious town of Gravity Falls, Oregon.',
    poster_path: '/oGsgxjeZ9rd20eCJsGSMGgWvl4P.jpg'
  },
  {
    original_name: 'Avatar: The Last Airbender',
    genre_ids: [
      28,
      12,
      16,
      14
    ],
    name: 'Avatar: The Last Airbender',
    popularity: 22.186,
    origin_country: [
      'US'
    ],
    vote_count: 439,
    first_air_date: '2005-02-21',
    backdrop_path: '/732azfQ0xUAJNQ48pPfVtCCLVlZ.jpg',
    original_language: 'en',
    id: 246,
    vote_average: 8.3,
    overview: 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.',
    poster_path: '/sB8V0pQtJZ17v8FLXMOcYz6045c.jpg'
  },
  {
    original_name: 'ワンパンマン',
    genre_ids: [
      16,
      35,
      10759
    ],
    name: 'One-Punch Man',
    popularity: 88.551,
    origin_country: [
      'JP'
    ],
    vote_count: 284,
    first_air_date: '2015-10-04',
    backdrop_path: '/s0w8JbuNNxL1YgaHeDWih12C3jG.jpg',
    original_language: 'ja',
    id: 63926,
    vote_average: 8.2,
    overview: 'Saitama is a hero who only became a hero for fun. After three years of “special” training, though, he’s become so strong that he’s practically invincible. In fact, he’s too strong—even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?',
    poster_path: '/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg'
  },
  {
    original_name: 'カウボーイビバップ',
    genre_ids: [
      16,
      18,
      10759,
      10765
    ],
    name: 'Cowboy Bebop',
    popularity: 20.931,
    origin_country: [
      'JP'
    ],
    vote_count: 300,
    first_air_date: '1998-04-03',
    backdrop_path: '/pL2VkIcoHnyX5oLd3IIaANkzB01.jpg',
    original_language: 'ja',
    id: 30991,
    vote_average: 8.2,
    overview: 'In 2071, roughly fifty years after an accident with a hyperspace gateway made the Earth almost uninhabitable, humanity has colonized most of the rocky planets and moons of the Solar System. Amid a rising crime rate, the Inter Solar System Police (ISSP) set up a legalized contract system, in which registered bounty hunters (also referred to as "Cowboys") chase criminals and bring them in alive in return for a reward.',
    poster_path: '/wjFU9z8EfOwczRTv0FrPcv9zHME.jpg'
  },
  {
    original_name: 'Peep Show',
    genre_ids: [
      35
    ],
    name: 'Peep Show',
    popularity: 13.387,
    origin_country: [
      'GB'
    ],
    vote_count: 136,
    first_air_date: '2003-09-19',
    backdrop_path: '/xoWBzIxfza235mOkvXt40uZSbqS.jpg',
    original_language: 'en',
    id: 815,
    vote_average: 8.2,
    overview: 'Peep Show is an award-winning British sitcom starring David Mitchell and Robert Webb. The television programme is written by Jesse Armstrong and Sam Bain, with additional material by Mitchell and Webb amongst others. It has been broadcast on Channel 4 since 2003. The show\'s eighth series makes it the longest-returning comedy in Channel 4 history. Stylistically, the show uses point of view shots with the thoughts of main characters Mark and Jeremy audible as voiceovers.\n\nPeep Show follows the lives of two men from their twenties to thirties, Mark Corrigan, who has steady employment for most of the series, and Jeremy "Jez" Usbourne, an unemployed would-be musician. The pair met at the fictional Dartmouth University, and now share a flat in Croydon, South London. Mark is initially a loan manager at the fictional JLB Credit, later becoming a waiter, and then a bathroom supplies salesman. He is financially secure, but awkward and socially inept, with a pessimistic and cynical attitude. Jeremy, having split up with his girlfriend Big Suze prior to the first episode, now lives in Mark\'s spare room. He usually has a much more optimistic and energetic outlook on the world than Mark, yet his self-proclaimed talent as a musician has yet to be recognised, and he is not as popular or attractive as he would like to think himself, although he is more successful with the opposite sex than Mark.',
    poster_path: '/pqrGyLYS5WIsLXwCuxc46sOP50F.jpg'
  },
  {
    original_name: 'Band of Brothers',
    genre_ids: [
      18,
      10759,
      10768
    ],
    name: 'Band of Brothers',
    popularity: 27.426,
    origin_country: [
      'GB',
      'US'
    ],
    vote_count: 1391,
    first_air_date: '2001-09-09',
    backdrop_path: '/1LrtAhWPSEetJLjblXvnaYtl7eA.jpg',
    original_language: 'en',
    id: 4613,
    vote_average: 8.2,
    overview: 'Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose\'s acclaimed book of the same name.',
    poster_path: '/yjqu0KEVAWz9eJQBvzrQMFlGD84.jpg'
  },
  {
    original_name: 'Black Mirror',
    genre_ids: [
      18,
      10765
    ],
    name: 'Black Mirror',
    popularity: 35.879,
    origin_country: [
      'GB'
    ],
    vote_count: 1199,
    first_air_date: '2011-12-04',
    backdrop_path: '/b92npz1sZwvmjUfVIrWXehrk3pc.jpg',
    original_language: 'en',
    id: 42009,
    vote_average: 8.2,
    overview: 'A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world. \n\nOver the last ten years, technology has transformed almost every aspect of our lives before we\'ve had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.',
    poster_path: '/vGrS1mzlSHQQdOcmqH1zlE2iViY.jpg'
  },
  {
    original_name: 'DEATH NOTE',
    genre_ids: [
      16,
      9648
    ],
    name: 'Death Note',
    popularity: 56.758,
    origin_country: [
      'JP'
    ],
    vote_count: 478,
    first_air_date: '2006-10-04',
    backdrop_path: '/A2j5g79EcWn1oTNCW9PSo7NZRfv.jpg',
    original_language: 'ja',
    id: 13916,
    vote_average: 8.2,
    overview: 'Light Yagami is an ace student with great prospects—and he’s bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and Light has vowed to use the power of the Death Note to rid the world of evil. But will Light succeed in his noble goal, or will the Death Note turn him into the very thing he fights against?',
    poster_path: '/g8hHbsRmHYoWYizhWCk87vpkrmy.jpg'
  },
  {
    original_name: 'The Sopranos',
    genre_ids: [
      18
    ],
    name: 'The Sopranos',
    popularity: 36.939,
    origin_country: [
      'US'
    ],
    vote_count: 761,
    first_air_date: '1999-01-10',
    backdrop_path: '/8GZ91vtbYOMp05qruAGPezWC0Ja.jpg',
    original_language: 'en',
    id: 1398,
    vote_average: 8.2,
    overview: 'The story of New Jersey-based Italian-American mobster Tony Soprano and the difficulties he faces as he tries to balance the conflicting requirements of his home life and the criminal organization he heads. Those difficulties are often highlighted through his ongoing professional relationship with psychiatrist Jennifer Melfi. The show features Tony\'s family members and Mafia associates in prominent roles and story arcs, most notably his wife Carmela and his cousin and protégé Christopher Moltisanti.',
    poster_path: '/u0cLcBQITrYqfHsn06fxnQwtqiE.jpg'
  }
];

/**
 * MediaScrollableList
 */
storiesOf('App Loader', module)
  .add('App Loader', () => ({
    components: { AppLoader },
    template: '<app-loader></app-loader>',
    data() {
      return {
        movies,
        tv
      };
    },
    store
  }));
