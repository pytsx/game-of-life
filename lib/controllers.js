const delayBtns = BtnSetter(infosContainer, "delay: ", "delay")
const resolutionBtns = BtnSetter(infosContainer, "resolution: ", "resolution")

const controllers =[
  {
    element: delayBtns.addbtn,
    variable: delay,
    action: () => delay+=10,
    updateId: "delay_add"
  },
  {
    element: delayBtns.delbtn,
    variable: delay,
    action: () => delay-=delay <= 0 ? 0 : 10,
    updateId: "delay_del"
  },
  {
    element: resolutionBtns.addbtn,
    variable: resolution,
    action: () => resolution+=1,
    updateId: "resolution_add"
  },
  {
    element: resolutionBtns.delbtn,
    variable: resolution,
    action: () => resolution -= resolution < 3 ? 0 : 1,
    updateId: "resolution_del"
  }
]

controllers.forEach(controller => {
  ControllerListener(controller)
})
