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
      "date": { "year": 2008, "fullDate": "January 20, 2008" },
      "filmTime": 45,
      "imdbRating": 9.5,
      "backgroundUrl": "/api/placeholder/1200/600",
      "description": "چیرۆکی مامۆستایەکی کیمیا کە دەبێتە بازرگانی ماددەی هۆشبەر",
      "genres": ["تاوان", "درامای", "هەڵچوون"],
      "casts": [
        { "id": 1, "name": "Bryan Cranston", "imgUrl": "/api/placeholder/100/100" }
      ],
      "seasons": {
    "season1": {
      "coverImage": {
        "imgUrl": "https://example.com/s1-cover.jpg"
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
        "imgUrl": "https://example.com/s2-cover.jpg"
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
        "imgUrl": "https://example.com/s3-cover.jpg"
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
        "imgUrl": "https://example.com/s4-cover.jpg"
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
        "imgUrl": "https://example.com/s5-cover.jpg"
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
  },
      "comments": {
        "reviews": [
          {
            "id": 1,
            "name": "Azad",
            "rating": 5,
            "msg": "زۆر زۆر باشە، سەیری بکەن",
            "imgUrl": "/api/placeholder/100/100"
          }
        ]
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
          "episodes": {
            "ep1": { "epTitle": "Winter Is Coming", "epNumber": 1 },
            "ep2": { "epTitle": "The Kingsroad", "epNumber": 2 }
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
            className={`px-4 py-2 rounded ${
              selectedSeriesIndex === index ? 'bg-blue-500 text-white' : 'bg-white'
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
                className={`px-3 py-1 rounded ${
                  selectedSeason === season ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}
              >
                Season {season.replace('season', '')}
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