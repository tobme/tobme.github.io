var mainElement;
var popped = false;

window.onload = function(){
  mainElement = document.getElementById("mainPage");

  createWelcomeView();
  createProjectView("discBot", "Discord Music Bot", "Want to play rickroll when your friends join your discord channel? This is a simple discord bot that plays music when a specific user joins the channel. The project also contains the necessary files for hosting the bot with node.js to keep it online at all hours.", "Images/botGif.gif", "https://github.com/tobme/Discord-Music-Bot");
  createProjectView("tetrisBot", "Tetris Bot", "The good old tetris, however, in this version you can choose a bot to play for you!", "Images/tetrisGif.gif", "https://github.com/tobme/Tetris-Bot");
  createProjectView("blockGame", "Block Game", "A strategy game about Peors journey to Lump. In the game you get to place and point arrows and much more to dictate where Peor is going. Your goal is to get one of the characters to the bus so they can travel to the next level, closer to Lump.", "Images/blockGameGif.gif", "https://github.com/tobme/Block-Game");
  createProjectView("recipeComp", "Recipe Compiler", "A recipe compiler written in C++. The compiler takes a .recipe file, a file written in a recipe programming language and compiles it into an assembly file.", "Images/recipe2.png", "https://github.com/tobme/recipe-compiler");
  createProjectView("blackJack", "Black Jack", "Want to practise your black jack skills to win lots of money at casinos? This game let you play one on one with the bank and try out all the different strategies.", "Images/bj.gif", "https://github.com/tobme/Black-Jack");


  displayView("aboutView");

}

createWelcomeView = function()
{
  const aboutView = document.createElement('div');
  aboutView.id = "aboutView";

  const upperView = document.createElement('div');
  const lowerView = document.createElement('div');
  const bioText = document.createElement('div');
  const bioSubText = document.createElement('div');
  const contactBox = document.createElement('div');
  const gitLink = document.createElement('a');
  var img;
  img = document.createElement("img");
  img.src = "Images/profilbildZoom.jpg";
  img.id = "profilePic"

  backgroundImg = document.createElement("img");
  backgroundImg.src = "Images/top-background.jpeg";
  backgroundImg.id = "backgroundImage"
  upperView.id = "upperView";
  lowerView.id = "lowerView";
  contactBox.id = "contactBox";
  bioText.id = "bioText";
  bioSubText.id = "bioSubText";
  bioText.innerHTML = "Tobias Mellberg";
  bioSubText.innerHTML = "Student at Linköping University</br>Enköping, Sweden";

  mainElement.appendChild(aboutView);
  aboutView.appendChild(upperView);
  aboutView.appendChild(lowerView);
  upperView.appendChild(backgroundImg);
  upperView.appendChild(img);
  upperView.appendChild(bioText);
  upperView.appendChild(bioSubText);
  upperView.appendChild(contactBox);
  makeContactItem("Tobbemellberg@hotmail.se");
  //makeContactItem("GitHub @ Tobias Mellberg");
  const contact = document.createElement('div');
  contact.className = "contactItem";
  contact.innerHTML = "GitHub";
  gitLink.className ="contactItem";
  gitLink.title = "https://github.com";
  gitLink.id = 'githubLink';
  gitLink.href = "https://github.com/tobme?tab=repositories";
  gitLink.appendChild(contact);
  contactBox.appendChild(gitLink);

// lowerView Starts here
  const about = document.createElement('div');
  const aboutText = document.createElement('div');
  about.style.fontSize = "xx-large";
  about.style.marginLeft = "20px";
  about.style.marginTop = "30px";
  about.innerHTML = "About";
  aboutText.innerHTML = "I am a 22 year old engineering student that likes to make projects on my free time.</br> Check out my projects on this site, for further information go to my GitHub page.";
  aboutText.id = "about";

  const programmingHeadline = document.createElement('div');
  programmingHeadline.style.fontSize = "xx-large";
  programmingHeadline.style.marginLeft = "20px";
  programmingHeadline.style.marginTop = "50px";
  programmingHeadline.innerHTML = "Technical Skills";

  const languageForm = document.createElement('div');
  languageForm.id = "languageForm";

  lowerView.appendChild(about);
  lowerView.appendChild(aboutText);
  lowerView.appendChild(programmingHeadline);
  lowerView.appendChild(languageForm);
  makeSkill("C++");
  makeSkill("Java");
  makeSkill("Python");
  makeSkill("Assembly");
  makeSkill("C");
  makeSkill("Sql");
  makeSkill("C#");
  makeSkill("Git");
  makeSkill("LaTeX");
  makeSkill("Bash");
  makeSkill("Linux");

}

