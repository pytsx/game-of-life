const delayBtns = BtnSetter(infosContainer, "delay: ", "delay")

delayBtns.addbtn.addEventListener("click", ()=>{
  delay+=10
  UpdateInfo("delay_add", delay)
})
delayBtns.delbtn.addEventListener("click", ()=>{
  delay-=delay <= 0 ? 0 : 10
  UpdateInfo("delay_del", delay)
})

const resolutionBtns = BtnSetter(infosContainer, "resolution: ", "resolution")

resolutionBtns.addbtn.addEventListener("click", ()=>{
  resolution+=1
  UpdateInfo("resolution_add", resolution)
})
resolutionBtns.delbtn.addEventListener("click", ()=>{
  resolution -= resolution <= 1 ? 0 : 1
  UpdateInfo("resolution_del", resolution)
})
