
import "./App.css";
import { React, useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [subjects, setSubjects] = useState({
    english: true,
    maths : false,
    physics : false,
  });
  
  const [resume, setResume] = useState('');
  const [url, seturl] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      firstName,
      lastName, 
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectedOption,
      about,
    );
  };

  const handleReset = () => {
    setFirstName('');
    setLastName(''); 
    setEmail('');
    setContact('');
    setGender('');
    setSubjects({
      english: true,
      maths : false,
      physics : false,
    });
    setResume('');
    seturl('');
    setSelectedOption('');
    setAbout('');
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <fieldset>
        <form action = "#" method = "get">
          <label for = "firstName">First Name*</label>
            <input type = "text" 
                    name = "firstName"
                    id = "firstName" 
                    value = {firstName} 
                    onChange={(e) => 
                      setFirstName(e.target.value)
                    }
                    placeholder = "Enter your first name"
                    required
                  />

                  <label for = "lastName">Last Name*</label>
                  <input 
                    type = "text"	
                    name = "lastName"
                    id = "lastName"
                    value = {lastName}
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }
                    placeholder = "Enter your last name"
                    required
                  />

                  <label for = "email">Email*</label>
                  <input
                    type = "email"
                    name = "email"
                    id = "email"
                    value = {email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder = "Enter your email"
                    required
                  />

                  <label for = "contact">Contact*</label>
                  <input
                    type = "text"
                    name = "contact"
                    id = "contact"
                    value = {contact}
                    onChange={(e) =>
                      setContact(e.target.value)
                    }
                    placeholder = "Enter your contact number"
                    required
                  />

                  <label for = "gender">Gender*</label>
                  <select
                    name = "gender"
                    id = "gender"
                    value = {gender}
                    onChange={(e) =>
                      setGender(e.target.value)
                    }
                    required
                  >
                    <option value = "">Select</option>
                    <option value = "male">Male</option>
                    <option value = "female">Female</option>
                    <option value = "other">Other</option>
                  </select>
                  
                  <fieldset>
                    <legend>Subjects</legend>
                    <label for = "english">English</label>
                    <input
                      type = "checkbox"
                      name = "english"
                      id = "english"
                      checked = {subjects.english}
                      onChange={(e) =>
                        setSubjects({
                        
                          ...subjects,
                          english: e.target.checked,
                        })
                      }
                    />

                    <label for = "maths">Maths</label>
                    <input
                      type = "checkbox"
                      name = "maths"
                      id = "maths"
                      checked = {subjects.maths}
                      onChange={(e) =>
                        setSubjects({
                          ...subjects,
                          maths: e.target.checked,
                        })
                      }
                    />

                    <label for = "physics">Physics</label>
                    <input
                      type = "checkbox"
                      name = "physics"
                      id = "physics"
                      checked = {subjects.physics}
                      onChange={(e) =>
                        setSubjects({
                          ...subjects,
                          physics: e.target.checked,
                        })
                      }
                    />
                  </fieldset>
                
                  <label for = "resume">Resume</label>
                  <input
                    type = "file"
                    name = "resume"
                    id = "resume"
                    value = {resume}
                    onChange={(e) =>
                      setResume(e.target.value)
                    }
                  />

                  <label for = "url">Url</label>
                  <input
                    type = "url"
                    name = "url"
                    id = "url"
                    value = {url}
                    onChange={(e) =>
                      seturl(e.target.value)
                    }
                  />

                  <label for = "selectedOption">Selected Option</label>
                  <select
                    name = "selectedOption"
                    id = "selectedOption"
                    value = {selectedOption}
                    onChange={(e) =>
                      setSelectedOption(e.target.value)
                    }
                  >
                    <option value = "">Select</option>
                    <option value = "option1">Option 1</option>
                    <option value = "option2">Option 2</option>
                    <option value = "option3">Option 3</option>
                  </select>

                  <label for = "about">About</label>
                  <textarea
                    name = "about"
                    id = "about"
                    value = {about}
                    onChange={(e) =>
                      setAbout(e.target.value)
                    }
                  />
                  <button
                    type = "submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type = "reset"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App