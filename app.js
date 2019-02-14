var patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const promptChoice = prompt('Choose one: update, delete, add, reorder');

if (promptChoice == 'add') {
  
  const patientName = prompt('Add a Patient: Enter a patient name');
  patientList.push(patientName);
  alert(patientList);

} else if (promptChoice == 'update') {
  
  const patientName = prompt('Update: Enter a patient name to edit');
  const newPatientName = prompt('Enter the new name');

  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName) {
        patientList[i] = newPatientName;
        alert(patientList);
    } 
  }

} else if (promptChoice == 'delete') {
  const patientName = prompt('Delete: Enter a patient name to edit');

  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === patientName) {
        patientList.splice(i, 1); 
        alert(patientList);
    } 
  }
} else if (promptChoice == 'reorder') {
    const name1 = prompt('Patient 1: Enter a patient name to target');
    const name2 = prompt('Reorder 2: Enter the name you wish to move to ' + name1 + '\'s position');
    let name1Pos;
    let name2Pos;
    var patientList2 = [];

    for (let i = 0; i < patientList.length; i++) {
      if (patientList[i] === name1) {
          name1Pos = i;}
      }

    for (let i = 0; i < patientList.length; i++) {
      if (patientList[i] === name2) {
          name2Pos = i;          
           }
           }
    
        
        patientList.splice(name1Pos, 1, name2);
        patientList.splice(name2Pos, 1, name1);
        patientList2.push.apply(patientList2, patientList);
        alert(patientList2);
    }
  









// /* Imagine your local ER needs an application that manages their triage list.

// New patients are constantly entering the ER so they need to be able to add patient names to the list. 

// Some patients get fed up with the wait time and leave, so they need to be able to delete patients from the list. 

// Occasionally a patient name in entered incorectly, so they need to be able to update a name on the list. 

// And often a patient get sicker during their wait and needs to be switched with a patient higher up on the list, so they need to be able to reorder the list. 

// Using the patientList in the starter code, create all of the following funcionality based on the command entered by the user:


// If the user typed in 'add', prompt them for a patient name, 
// add that patient to the list, and display the list. 
// If the user typed in 'update', prompt them for a patient name,  
// prompt them for a new name, update the name to the new name, and display the list. 
// If the user typed in 'delete', prompt them for a patient name, 
// delete that patient, and display the list.
// If the user typed in 'reorder', prompt them for a 
// patient name, prompt them for another patient name, 
// switch the two entered patients, and display the list.


// HINT: Before you begin, make sure to create a flowchart to keep your ideas organized