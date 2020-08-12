const start = document.getElementById(`start`);
const questionsELem = document.getElementById(`questions`);
const counter = document.getElementById(`counter`);
const choiceA = document.getElementById(`A`);
const choiceB = document.getElementById(`B`);
const choiceC = document.getElementById(`C`);


const questions = [

    {
        Question1 : What name is given to the device used to produce an intense and narrow beam of light?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :


    },
    {
        Question2 : Which two British engineers got together in 1905 to design and produce cars.
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :

    },
    {
        Question3 : Which was France's first mass-producer of cars?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :
    },
    {
        Question4 : In the baking industry fermentation is used to produce which gas?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :
    },
    {
        Question5 : What kind of mechanical aid is now frequently used in assembly lines?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :
    },
    {
        Question6 : What did the transistor replace?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :
    },
    {
        Question7 : Which computer language is an acronym of the name of the world's first computer programmer?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :
    },
    {
        Question8 : Which vertical take-off jet made its first flight in 1966?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :
    },
    {
        Question9 : Where in airplanes are the ailerons positioned?
        ChoiceA :
        ChoiceB :
        ChoiceC :
        Correct :
    },
    {
        Question10 : Which company created history with the first front-wheel drive in 1934?
        ChoiceA :
        ChoiceB : Citroen
        ChoiceC :
        Correct : B
    },
    {
        Question11 : What name is given to the displays commonly seen in notebook computers and pocket calculators?
        ChoiceA : Liquid Crystal Display
        ChoiceB :
        ChoiceC :
        Correct : A
    },
    {
        Question12 : When did Marconi transmit the first radio signals across the Atlantic?
        ChoiceA :
        ChoiceB : 1901
        ChoiceC :
        Correct : B
    },
    {
        Question13 : Who produced the world's first petrol-driven motor vehicle?
        ChoiceA :
        ChoiceB : Karl Benz
        ChoiceC :
        Correct : B
    },
    {
        Question14 : The external-combustion engine is best seen in which type of engine?
        ChoiceA :
        ChoiceB :
        ChoiceC : Steam engine
        Correct : C
    },
    {
        Question15 : How many Ford Model T cars were produced between 1908 and 1927?
        ChoiceA :
        ChoiceB :
        ChoiceC : 15 million
        Correct : C
    },
    {
        Question16 : Who designed the Volkswagen Beetle?
        ChoiceA :
        ChoiceB : Ferdinand Porsche
        ChoiceC :
        Correct : B
    },
    {
        Question17 : What form of transport was initially a form of hobby-horse?
        ChoiceA : Bicycle
        ChoiceB :
        ChoiceC :
        Correct : A
    },
    {
        Question18 : Which Rolls-Royce car was produced between 1906 and 1925?
        ChoiceA :
        ChoiceB :
        ChoiceC : Sliver Ghost
        Correct : C
    },
    {
        Question19 : Spinnerets are used in the manufacture of which type of material?
        ChoiceA :
        ChoiceB :
        ChoiceC : Nylon
        Correct : C
    },
    {
        Question20 : What name is given to the type of engine where a stream of hot gasses provides propulsion?
        ChoiceA :
        ChoiceB :Jet engine
        ChoiceC :
        Correct : B
    },
  
];  

const buttonElem = document.getElementById(`button`);

//const ranQuestionList = [];

const questions = () => {
    const questionsList = Math.floor(Math.random() * (questions))
}

for(let a of questions){
    console.log()
}