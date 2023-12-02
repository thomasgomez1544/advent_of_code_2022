const cycleData = array => {
    for(x = 0; x < array.length; x++) {
        let tempArray = array.split("\n\n");
        let singleArray = tempArray[x].split("\n")
        let sumOfCalories = 0
        for(i = 0; i < singleArray.length; i++) {
            sumOfCalories += Number(singleArray[i])
        }
    console.log(sum)
    }
}

cycleData(data)