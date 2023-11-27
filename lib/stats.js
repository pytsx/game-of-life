const infosContainer = document.querySelector("#infos")

const statsScript = [
  {
    label: "fps: ",
    id: "fps"
  },
  {
    label: "generation: ",
    id: "generation"
  },
  {
    label: "population: ",
    id: "population"
  },
  {
    label: "time: ",
    id: "time"
  }
]

statsScript.forEach(stat => CreateInfo(infosContainer, stat.label, stat.id))

function updateStats(fps, currentTime) {
  UpdateInfo("generation", generation)
  UpdateInfo("fps", fps)
  UpdateInfo("delay", delay)
  UpdateInfo("resolution", resolution)
  UpdateInfo("time", Math.floor(Math.abs(startAt - currentTime) / 60))
}