makeSkill = function(name)
{
    const skill = document.createElement('div');
    skill.className = "languageItem";
    skill.innerHTML = name;
    languageForm.appendChild(skill);
}
makeContactItem = function(name)
{
    const contact = document.createElement('div');
    contact.className = "contactItem";
    contact.innerHTML = name;
    contactBox.appendChild(contact);
}

createProjectView = function(id, title, desc, gifLocation, link) {
    var projectView = document.createElement('div');
    projectView.id = id;
    mainElement.appendChild(projectView);

    const upperView = document.createElement('div');
    const lowerView = document.createElement('div');
    upperView.id = "projectUpperView";
    lowerView.id = "lowerView";
    projectView.appendChild(upperView);
    projectView.appendChild(lowerView);

    const headLine = document.createElement('h1');
    headLine.innerHTML = title;
    headLine.className = "projectHeadLine";
    upperView.appendChild(headLine);

    const gif = document.createElement('img');
    gif.src = gifLocation;
    gif.id = "projectGif";
    upperView.appendChild(gif);

    const about = document.createElement('div');
    const aboutText = document.createElement('div');
    about.innerHTML = "About";
    about.style.fontSize = "xx-large";
    about.style.marginLeft = "20px";
    about.style.marginTop = "30px";
    about.innerHTML = "About";

    aboutText.innerHTML = desc;
    aboutText.id = "about";
    lowerView.appendChild(about);
    lowerView.appendChild(aboutText);

    const furtherInf = document.createElement('div');
    const furtherInfText = document.createElement('div');
    const gitLink = document.createElement('a');
    furtherInf.innerHTML = "Further Information";
    furtherInf.style.fontSize = "xx-large";
    furtherInf.style.marginLeft = "20px";
    furtherInf.style.marginTop = "30px";
    furtherInfText.id = "about";
    furtherInfText.innerHTML = "For further information visit my GitHub page";
    furtherInfText.style.marginTop = "30px";
    gitLink.title = link;
    gitLink.id = 'githubLink';
    gitLink.href = link;
    lowerView.appendChild(furtherInf);
    gitLink.appendChild(furtherInfText)
    lowerView.appendChild(gitLink);

}

displayView = function(name) {
  // Set all views to nonew
  document.getElementById("aboutView").style.display = "none";
  document.getElementById("discBot").style.display = "none";
  document.getElementById("tetrisBot").style.display = "none";
  document.getElementById("blockGame").style.display = "none";
  document.getElementById("recipeComp").style.display = "none";
  document.getElementById("blackJack").style.display = "none";

  var view = document.getElementById(name);

  view.style.display = "block";
  save_to_history({"key":name}, name, name);
}

save_to_history = function(state, title, url)
{
  if (url != "/") // If the url isn't / the url uses a # url
    url = "#"+url;
  if (!popped) // Doesnt save the history if the website has been popped
    history.pushState(state, title, url)
  popped = false;
}

window.onpopstate = function(){
      var url = document.URL.substring(document.URL.indexOf('#') + 1)
      console.log(url);
      popped = true; // Makes sure that the history doesnt save when its popped
      displayView(url)

}
