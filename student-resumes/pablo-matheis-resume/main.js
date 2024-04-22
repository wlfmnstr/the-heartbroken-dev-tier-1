let resume = `# Pablo Matheis
636 198 170 | pablomatheis@gmail.com | Software Dev
📍 Location: Málaga, Andalucía, Spain "the famous Costa del Sol".
⏰ Age: 16 (Yes, I know, I look younger. It's the baby face charm.)
🔥 Objective: To conquer the programming world one line of code at a time.


### Professional Highlights:
2020/3 - Present
- Developed my first "real" project at the tender age of 13 (a python one)- a Duolingo bot that earned me not just French points but also some serious 💸💸 from my classmates. Merci beaucoup 🥐!
- Jumped into the wild world of freelancing on Fiverr, where I earned some cash and bought my first macbook air (yes, mac is better than windows 💪).
- Expanded my coding toolkit to include HTML, CSS, and JavaScript for web development.
- Learned C# for Unity and C++ for Unreal Engine 5 because why settle for one game engine when you can conquer them all? 👾
- Worked at [Tupl](https://tupl.com), [ParatyTech](https://paratytech.com) and [DataSeekers](https://dataseekers.com)
- Tried my hand at entrepreneurship with my first startup, [BetPuppet](https://betpuppet.com). It may have failed miserably, but hey, at least the website is still up! (Feel free to visit and mourn its glorious downfall.)

### Personal interests:
2007 - Present
- Karting enthusiast 🏎️. Yes, I'm talking about those tiny cars that make you feel like a Formula 1 driver on a budget.
- Videogame aficionado. From saving princesses to slaying dragons, I've done it all (virtually, of course).
- Poker and chess ♤ ♘.

### Education:
2012 - Present
- Currently navigating the dangerous waters of a bachelor's degree. ⚓️
- Honing my skills in business classes, learning PyTorch (and all the data scientist / ai stuff), tensorflow and cybersecurity.

### Skills:
2020 - Present
- Fluent in Spanish and English.
- Python
- HTML / CSS
- JavaScript
- C#
- C++
- Chess (debatable)
- Poker (also debatable)
- Driving (definitely non debatable)

### Special Mentions:
The heroes
- My laptop, who has been my loyal companion through countless lines of code and late-night debugging sessions.
- The infinite cups of coffee that fuel my coding adventures. Without you, I'd probably be asleep right now.
`


let code_ready = `/*
 * Hello, my name is Pablo
 * I want to show you my personal resume using code...
 * Inspired by http://strml.net
 * 
 * 
 * So, here we go!
 */

/* Add a transition to make changes look smoother */
* {
  transition: all 0.3s;
}
/* Add a background color */
body {
  background: #455A64;
}
/* Add a border to the code block */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* Make the code highlighted */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * Add some effects!
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* Now, let's start writing the resume！ */

/* Make some space for the resume beside the code block */
#options {
  width: 32%;
}
/* Prepare a whiteboard */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* Next, please see on the right */

`

let code_marked = `
/* 
 * Next, I'm going to use an excellent library called marked.js
 * to turn my resume into a Markdown document
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* Let's adjust my resume to make it look even better */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul, #paper ol {
  padding-left: 20px;
}
/* Add more spacing between each module */
#paper > div {
  margin: 24px 0;
}
#paper em {
  color: peru;
  font-style: normal;
}

/* Now for fine-tuning */

/* First, adjust my "Basic Information" section */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* Then, the others sections */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 4px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}
#jobs > .single {
  margin-bottom: 6px;
}

/* Adjust the position of dates */
#jobs > .single, #education > .single, #works > .single {
  position: relative;
}
#jobs p, #education p, #works p {
  position: absolute;
  right: 0px;
  top: 4px;
}


/* Now let's add a profile picture！ */
`

let code_photo = `
/* Let's place my profile picture in the personal information section */
#information {
  position: relative;
}
#information .avatar {
  width: 100px;
  position: absolute;
  right: 0px;
  top: 0px;
}
/* Hide any extra pictures~ */
#information {
  overflow: hidden;
}

/* 
 * There we go, my profile picture is here
 * Looking forward to work with you
 * 
 *   —— Pablo Matheis 2024/01 :)
 */
`

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    $('#skip_inputResume').remove()
    adjustResume().then(() => {
      addAndAdjustAvatar().then(showDownloadButton)
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 1, duration = 80
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = 'Slow mode animation'
      duration = 70
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = 'Fast mode animation'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = 'Turbo mode animation'
      duration = 0
      break
    default:
      return 0
  }
})

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume() {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 1000)
  })
}
function adjustResume() {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 1000)
    })
  })
}
function structureResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="education"></div>')

  $('#information').append($('h1'), $('p').first())

  const skills_header = $('h2:contains("技能")')
  $('#skills').append(skills_header, skills_header.next('ul')[0])

  $('#education').append($('h2:contains("教育")'), $('<div class="single"></div>').append($('h3:contains("学院")'), $('p').last(), $('ul').last()))

  $('#jobs').append($('h2:contains("工作")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="single"></div>')
      .append($(element), $(element).next('p')[0], $(element).next('p').next('ul')[0])
      .appendTo('#jobs')
  })

  $('#works').append($('h2:contains("项目")'))
  const project_title_array = $('#paper > h3')
  project_title_array.each((index, element) => {
    $('<div class="single"></div>')
      .append($(element), $(element).next('p')[0], $(element).next('p').next('ul')[0])
      .appendTo('#works')
  })

}
function addAndAdjustAvatar() {
  return new Promise(resolve => {
    $('#information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
      $('#paper').addClass('breathe')
      $('#code_body').removeClass('breathe')
      $('.skipper').remove()
      setTimeout(resolve, 1000)
    })
  })
}
function showDownloadButton() {
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}
