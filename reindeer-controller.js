//Connect with HTML class name
let reindeerEl = document.getElementsByClassName("colored-reindeer")[0]

const reindeerArray = coloredReindeerBuilder()
console.log(reindeerArray)

//for loop nested in the for in loop, to iterated through
    for (var i = 0; i < reindeerArray.length; i++) {
        var currentObject = reindeerArray[i];
        

    reindeerEl.innerHTML += `
        <article id="reindeer-article">
        <section style="color:${currentObject.color}">${currentObject.name}</section>
        </article>
     `
    }