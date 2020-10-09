const soundsPlaying = [
    {
        soundInfo: {
            id: 1,
            sound: 'http://soundbible.com/mp3/45min_april_rainstorm-mike-koenig.mp3',
            label: "Rain Forest"
        }
    },
    {
        soundInfo: {
            id: 2,
            sound: 'http://soundbible.com/mp3/Upper%20Cut-SoundBible.com-1272257235.mp3',
            label: "Upper Cup"
        }
    },
    {
        soundInfo: {
            id: 3,
            sound: 'http://soundbible.com/grab.php?id=2217&type=mp3',
            label: "Tempestade super forte e vento forte"
        }
    }
]

const id = 3
const index = soundsPlaying.findIndex(s => s.soundInfo.id === id)
console.log(JSON.stringify(soundsPlaying, null, 4))
console.log(index)
soundsPlaying.splice(index, 1)
console.log(JSON.stringify(soundsPlaying, null, 4))