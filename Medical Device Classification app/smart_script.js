/***************** Variables Declaration *****************/


const quizData = [
    { rule: 1, connected_with: [], subrule: 0, question: 'Τhe device does not touch the patient or comes in contact only with intact skin', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Non Invasive' },
    { rule: 2, connected_with: [1, 2], subrule: 0, question: 'The device is intended for channelling or storing for eventual administration', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Non Invasive' },
    { rule: 0, connected_with: [], subrule: 1, question: 'The device is intented for using blood, other blood fluids, organs, tissues ', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Non Invasive' },
    { rule: 0, connected_with: [], subrule: 2, question: 'The device is connected to an active medical device', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Non Invasive' },
    { rule: 3, connected_with: [3], subrule: 0, question: 'The device is intended for modifying biological or chemical composition of blood, body liquids or other liquids intended for infusion', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Non Invasive' },
    { rule: 0, connected_with: [], subrule: 3, question: 'The device is intented only for filtration,centrifugation or exchange of gas or heat', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Non Invasive' },
    { rule: 4, connected_with: [4, 5], subrule: 0, question: 'Τhe device comes in contact with injured skin (mechanical barrier-absorb exudates)', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Non Invasive' },
    { rule: 0, connected_with: [], subrule: 4, question: 'The device is intented only for wounds which breach dermis and heal only by secondary intent', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Non Invasive' },
    { rule: 0, connected_with: [], subrule: 5, question: 'The device is intented only to manage microenvironment of injured skin or mucous membrane', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Non Invasive' },
    { rule: 5, connected_with: [6, 7, 8, 9, 10, 11], subrule: 0, question: 'Τhe device is invasive in body orifice or stoma not surgically ', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 6, question: 'Τhe device is invasive in body orifice or stoma not surgically for transient use', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 7, question: 'Τhe device is invasive in body orifice or stoma not surgically for short-term use', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 8, question: 'Τhe device is invasive in oral,ear or nasal cavity', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 9, question: 'Τhe device is invasive in body orifice or stoma not surgically for long-term use', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 10, question: 'Τhe device is invasive in oral,ear or nasal cavity', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 11, question: 'Τhe device is invasive in body orifice or stoma not surgically and it is connected to an active medical device of class IIa or higher', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Invasive' },
    { rule: 6, connected_with: [12, 13, 14, 15, 16], subrule: 0, question: 'Τhe device is invasive in body orifice or stoma surgically for transient use', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 12, question: 'Τhe device is intended for use in direct contact with the heart or central circulatory system or the central nervous system', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 13, question: 'Τhe device is a reusable surgical instrument', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 14, question: 'Τhe device is intended to supply energy in the form of ionising radiation', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 15, question: 'Τhe device has a biological effect or are wholly or mainly absorbed', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 16, question: 'Τhe device is intented to administer medicinal products by means of a delivery system in a manner that is potentially hazardous', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 7, connected_with: [17, 18, 19, 20, 21], subrule: 0, question: 'Τhe device is invasive in body orifice or stoma surgically for short-term use', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 17, question: 'Τhe device is intended to control, diagnose, monitor or correct a defect of the heart or of the central circulatory system through direct contact', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 18, question: 'Τhe device is intended for use in direct contact with the heart or central circulatory system or the central nervous system', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 19, question: 'Τhe device is intended to supply energy in the form of ionising radiation', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 20, question: 'Τhe device has a biological effect or are wholly or mainly absorbed', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 21, question: 'Τhe device is intended to undergo chemical change in the body or administer medicines except if the devices are placed in the teeth', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 8, connected_with: [22, 23, 24, 25], subrule: 0, question: 'Τhe device is invasive in body orifice or stoma surgically for long-term use or is an implantable device', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 22, question: 'Τhe device is intended to be placed in the teeth', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 23, question: 'Τhe device is intended for use in direct contact with the heart or central circulatory system or the central nervous system', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 24, question: 'Τhe device has a biological effect or are wholly or mainly absorbed', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Invasive' },
    { rule: 0, connected_with: [], subrule: 25, question: 'Τhe device is intended to undergo chemical change in the body or administer medicines except if the devices are placed in the teeth', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Invasive' },
    { rule: 13, connected_with: [], subrule: 0, question: 'The device is active', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Active' },
    { rule: 9, connected_with: [26, 27, 28, 29], subrule: 0, question: 'The device is an active therapeutic devices intended to administer or exchange energy', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 26, question: 'Τhe device is intented to administer or exchange energy in a manner that is potentially hazardous', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 27, question: 'The device is intended to control or monitor, or intended directly to influence the performance of the performance of active therapeutic class IIb devices', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 28, question: 'The device is intended to emit ionizing radiation for therapeutic purposes ', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 29, question: 'The device is intended for controlling, monitoring or directly influencing the performance of active implantable devices', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Active' },
    { rule: 10, connected_with: [30, 31, 32, 33], subrule: 0, question: 'The device is intended for diagnosis, may supply energy, for "imaging purposes" to monitor vital physiological processes', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 30, question: "The device is intended to supply energy which will be absorbed by the human body to illuminate the patient's body, in the visible spectrum", a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 31, question: 'The device is intended to image in vivo distribution of radiopharmaceuticals', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 32, question: 'The device is intended to monitor of vital physiological processes, where the nature of variations of could result in immediate danger to the patient', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 33, question: 'The device is emitting ionizing radiation and related monitors in medical procedure', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 11, connected_with: [34, 35, 36, 37, 38], subrule: 0, question: 'The device is a software', a: 'Yes', b: 'No', correct: 'a', type: 1, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 34, question: 'The software is intended to provide information which is used to take decisions with diagnosis or therapeutic purposes', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 35, question: "The software has an impact that may cause death or an irreversible deterioration of a person's state of health", a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 36, question: "The software has an impact that may cause a serious deterioration of a person's state of health or a surgical intervention", a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 37, question: 'The software is intended to monitor physiological processes', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 38, question: 'The software is intended to monitor of vital physiological processes, where the nature of variations of could result in immediate danger to the patient', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 12, connected_with: [39], subrule: 0, question: 'The device is intended to administer and/or remove medicinal products, body liquids or other substances to or from the body', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Active' },
    { rule: 0, connected_with: [], subrule: 39, question: 'Τhe device is intented to administer medicines in a manner that is potentially hazardous', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Active' },
    { rule: 14, connected_with: [], subrule: 0, question: 'The device is incorporating integral medicinal product that is liable to act in ancillary way on human body', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Special Rules' },
    { rule: 15, connected_with: [40], subrule: 0, question: 'The device is used for contraception or prevention of sexually transmitted diseases', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 40, question: 'The device is implantable or long-term invasive', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Special Rules' },
    { rule: 16, connected_with: [41], subrule: 0, question: 'The device is intended specifically to be used for disinfecting, cleaning, rinsing or, where appropriate, hydrating contact lenses', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 41, question: 'The device is intended specifically to be used for disinfecting or sterilising medical devices other than by physical action', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Special Rules' },
    { rule: 17, connected_with: [], subrule: 0, question: 'The device is specifically intended for recording of diagnostic images generated by X-ray radiation', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Special Rules' },
    { rule: 18, connected_with: [], subrule: 0, question: 'The device is manufactured utilising tissues or cells of human or animal origin, or their derivatives, which are non-viable or rendered non-viable', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Special Rules' },
    { rule: 19, connected_with: [42, 43, 44], subrule: 0, question: 'The device is incorporating or consisting of nanomaterial', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 42, question: 'The device presents a high or medium potential for internal exposure', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 43, question: 'The device presents a low potential for internal exposure', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 44, question: 'The device presents a negligible potential for internal exposure', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Special Rules' },
    { rule: 20, connected_with: [45], subrule: 0, question: 'The device is invasive and intended to administer medicinal products by inhalation', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 45, question: 'The device has an impact on the efficacy and safety of the administered medicinal product or it is intended to treat life-threatening conditions', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Special Rules' },
    { rule: 21, connected_with: [46, 47], subrule: 0, question: 'The device is intended to be introduced into the human body and is composed of substances', a: 'Yes', b: 'No', correct: 'a', type: 3, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 46, question: 'The device or its  products of metabolism, are systemically absorbed by the human body or in the stomach or lower gastrointestinal tract', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Special Rules' },
    { rule: 0, connected_with: [], subrule: 47, question: 'The device is applied to the skin or if they are applied in the nasal or oral cavity as far as the pharynx', a: 'Yes', b: 'No', correct: 'a', type: 2, for_devices: 'Special Rules' },
    { rule: 22, connected_with: [], subrule: 0, question: 'The device is active therapeutic devices with an integrated or incorporated diagnostic function which significantly determines the patient management', a: 'Yes', b: 'No', correct: 'a', type: 4, for_devices: 'Special Rules' },



];  // Array of MDR Rules object
/*  Array object properties
    rule: number of rule as shown in EU directive,
    connected_with: array of connected subrules, 
    subrule: number of subrule as shown in EU directive, 
    question: String representing the rule,
    a: 'Yes' //possible answer, 
    b: 'No' //possible answer,
    correct: 'a' //"correct" answer,
    type: number 1-4 representing the index of classlist which contains the class description,
    for_devices: String representing the nature of device (invasive, non invasive, active, special rules) 
 */

let quizData_replica = quizData // Replica of the array Rules
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')
const classlist = ["class I", "class IIa", "class IIb", "class III"]


let currentQuiz = 0 // index of object of Rules array
let type = 0 // class of object but named as type cause class is a reserved term

/***************** Main function *****************/
loadQuiz() // Just a single function used



/***************** Functions Declaration *****************/

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData_replica[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b

}// Saves the user's choices in the global variables

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}// Deselects a user's choice when another radio button is clicked

function getSelected() {
    let answer
    //for each answer chek if its radio button is selected
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            // and update its property
            answer = answerEl.id
        }
    })
    return answer
}// Characterise a user's choice as selected when radio button is clicked

function questionPropagation() {
    // for each subrule connected to a rule that is not applicable 
    // find its index
    quizData_replica[currentQuiz].connected_with.forEach(node => {
        const indexOfObject = quizData_replica.findIndex(object => {
            return object.subrule === node;
        });
        //delete this node form the array of rules
        quizData_replica.splice(indexOfObject, 1)

    })
}// Propagate constraints to question domain, namely the Array of Rules (const quizData)


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        //Check if it is an invasive device
        if (answer === quizData_replica[currentQuiz].correct) {
            if (currentQuiz === 0) {
                quizData_replica = quizData_replica.filter(item => item.for_devices !== "Invasive")
            }
            //In case of overlap choose the most strict rule class
            if (type <= quizData_replica[currentQuiz].type) {
                type = quizData_replica[currentQuiz].type

            }
            //If not check if it is active 
        } else {
            if (quizData_replica[currentQuiz].rule === 13) {
                quizData_replica = quizData_replica.filter(item => item.for_devices !== "Active")
            }
            if (quizData_replica[currentQuiz].connected_with.length !== 0) {

                questionPropagation()
            }
        }
        //Proceed until the questions finish
        currentQuiz++

        if (currentQuiz < quizData_replica.length) {
            loadQuiz()
        } else {

            // Create an HTML message to show the result (index of classlist =type-1 javascript indexing restriction)
            quiz.innerHTML = `
           <h2> The class of your device is ${classlist[type - 1]} </h2>

           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})// Activated when a user clicks submit button