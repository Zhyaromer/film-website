import React, { useState } from 'react';
import { Star, Clock, Calendar } from 'lucide-react';

// Series Viewer Component
const SeriesViewer = () => {
  const [selectedSeriesIndex, setSelectedSeriesIndex] = React.useState(0);
  const [selectedSeason, setSelectedSeason] = React.useState('season1');

  // Data
  const series = [
    {
      "title": "Breaking Bad",
      "date": {
        "year": 2008,
        "fullDate": "January 20, 2008"
      },
      "filmTime": 45,
      "rottenTomatoRating": 96,
      "imdbRating": 9.5,
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "backgroundUrl": "https://www.theprodigalfather.org/wp-content/uploads/2018/01/Screen-Shot-2018-01-31-at-5.55.24-AM.png",
      "trailerUrl": "https://youtu.be/XZ8daibM3AE?si=MWnpqdT7qw_6-oPk",
      "technical": {
        "translators": [
          {
            "id": 1,
            "name": "Sarah Johnson",
            "role": "Lead Translator",
            "imgUrl": "https://example.com/sarah.jpg"
          }
        ],
        "bargTaknik": [
          {
            "id": 1,
            "name": "John Smith",
            "role": "Technical Director",
            "imgUrl": "https://example.com/john.jpg"
          }
        ]
      },
      "casts": [
        {
          "id": 1,
          "name": "Bryan Cranston",
          "imgUrl": "https://example.com/bryan.jpg"
        }
      ],
      "comments": {
        "reviews": [
          {
            "id": 1,
            "name": "Azad",
            "rating": 5,
            "msg": "زۆر زۆر باشە، سەیری بکەن",
            "imgUrl": "https://example.com/azad.jpg"
          }
        ]
      },
      "director": "Vince Gilligan",
      "producer": "Mark Johnson",
      "description": "چیرۆکی مامۆستایەکی کیمیا کە دەبێتە بازرگانی ماددەی هۆشبەر",
      "genres": ["تاوان", "درامای", "هەڵچوون"],
      "country": "United States",
      "seasons": {
        "season1": {
          "coverImage": {
            "imgUrl": "https://m.media-amazon.com/images/S/pv-target-images/4e16b4cd4fa41c6bc57010ade44cef460c1325c43325a9d929e75cd959481e6f.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Pilot",
              "epNumber": 1,
              "epUrl": "https://example.com/s1e1"
            },
            "ep2": {
              "epTitle": "Cat's in the Bag",
              "epNumber": 2,
              "epUrl": "https://example.com/s1e2"
            },
            "ep3": {
              "epTitle": "And the Bag's in the River",
              "epNumber": 3,
              "epUrl": "https://example.com/s1e3"
            },
            "ep4": {
              "epTitle": "Cancer Man",
              "epNumber": 4,
              "epUrl": "https://example.com/s1e4"
            },
            "ep5": {
              "epTitle": "Gray Matter",
              "epNumber": 5,
              "epUrl": "https://example.com/s1e5"
            },
            "ep6": {
              "epTitle": "Crazy Handful of Nothin'",
              "epNumber": 6,
              "epUrl": "https://example.com/s1e6"
            },
            "ep7": {
              "epTitle": "A No-Rough-Stuff-Type Deal",
              "epNumber": 7,
              "epUrl": "https://example.com/s1e7"
            }
          }
        },
        "season2": {
          "coverImage": {
            "imgUrl": "https://preview.redd.it/season-2-of-breaking-bad-is-the-most-underrated-season-of-v0-058817u3cnwc1.png?auto=webp&s=ac2c85d5a93c777cda7675f0054ba577f0ba6677"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Seven Thirty-Seven",
              "epNumber": 1,
              "epUrl": "https://example.com/s2e1"
            },
            "ep2": {
              "epTitle": "Grilled",
              "epNumber": 2,
              "epUrl": "https://example.com/s2e2"
            },
            "ep3": {
              "epTitle": "Bit by a Dead Bee",
              "epNumber": 3,
              "epUrl": "https://example.com/s2e3"
            },
            "ep4": {
              "epTitle": "Down",
              "epNumber": 4,
              "epUrl": "https://example.com/s2e4"
            },
            "ep5": {
              "epTitle": "Breakage",
              "epNumber": 5,
              "epUrl": "https://example.com/s2e5"
            },
            "ep6": {
              "epTitle": "Peekaboo",
              "epNumber": 6,
              "epUrl": "https://example.com/s2e6"
            },
            "ep7": {
              "epTitle": "Negro y Azul",
              "epNumber": 7,
              "epUrl": "https://example.com/s2e7"
            },
            "ep8": {
              "epTitle": "Better Call Saul",
              "epNumber": 8,
              "epUrl": "https://example.com/s2e8"
            },
            "ep9": {
              "epTitle": "4 Days Out",
              "epNumber": 9,
              "epUrl": "https://example.com/s2e9"
            },
            "ep10": {
              "epTitle": "Over",
              "epNumber": 10,
              "epUrl": "https://example.com/s2e10"
            },
            "ep11": {
              "epTitle": "Mandala",
              "epNumber": 11,
              "epUrl": "https://example.com/s2e11"
            },
            "ep12": {
              "epTitle": "Phoenix",
              "epNumber": 12,
              "epUrl": "https://example.com/s2e12"
            },
            "ep13": {
              "epTitle": "ABQ",
              "epNumber": 13,
              "epUrl": "https://example.com/s2e13"
            }
          }
        },
        "season3": {
          "coverImage": {
            "imgUrl": "https://m.media-amazon.com/images/S/pv-target-images/342945b4b0df5644480f11eb71fb5b2285efe0ef66333e0bfe7ce3b70e7e2c1a.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "No Más",
              "epNumber": 1,
              "epUrl": "https://example.com/s3e1"
            },
            "ep2": {
              "epTitle": "Caballo Sin Nombre",
              "epNumber": 2,
              "epUrl": "https://example.com/s3e2"
            },
            "ep3": {
              "epTitle": "I.F.T.",
              "epNumber": 3,
              "epUrl": "https://example.com/s3e3"
            },
            "ep4": {
              "epTitle": "Green Light",
              "epNumber": 4,
              "epUrl": "https://example.com/s3e4"
            },
            "ep5": {
              "epTitle": "Más",
              "epNumber": 5,
              "epUrl": "https://example.com/s3e5"
            },
            "ep6": {
              "epTitle": "Sunset",
              "epNumber": 6,
              "epUrl": "https://example.com/s3e6"
            },
            "ep7": {
              "epTitle": "One Minute",
              "epNumber": 7,
              "epUrl": "https://example.com/s3e7"
            },
            "ep8": {
              "epTitle": "I See You",
              "epNumber": 8,
              "epUrl": "https://example.com/s3e8"
            },
            "ep9": {
              "epTitle": "Kafkaesque",
              "epNumber": 9,
              "epUrl": "https://example.com/s3e9"
            },
            "ep10": {
              "epTitle": "Fly",
              "epNumber": 10,
              "epUrl": "https://example.com/s3e10"
            },
            "ep11": {
              "epTitle": "Abiquiu",
              "epNumber": 11,
              "epUrl": "https://example.com/s3e11"
            },
            "ep12": {
              "epTitle": "Half Measures",
              "epNumber": 12,
              "epUrl": "https://example.com/s3e12"
            },
            "ep13": {
              "epTitle": "Full Measure",
              "epNumber": 13,
              "epUrl": "https://example.com/s3e13"
            }
          }
        },
        "season4": {
          "coverImage": {
            "imgUrl": "https://m.media-amazon.com/images/S/pv-target-images/c4eb46092b983257e419fcc2644ede579a557e0c6754595db98a91706f81ce34.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Box Cutter",
              "epNumber": 1,
              "epUrl": "https://example.com/s4e1"
            },
            "ep2": {
              "epTitle": "Thirty-Eight Snub",
              "epNumber": 2,
              "epUrl": "https://example.com/s4e2"
            },
            "ep3": {
              "epTitle": "Open House",
              "epNumber": 3,
              "epUrl": "https://example.com/s4e3"
            },
            "ep4": {
              "epTitle": "Bullet Points",
              "epNumber": 4,
              "epUrl": "https://example.com/s4e4"
            },
            "ep5": {
              "epTitle": "Shotgun",
              "epNumber": 5,
              "epUrl": "https://example.com/s4e5"
            },
            "ep6": {
              "epTitle": "Cornered",
              "epNumber": 6,
              "epUrl": "https://example.com/s4e6"
            },
            "ep7": {
              "epTitle": "Problem Dog",
              "epNumber": 7,
              "epUrl": "https://example.com/s4e7"
            },
            "ep8": {
              "epTitle": "Hermanos",
              "epNumber": 8,
              "epUrl": "https://example.com/s4e8"
            },
            "ep9": {
              "epTitle": "Bug",
              "epNumber": 9,
              "epUrl": "https://example.com/s4e9"
            },
            "ep10": {
              "epTitle": "Salud",
              "epNumber": 10,
              "epUrl": "https://example.com/s4e10"
            },
            "ep11": {
              "epTitle": "Crawl Space",
              "epNumber": 11,
              "epUrl": "https://example.com/s4e11"
            },
            "ep12": {
              "epTitle": "End Times",
              "epNumber": 12,
              "epUrl": "https://example.com/s4e12"
            },
            "ep13": {
              "epTitle": "Face Off",
              "epNumber": 13,
              "epUrl": "https://example.com/s4e13"
            }
          }
        },
        "season5": {
          "coverImage": {
            "imgUrl": "https://m.media-amazon.com/images/I/91+GrGr5TWL._AC_UF894,1000_QL80_.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Live Free or Die",
              "epNumber": 1,
              "epUrl": "https://example.com/s5e1"
            },
            "ep2": {
              "epTitle": "Madrigal",
              "epNumber": 2,
              "epUrl": "https://example.com/s5e2"
            },
            "ep3": {
              "epTitle": "Hazard Pay",
              "epNumber": 3,
              "epUrl": "https://example.com/s5e3"
            },
            "ep4": {
              "epTitle": "Fifty-One",
              "epNumber": 4,
              "epUrl": "https://example.com/s5e4"
            },
            "ep5": {
              "epTitle": "Dead Freight",
              "epNumber": 5,
              "epUrl": "https://example.com/s5e5"
            },
            "ep6": {
              "epTitle": "Buyout",
              "epNumber": 6,
              "epUrl": "https://example.com/s5e6"
            },
            "ep7": {
              "epTitle": "Say My Name",
              "epNumber": 7,
              "epUrl": "https://example.com/s5e7"
            },
            "ep8": {
              "epTitle": "Gliding Over All",
              "epNumber": 8,
              "epUrl": "https://example.com/s5e8"
            },
            "ep9": {
              "epTitle": "Blood Money",
              "epNumber": 9,
              "epUrl": "https://example.com/s5e9"
            },
            "ep10": {
              "epTitle": "Buried",
              "epNumber": 10,
              "epUrl": "https://example.com/s5e10"
            },
            "ep11": {
              "epTitle": "Confessions",
              "epNumber": 11,
              "epUrl": "https://example.com/s5e11"
            },
            "ep12": {
              "epTitle": "Rabid Dog",
              "epNumber": 12,
              "epUrl": "https://example.com/s5e12"
            },
            "ep13": {
              "epTitle": "To'hajiilee",
              "epNumber": 13,
              "epUrl": "https://example.com/s5e13"
            },
            "ep14": {
              "epTitle": "Ozymandias",
              "epNumber": 14,
              "epUrl": "https://example.com/s5e14"
            },
            "ep15": {
              "epTitle": "Granite State",
              "epNumber": 15,
              "epUrl": "https://example.com/s5e15"
            },
            "ep16": {
              "epTitle": "Felina",
              "epNumber": 16,
              "epUrl": "https://example.com/s5e16"
            }
          }
        }
      }
    },


    {
      "title": "Game of Thrones",
      "date": { "year": 2011, "fullDate": "April 17, 2011" },
      "filmTime": 60,
      "imdbRating": 9.3,
      "backgroundUrl": "/api/placeholder/1200/600",
      "description": "چیرۆکی خێزانە جەنگاوەرەکان لە دنیایەکی فەنتازی",
      "genres": ["فەنتازی", "درامای", "ئەکشن"],
      "casts": [
        { "id": 1, "name": "Emilia Clarke", "imgUrl": "/api/placeholder/100/100" }
      ],
      "seasons": {
        "season1": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s1-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Winter Is Coming",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s1e1"
            },
            "ep2": {
              "epTitle": "The Kingsroad",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s1e2"
            },
            "ep3": {
              "epTitle": "Lord Snow",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s1e3"
            },
            "ep4": {
              "epTitle": "Cripples, Bastards, and Broken Things",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s1e4"
            },
            "ep5": {
              "epTitle": "The Wolf and the Lion",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s1e5"
            },
            "ep6": {
              "epTitle": "A Golden Crown",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s1e6"
            },
            "ep7": {
              "epTitle": "You Win or You Die",
              "epNumber": 7,
              "epUrl": "https://example.com/got-s1e7"
            },
            "ep8": {
              "epTitle": "The Pointy End",
              "epNumber": 8,
              "epUrl": "https://example.com/got-s1e8"
            },
            "ep9": {
              "epTitle": "Baelor",
              "epNumber": 9,
              "epUrl": "https://example.com/got-s1e9"
            },
            "ep10": {
              "epTitle": "Fire and Blood",
              "epNumber": 10,
              "epUrl": "https://example.com/got-s1e10"
            }
          }
        },
        "season2": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s2-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "The North Remembers",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s2e1"
            },
            "ep2": {
              "epTitle": "The Night Lands",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s2e2"
            },
            "ep3": {
              "epTitle": "What Is Dead May Never Die",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s2e3"
            },
            "ep4": {
              "epTitle": "Garden of Bones",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s2e4"
            },
            "ep5": {
              "epTitle": "The Ghost of Harrenhal",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s2e5"
            },
            "ep6": {
              "epTitle": "The Old Gods and the New",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s2e6"
            },
            "ep7": {
              "epTitle": "A Man Without Honor",
              "epNumber": 7,
              "epUrl": "https://example.com/got-s2e7"
            },
            "ep8": {
              "epTitle": "The Prince of Winterfell",
              "epNumber": 8,
              "epUrl": "https://example.com/got-s2e8"
            },
            "ep9": {
              "epTitle": "Blackwater",
              "epNumber": 9,
              "epUrl": "https://example.com/got-s2e9"
            },
            "ep10": {
              "epTitle": "Valar Morghulis",
              "epNumber": 10,
              "epUrl": "https://example.com/got-s2e10"
            }
          }
        },
        "season3": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s3-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Valar Dohaeris",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s3e1"
            },
            "ep2": {
              "epTitle": "Dark Wings, Dark Words",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s3e2"
            },
            "ep3": {
              "epTitle": "Walk of Punishment",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s3e3"
            },
            "ep4": {
              "epTitle": "And Now His Watch Is Ended",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s3e4"
            },
            "ep5": {
              "epTitle": "Kissed by Fire",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s3e5"
            },
            "ep6": {
              "epTitle": "The Climb",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s3e6"
            },
            "ep7": {
              "epTitle": "The Bear and the Maiden Fair",
              "epNumber": 7,
              "epUrl": "https://example.com/got-s3e7"
            },
            "ep8": {
              "epTitle": "Second Sons",
              "epNumber": 8,
              "epUrl": "https://example.com/got-s3e8"
            },
            "ep9": {
              "epTitle": "The Rains of Castamere",
              "epNumber": 9,
              "epUrl": "https://example.com/got-s3e9"
            },
            "ep10": {
              "epTitle": "Mhysa",
              "epNumber": 10,
              "epUrl": "https://example.com/got-s3e10"
            }
          }
        },
        "season4": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s4-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Two Swords",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s4e1"
            },
            "ep2": {
              "epTitle": "The Lion and the Rose",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s4e2"
            },
            "ep3": {
              "epTitle": "Breaker of Chains",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s4e3"
            },
            "ep4": {
              "epTitle": "Oathkeeper",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s4e4"
            },
            "ep5": {
              "epTitle": "First of His Name",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s4e5"
            },
            "ep6": {
              "epTitle": "The Laws of Gods and Men",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s4e6"
            },
            "ep7": {
              "epTitle": "Mockingbird",
              "epNumber": 7,
              "epUrl": "https://example.com/got-s4e7"
            },
            "ep8": {
              "epTitle": "The Mountain and the Viper",
              "epNumber": 8,
              "epUrl": "https://example.com/got-s4e8"
            },
            "ep9": {
              "epTitle": "The Watchers on the Wall",
              "epNumber": 9,
              "epUrl": "https://example.com/got-s4e9"
            },
            "ep10": {
              "epTitle": "The Children",
              "epNumber": 10,
              "epUrl": "https://example.com/got-s4e10"
            }
          }
        },
        "season5": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s5-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "The Wars to Come",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s5e1"
            },
            "ep2": {
              "epTitle": "The House of Black and White",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s5e2"
            },
            "ep3": {
              "epTitle": "High Sparrow",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s5e3"
            },
            "ep4": {
              "epTitle": "Sons of the Harpy",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s5e4"
            },
            "ep5": {
              "epTitle": "Kill the Boy",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s5e5"
            },
            "ep6": {
              "epTitle": "Unbowed, Unbent, Unbroken",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s5e6"
            },
            "ep7": {
              "epTitle": "The Gift",
              "epNumber": 7,
              "epUrl": "https://example.com/got-s5e7"
            },
            "ep8": {
              "epTitle": "Hardhome",
              "epNumber": 8,
              "epUrl": "https://example.com/got-s5e8"
            },
            "ep9": {
              "epTitle": "The Dance of Dragons",
              "epNumber": 9,
              "epUrl": "https://example.com/got-s5e9"
            },
            "ep10": {
              "epTitle": "Mother's Mercy",
              "epNumber": 10,
              "epUrl": "https://example.com/got-s5e10"
            }
          }
        },
        "season6": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s6-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "The Red Woman",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s6e1"
            },
            "ep2": {
              "epTitle": "Home",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s6e2"
            },
            "ep3": {
              "epTitle": "Oathbreaker",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s6e3"
            },
            "ep4": {
              "epTitle": "Book of the Stranger",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s6e4"
            },
            "ep5": {
              "epTitle": "The Door",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s6e5"
            },
            "ep6": {
              "epTitle": "Blood of My Blood",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s6e6"
            },
            "ep7": {
              "epTitle": "The Broken Man",
              "epNumber": 7,
              "epUrl": "https://example.com/got-s6e7"
            },
            "ep8": {
              "epTitle": "No One",
              "epNumber": 8,
              "epUrl": "https://example.com/got-s6e8"
            },
            "ep9": {
              "epTitle": "Battle of the Bastards",
              "epNumber": 9,
              "epUrl": "https://example.com/got-s6e9"
            },
            "ep10": {
              "epTitle": "The Winds of Winter",
              "epNumber": 10,
              "epUrl": "https://example.com/got-s6e10"
            }
          }
        },
        "season7": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s7-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Dragonstone",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s7e1"
            },
            "ep2": {
              "epTitle": "Stormborn",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s7e2"
            },
            "ep3": {
              "epTitle": "The Queen's Justice",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s7e3"
            },
            "ep4": {
              "epTitle": "The Spoils of War",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s7e4"
            },
            "ep5": {
              "epTitle": "Eastwatch",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s7e5"
            },
            "ep6": {
              "epTitle": "Beyond the Wall",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s7e6"
            },
            "ep7": {
              "epTitle": "The Dragon and the Wolf",
              "epNumber": 7,
              "epUrl": "https://example.com/got-s7e7"
            }
          }
        },
        "season8": {
          "coverImage": {
            "imgUrl": "https://example.com/got-s8-cover.jpg"
          },
          "episodes": {
            "ep1": {
              "epTitle": "Winterfell",
              "epNumber": 1,
              "epUrl": "https://example.com/got-s8e1"
            },
            "ep2": {
              "epTitle": "A Knight of the Seven Kingdoms",
              "epNumber": 2,
              "epUrl": "https://example.com/got-s8e2"
            },
            "ep3": {
              "epTitle": "The Long Night",
              "epNumber": 3,
              "epUrl": "https://example.com/got-s8e3"
            },
            "ep4": {
              "epTitle": "The Last of the Starks",
              "epNumber": 4,
              "epUrl": "https://example.com/got-s8e4"
            },
            "ep5": {
              "epTitle": "The Bells",
              "epNumber": 5,
              "epUrl": "https://example.com/got-s8e5"
            },
            "ep6": {
              "epTitle": "The Iron Throne",
              "epNumber": 6,
              "epUrl": "https://example.com/got-s8e6"
            }
          }
        }
      },
      "comments": {
        "reviews": [
          {
            "id": 1,
            "name": "Shilan",
            "rating": 4,
            "msg": "زنجیرەیەکی فەنتازی زۆر بەهێز",
            "imgUrl": "/api/placeholder/100/100"
          }
        ]
      }
    }
  ];

  const currentSeries = series[selectedSeriesIndex];
  const seasonKeys = Object.keys(currentSeries.seasons);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Series Selector */}
      <div className="flex gap-4 mb-6">
        {series.map((s, index) => (
          <button
            key={s.title}
            onClick={() => setSelectedSeriesIndex(index)}
            className={`px-4 py-2 rounded ${selectedSeriesIndex === index ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="relative h-64 mb-6 rounded overflow-hidden">
          <img
            src={currentSeries.backgroundUrl}
            alt={currentSeries.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
            <h1 className="text-3xl font-bold">{currentSeries.title}</h1>
            <div className="flex gap-4 mt-2">
              <span>{currentSeries.date.fullDate}</span>
              <span>{currentSeries.filmTime} min</span>
              <span>IMDB: {currentSeries.imdbRating}</span>
            </div>
          </div>
        </div>

        {/* Description & Genres */}
        <div className="mb-6">
          <p className="text-lg mb-4">{currentSeries.description}</p>
          <div className="flex gap-2">
            {currentSeries.genres.map(genre => (
              <span key={genre} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Episodes */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Episodes</h2>
          <div className="flex gap-2 mb-4">
            {seasonKeys.map(season => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`px-3 py-1 rounded ${selectedSeason === season ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
              >
                Season {season.replace('season', '')}
                <img src={season[season].coverImage.imgUrl} alt="" />
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {Object.values(currentSeries.seasons[selectedSeason].episodes).map(episode => (
              <div
                key={episode.epUrl}
                onClick={() => console.log(episode.epUrl)}
                className="p-3 bg-gray-50 rounded flex items-center"
              >
                <span className="w-8 font-bold">{episode.epNumber}</span>
                <span>{episode.epTitle}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default SeriesViewer