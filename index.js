function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = "go to the office") =>
     `This Monday, I will ${activity}.`;

     function wrapAdjective(string = "*") {
        
     }

     function wrapAdjective(hardWorker= "*") {
        return function (special){
            return `You are ${hardWorker}${special}${hardWorker}!`;
        }
     }

     wrapAdjective("||")("a dedicated programmer")