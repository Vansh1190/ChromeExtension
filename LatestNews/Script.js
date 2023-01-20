let func = () => {
  document.getElementById("jokeElement").innerHTML = `
  <img id="loading" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="">
  `
  api = fetch("https://inshorts.deta.dev/news?category=technology").then((response) => {
    return response.json()
  }).then(async (e) => {
    console.log(e)
    document.getElementById("jokeElement").innerHTML = ""
    e.data.forEach((elem) => {
      if (!elem.readMoreUrl) {
        document.getElementById("jokeElement").innerHTML += `
          <div class="cont">
          <p id="title">${elem.title}</p>
          <img class="newsImg" src = "${elem.imageUrl}">
          <small>${elem.date}</small>
          </div>
          
          `
      }
      else {

        document.getElementById("jokeElement").innerHTML += `
          <div class="cont">
          <p id="title">${elem.title}</p>
          <a href="${elem.readMoreUrl}" target="_blank"><img class="newsImg" src = "${elem.imageUrl}"></a>
          <small>${elem.date}</small>
          <small><a href="${elem.readMoreUrl}" target="_blank" >Know more.</a></small>
          </div>
          
          `
      }
    })

  })
}
func()
document.getElementById("refresh").addEventListener("click", function () {
  func()
})









// all
// national //Indian News only
// business
// sports
// world
// politics
// technology
// startup
// entertainment
// miscellaneous
// hatke
// science
// automobile


