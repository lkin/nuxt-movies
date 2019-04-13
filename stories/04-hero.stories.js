import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Hero from '../components/Hero';
import store from '../.storybook/store'


const movies = [
  {
    vote_count: 84,
    id: 450001,
    video: false,
    vote_average: 5.3,
    title: 'Master Z: Ip Man Legacy',
    popularity: 193.596,
    poster_path: '/2WfjB6FUDTIBVI2y02UGbnHR82s.jpg',
    original_language: 'cn',
    original_title: '葉問外傳：張天志',
    genre_ids: [
      28
    ],
    backdrop_path: '/grtVFGJ4ts0nDAPpc1JWbBoVKTu.jpg',
    adult: false,
    overview: 'After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.',
    release_date: '2018-12-20'
  },
  {
    vote_count: 96,
    id: 458723,
    video: false,
    vote_average: 7.5,
    title: 'Us',
    popularity: 109.288,
    poster_path: '/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg',
    original_language: 'en',
    original_title: 'Us',
    genre_ids: [
      53,
      27
    ],
    backdrop_path: '/AiG8iWpFtFSXAdhStWu6qBaqmv9.jpg',
    adult: false,
    overview: 'Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.',
    release_date: '2019-03-14'
  },
  {
    vote_count: 19,
    id: 429471,
    video: false,
    vote_average: 5,
    title: 'Captive State',
    popularity: 104.054,
    poster_path: '/wB24P3QGGoAkEyBzTEb5s4lFY7N.jpg',
    original_language: 'en',
    original_title: 'Captive State',
    genre_ids: [
      53,
      878
    ],
    backdrop_path: '/6IZ84KFhNpy6htsJmwFVuK30pyp.jpg',
    adult: false,
    overview: 'Nearly a decade after occupation by an extraterrestrial force, the lives of a Chicago neighborhood on both sides of the conflict are explored.',
    release_date: '2019-03-15'
  },
  {
    vote_count: 11,
    id: 400157,
    video: false,
    vote_average: 6.3,
    title: 'Wonder Park',
    popularity: 80.314,
    poster_path: '/elUcnFlkQnx8ucyCTCWIi6HRa3w.jpg',
    original_language: 'en',
    original_title: 'Wonder Park',
    genre_ids: [
      35,
      16,
      12,
      10751,
      14
    ],
    backdrop_path: '/nJyAdKPnW15IAvC6sLBTE0lp6Dv.jpg',
    adult: false,
    overview: 'The story of a magnificent amusement park where the imagination of a wildly creative girl named June comes alive.',
    release_date: '2019-03-14'
  },
  {
    vote_count: 13,
    id: 287947,
    video: false,
    vote_average: 6.1,
    title: 'Shazam!',
    popularity: 71.023,
    poster_path: '/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
    original_language: 'en',
    original_title: 'Shazam!',
    genre_ids: [
      28,
      35,
      12,
      14
    ],
    backdrop_path: '/nmV9MdbzST4xv8WMHwhVgxkHHjM.jpg',
    adult: false,
    overview: 'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
    release_date: '2019-03-23'
  },
  {
    vote_count: 823,
    id: 429197,
    video: false,
    vote_average: 7.2,
    title: 'Vice',
    popularity: 55.993,
    poster_path: '/1gCab6rNv1r6V64cwsU4oEr649Y.jpg',
    original_language: 'en',
    original_title: 'Vice',
    genre_ids: [
      18,
      36,
      35
    ],
    backdrop_path: '/anI3uuBx6CIUOToxOCQebtcpU0r.jpg',
    adult: false,
    overview: 'George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney\'s impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.',
    release_date: '2018-12-25'
  },
  {
    vote_count: 90,
    id: 445629,
    video: false,
    vote_average: 6.1,
    title: 'Fighting with My Family',
    popularity: 55.823,
    poster_path: '/3TZCBAdKQiz0cGKGEjZiyZUA01O.jpg',
    original_language: 'en',
    original_title: 'Fighting with My Family',
    genre_ids: [
      35,
      18
    ],
    backdrop_path: '/mYKP6qcDUimVMAHQWLOuDHjO19S.jpg',
    adult: false,
    overview: 'Born into a tight-knit wrestling family, Paige and her brother Zak are ecstatic when they get the once-in-a-lifetime opportunity to try out for the WWE. But when only Paige earns a spot in the competitive training program, she must leave her loved ones behind and face this new cutthroat world alone. Paige\'s journey pushes her to dig deep and ultimately prove to the world that what makes her different is the very thing that can make her a star.',
    release_date: '2019-02-14'
  },
  {
    vote_count: 58,
    id: 454294,
    video: false,
    vote_average: 6,
    title: 'The Kid Who Would Be King',
    popularity: 47.677,
    poster_path: '/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg',
    original_language: 'en',
    original_title: 'The Kid Who Would Be King',
    genre_ids: [
      28,
      12,
      14,
      10751
    ],
    backdrop_path: '/jmbgxBd86MshzQQvv5laKvOKoMm.jpg',
    adult: false,
    overview: 'Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.',
    release_date: '2019-01-16'
  },
  {
    vote_count: 21,
    id: 527641,
    video: false,
    vote_average: 8,
    title: 'Five Feet Apart',
    popularity: 38.185,
    poster_path: '/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg',
    original_language: 'en',
    original_title: 'Five Feet Apart',
    genre_ids: [
      10749,
      18
    ],
    backdrop_path: '/d7wa3VpUpKDQ7GG9EMw8zSJCFoI.jpg',
    adult: false,
    overview: 'Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness.',
    release_date: '2019-03-15'
  },
  {
    vote_count: 7,
    id: 329996,
    video: false,
    vote_average: 4.5,
    title: 'Dumbo',
    popularity: 35.806,
    poster_path: '/ttN0czDnCpr64aj3ANGEf3DKE1L.jpg',
    original_language: 'en',
    original_title: 'Dumbo',
    genre_ids: [
      12,
      10751,
      14
    ],
    backdrop_path: '/5tFt6iuGnKapHl5tw0X0cKcnuVo.jpg',
    adult: false,
    overview: 'A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.',
    release_date: '2019-03-27'
  },
  {
    vote_count: 45,
    id: 508763,
    video: false,
    vote_average: 6.8,
    title: 'A Dog\'s Way Home',
    popularity: 25.178,
    poster_path: '/pZn87R7gtmMCGGO8KeaAfZDhXLg.jpg',
    original_language: 'en',
    original_title: 'A Dog\'s Way Home',
    genre_ids: [
      18,
      10751,
      12
    ],
    backdrop_path: '/bUhKLpns44kXGTWz8TSejzFFClr.jpg',
    adult: false,
    overview: 'A Dog’s Way Home chronicles the heartwarming adventure of Bella, a dog who embarks on an epic 400-mile journey home after she is separated from her beloved human.',
    release_date: '2019-01-10'
  },
  {
    vote_count: 4,
    id: 441384,
    video: false,
    vote_average: 3.7,
    title: 'The Beach Bum',
    popularity: 22.678,
    poster_path: '/iXMxdC7T0t3dxislnUNybcvJmAH.jpg',
    original_language: 'en',
    original_title: 'The Beach Bum',
    genre_ids: [
      35
    ],
    backdrop_path: '/sJspZTaLdaoiQcy5S5ZWcQkLLGM.jpg',
    adult: false,
    overview: 'An irreverent comedy about the misadventures of Moondog, a rebellious stoner and lovable rogue who lives large.',
    release_date: '2019-03-21'
  },
  {
    vote_count: 0,
    id: 157433,
    video: false,
    vote_average: 0,
    title: 'Pet Sematary',
    popularity: 16.979,
    poster_path: '/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg',
    original_language: 'en',
    original_title: 'Pet Sematary',
    genre_ids: [
      27,
      53
    ],
    backdrop_path: '/n2aX63BmW7zIKgKJ58e6rKlSsdi.jpg',
    adult: false,
    overview: 'Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie \'Pet Sematary\' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.',
    release_date: '2019-04-04'
  },
  {
    vote_count: 404,
    id: 440161,
    video: false,
    vote_average: 7.1,
    title: 'The Sisters Brothers',
    popularity: 15.807,
    poster_path: '/hbUGrEaJgFz9NWh34HHUb4vLjkG.jpg',
    original_language: 'en',
    original_title: 'The Sisters Brothers',
    genre_ids: [
      35,
      18,
      37
    ],
    backdrop_path: '/2cI0rmMgoZOqP78iQDZwQASkKT3.jpg',
    adult: false,
    overview: 'Oregon, 1851. Hermann Kermit Warm, a chemist and aspiring gold prospector, keeps a profitable secret that the Commodore wants to know, so he sends the Sisters brothers, two notorious assassins, to capture him on his way to California.',
    release_date: '2018-09-19'
  },
  {
    vote_count: 218,
    id: 527729,
    video: false,
    vote_average: 7.1,
    title: 'Asterix: The Secret of the Magic Potion',
    popularity: 15.422,
    poster_path: '/bMYpBVc0bS0ykEXSjRXIat6ooJf.jpg',
    original_language: 'fr',
    original_title: 'Astérix - Le Secret de la Potion Magique',
    genre_ids: [
      16,
      10751,
      35,
      12
    ],
    backdrop_path: '/4KrdRETV531AHZADXtqEGCoUZfS.jpg',
    adult: false,
    overview: 'Following a fall during mistletoe picking, Druid Getafix decides that it is time to secure the future of the village. Accompanied by Asterix and Obelix, he undertakes to travel the Gallic world in search of a talented young druid to transmit the Secret of the Magic Potion.',
    release_date: '2018-12-05'
  },
  {
    vote_count: 380,
    id: 491472,
    video: false,
    vote_average: 6.8,
    title: 'At Eternity\'s Gate',
    popularity: 15.242,
    poster_path: '/7rUnZrcSyfwfloeI5aoccztSLSg.jpg',
    original_language: 'en',
    original_title: 'At Eternity\'s Gate',
    genre_ids: [
      18
    ],
    backdrop_path: '/vmLDDBvF022Scen7jF0nN8uIlEe.jpg',
    adult: false,
    overview: 'Famed but tormented artist Vincent van Gogh spends his final years in Arles, France, painting masterworks of the natural world that surrounds him.',
    release_date: '2018-11-15'
  },
  {
    vote_count: 545,
    id: 361292,
    video: false,
    vote_average: 7.2,
    title: 'Suspiria',
    popularity: 15.189,
    poster_path: '/dzWTnkert9EoiPWldWJ15dnfAFl.jpg',
    original_language: 'en',
    original_title: 'Suspiria',
    genre_ids: [
      53,
      9648,
      18,
      27
    ],
    backdrop_path: '/AmO8I38bkHwKhgxPNrd6djBQyPU.jpg',
    adult: false,
    overview: 'A darkness swirls at the center of a world-renowned dance company, one that will engulf the troupe\'s artistic director, an ambitious young dancer and a grieving psychotherapist. Some will succumb to the nightmare, others will finally wake up.',
    release_date: '2018-10-11'
  },
  {
    vote_count: 0,
    id: 456740,
    video: false,
    vote_average: 0,
    title: 'Hellboy',
    popularity: 14.76,
    poster_path: '/8GkIaE99CyYHuzHDOfrrCB4xr1A.jpg',
    original_language: 'en',
    original_title: 'Hellboy',
    genre_ids: [
      28,
      12,
      14
    ],
    backdrop_path: '/t73w0R9T7nZQb9V32FcW1j4esC4.jpg',
    adult: false,
    overview: 'Hellboy comes to England, where he must defeat Nimue, Merlin\'s consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.',
    release_date: '2019-04-11'
  },
  {
    vote_count: 84,
    id: 449459,
    video: false,
    vote_average: 5.4,
    title: 'The Vanishing',
    popularity: 13.855,
    poster_path: '/5HKn2CecRi2OlyC3T6FZz4QqkW5.jpg',
    original_language: 'en',
    original_title: 'The Vanishing',
    genre_ids: [
      53,
      18,
      9648
    ],
    backdrop_path: '/jK4m8gjLT5D2PNwoC0jJ0dGmWMu.jpg',
    adult: false,
    overview: 'Three lighthouse keepers on an uninhabited island off the coast of Scotland discover something that isn\'t theirs to keep.',
    release_date: '2019-01-04'
  },
  {
    vote_count: 38,
    id: 532671,
    video: false,
    vote_average: 6.3,
    title: 'The Prodigy',
    popularity: 13.153,
    poster_path: '/yyejodyk3lWncVjVhhrEkPctY9o.jpg',
    original_language: 'en',
    original_title: 'The Prodigy',
    genre_ids: [
      27,
      53
    ],
    backdrop_path: '/g5fUxWupgKTSqV3cHSx0QdGT2tB.jpg',
    adult: false,
    overview: 'A mother concerned about her young son\'s disturbing behavior thinks something supernatural may be affecting him.',
    release_date: '2019-02-06'
  }
];

/**
 * Hero
 */
storiesOf('Hero', module)
  .add('Hero', () => ({
    components: { Hero },
    template: '<hero :medium="medium"></hero>',
    data() {
      return {
        medium: movies[0]
      };
    },
    store
  }));
