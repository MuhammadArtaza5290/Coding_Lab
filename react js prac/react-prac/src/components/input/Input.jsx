import React,{useState} from 'react'
const Input = () => {
  // const [name, setName] = useState('');
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [language, setLanguage] = useState("");
  const [about, setAbout] = useState("");
  
  const onChangeIdHandler =(e) =>{
    setUserId(e.target.value);
    // console.log(userId);
  }
  const onChangePasswordHandler =(e)=>{
    setPassword(e.target.value);
  }
  const onChangeNameHandler =(e)=>{
    setUserName(e.target.value);
  }
  const onChangeAddressHandler =(e)=>{
    setAddress(e.target.value);
  }
  const onChangeCountryHandler =(e)=>{
    setCountry(e.target.value);
  }
  const onChangeZipCodeHandler =(e)=>{
    setZipCode(e.target.value);
  }
  const onChangeEmailHandler =(e)=>{
    setEmail(e.target.value);
  }
  const onChangeSexHandler =(e)=>{
    setSex(e.target.value);
  }
  const onChangeLanguageHandler =(e)=>{
    if (e.target.name === "english" && e.target.checked) {
      setLanguage("English")
    }else if (e.target.name === "nonEnglish" && e.target.checked) {
      setLanguage("Non English")
    }else{
      setLanguage("")
    }
  };
  const onChangeAboutHandler =(e)=>{
    setAbout(e.target.value);
  }

    // const {name, checked} = e.target;
    // setLanguage((prevState) => ({
    //   [name]: checked
    // }));
    

  
  
 

  const handleClick = () => {
    let idd = null;
    if (userId.length >= 5 && userId.length <= 12) {
     idd = userId
      // console.log(idd);
    }
    else if (userId == "") {
      alert("Enter your UserId");
      return;
    }else{
      alert("UserId should be between 5 and 12 characters long");
      return;
    }
    const isNumeric = /^\d+$/.test(userId); // This regular expression checks if the string is only numbers
    if (!isNumeric) {
      alert("UserId should contain only numeric characters (no alphabets or special characters)");
      return; // Exit the function if the condition fails
    }


      const isPassword = /^[a-zA-Z0-9]+$/.test(password)
      if (!isPassword) {
        alert("Blank space and special charaters are not allowed.")
        return;
      }else if (password.length >= 7 && password.length <= 12) {
        console.log(password);
      }
      else{
        console.log("UserId should be between 5 and 12 characters long");
        return;
      }



    const isAlpabet = /^[a-zA-Z\s]+$/.test(userName);
      if (!isAlpabet) {
        alert("UserName should contain only Alphabet")
        return;
      }else if(userName.length <= 40){
        console.log(userName);
      }else if (userName === "") {
        alert("Enter Your name")
      }else{
        alert("UserName should contain only 40 characters");
        return;
      }


      const isZipCode = /^\d+$/.test(zipCode);
      if (!isZipCode) {
        alert("Zip code must be numeric value")
        return;
      }


      if (email === "") {
        alert("Enter Your email")
        return;
      }
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      if (!isEmail) {
        alert("Invalid email format")
        return;
      }else{
        console.log(email)
      }

      if (!sex) {
        alert("Enter your sex")
        return;
      }

      if (language == "") {
        alert("Language is required")
        return;
      }

      if (idd && password && userName && country && zipCode && email && sex && language) {
        alert('Your Response is recorded')
      }
       


  const userData = {
    Id: idd, 
    Password: password,  // password is a variable that stores the password entered by the user.
    Name: userName,
    Address: address,
    Country: country,  // city is a variable that stores the city selected by the user.
    ZipCode: zipCode,  // state is a variable that stores the state selected by the user.
    Email: email,  // email is a variable that stores the email entered by the user.
    Sex: sex,
    Language: language,  // language is a variable that stores the language selected by the user.
    About: about,  // about is a variable that stores the about entered by the user.
  };
    console.log(userData); 
  }

  
  
  return (
    <div>
       {/* <h1 onMouseOver={handleOver}>Form to enter data.</h1> */}
       <label htmlFor="">UserId:</label>
       <input type="text" placeholder='Enter Your Id' onChange={onChangeIdHandler} /> <br />
       <label htmlFor="">Password</label>
       <input type="text"  placeholder='Enter Your Password' onChange={onChangePasswordHandler}/> <br />
       <label htmlFor="">Name:</label>
       <input type="text" placeholder='Enter your name' onChange={onChangeNameHandler} /> <br />
       <label htmlFor="">Address</label>
       <input type="text" placeholder='Enter your address' onChange={onChangeAddressHandler}/> <br />
       <label htmlFor="myDropdown"> Country: </label>
      <select onChange={onChangeCountryHandler}>
        <option value="" disabled>Select a City</option> {/* Placeholder option */}
        <option value="England">England</option>
        <option value="Pakistan">Pakistan</option>
        <option value="America">America</option>
        <option value="Dubai">Dubai</option>
      </select> <br />
      <label htmlFor="">Zip Code</label>
       <input type="text" placeholder='Enter your zip code' onChange={onChangeZipCodeHandler}/> <br />
       <label htmlFor="">Email</label>
       <input type="text" placeholder='Enter your email' onChange={onChangeEmailHandler}/> <br />
       <label htmlFor="sex">Sex:</label>
       <input type="radio" name='sex' value='male' checked={sex ==='male'} onChange={onChangeSexHandler}/>
       <label htmlFor="male">Male</label>
       <input type="radio" name='sex' value='female' checked={sex === 'female'} onChange={onChangeSexHandler}/>
       <label htmlFor="female">Female</label> <br />


       <label >Language: </label>
       <input type="checkbox" name="english" checked={language === "English"} onChange={onChangeLanguageHandler}/>
       <label >English</label>

       <input type="checkbox" name="nonEnglish" checked={language === "Non English"}  onChange={onChangeLanguageHandler}/>
       <label>Non English</label> <br />

       <label htmlFor="">About: </label>
       <input type="text" placeholder='Enter about you' onChange={onChangeAboutHandler}/> <br />

       {/* <h1>user entered Name is:{userName}</h1> */}
       <button onClick={handleClick} style={{backgroundColor: "yellowgreen"}}>Click me</button>
       
       
       
    </div>
  )
}

export default Input