// CONSOLE SLIDES //

function consoleLog() {
  console.log("Just logged to console!");
}

function consoleInfo() {
  console.info("Just an Info!");
}

function consoleError() {
  console.error("BOOM! Error Occured!");
}

function consoleWarn() {
  console.warn("Just a warning!");
}

const listOfSuperheroes = [
  {
    universe: "DC",
    characters: [
      {
        name: "Batman",
        power: "Money"
      },
      {
        name: "Superman",
        power: "Flying"
      },
      {
        name: "Flash",
        power: "Speed"
      }
    ]
  },
  {
    universe: "Marvel",
    characters: [
      {
        name: "Thor",
        power: "Thunder"
      },
      {
        name: "Iron Man",
        power: "Money"
      },
      {
        name: "Hulk",
        power: "Superhuman Strength"
      }
    ]
  }
];

function logListOfHeroes() {
  listOfSuperheroes.forEach(hero => {
    // console.log(`Universe - ${hero.universe}`);
    hero.characters.forEach(hero => {
      console.log(`Name - ${hero.name}`);
      console.log(`Power - ${hero.power}`);
    });
  });
}

function logListOfHeroesGrouped() {
  listOfSuperheroes.forEach(hero => {
    console.group(`Universe - ${hero.universe}`);
    hero.characters.forEach(hero => {
      console.log(`Name - ${hero.name}`);
      console.log(`Power - ${hero.power}`);
    });
    console.groupEnd();
  });
}

function logListOfHeroesGroupedCollapsed() {
  listOfSuperheroes.forEach(hero => {
    console.groupCollapsed(`Universe - ${hero.universe}`);
    hero.characters.forEach(hero => {
      console.group(`${hero.name}`);
      console.log(`Power - ${hero.power}`);
      console.groupEnd();
    });
    console.groupEnd();
  });
}

function consoleClear() {
  console.clear();
}

function consoleTableObject() {
  console.table({
    name: "Ravi",
    role: "UI Dev",
    motto: "YOLO ™️"
  });
}

function consoleTableArray() {
  console.table([
    {
      name: "Ravi",
      role: "UI Dev",
      motto: "YOLO ™️"
    },
    {
      name: "Dude",
      role: "Nope",
      motto: "Coffee ☕"
    }
  ]);
}

function consoleAssertTrue() {
  console.assert(1 == 1, "I have done nothing wrong");
}

function consoleAssertFalse() {
  console.assert(1 == 2, "This shouldn't have happened");
}

function consoleStyle() {
  console.log(
    "%c STYLED CONSOLE MESSAGES",
    "color: white; background-color: black; font-size: 20px;"
  );
}

function consoleStyleCrazy() {
  const styles = [
    "color: white",
    "font-size: 25px",
    "padding: 15px",
    "background: rgb(2,0,36)",
    "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 31%, rgba(0,212,255,1) 100%)"
  ].join("; ");

  console.log("%c Gradients!", styles);
}

////////////////////////
