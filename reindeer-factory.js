/* Create a function that stores the colors in an array and can interate through each color..stopping each time it produces a color(yeild) */

const colorGenerator = function* () {
const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"] //colors
let counter = 0 //starting counter at 0
                
    while (counter < colors.length) {
    yield currentColor = colors[counter]
    counter += 1 //incrementing the counter
        }
    
    }
//Create INSTANCE of generator
const colorFactory = colorGenerator()


const reindeerFactory = function (name) {
    return Object.create(null, {
        "name": 
        { 
            value: name,
            enumerable: true 
        },
        "color": 
        { 
            value: colorFactory.next().value, 
            enumerable: true 
        },
        
    })
}




const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []
    // Write a for loop that looks at each reindeer
    for (let index = 0; index < reindeer.length; index++) {
       let processedReindeer = reindeerFactory(reindeer[index])
        coloredReindeer.push(processedReindeer)
        
    }

    // Return coloredReindeer array
    return coloredReindeer
}





