import { useState } from "react";

/**
 * 1. Name
 * 2. Date of Birth
 * 3. Nationality
 * 4. Self description
 */

// const Register = () => {
//   const [name, setName] = useState("Name");
//   const [birth, setBirth] = useState("");
//   const [country, setCountry] = useState("");
//   const [bio, setBio] = useState("");

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeBirth = (e) => {
//     setBirth(e.target.value);
//   };

//   const onChangeCountry = (e) => {
//     setCountry(e.target.value);
//   };

//   const onChangeBio = (e) => {
//     setBio(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} placeholder={"Name"} />
//         {name}
//       </div>

//       <div>
//         <input value={birth} type="date" onChange={onChangeBirth} />
//         {birth}
//       </div>

//       <div>
//         <select value={country} onChange={onChangeCountry}>
//           <option value="">-------</option>
//           <option value="En">England</option>
//           <option value="Sc">Scotland</option>
//           <option value="Wa">Wales</option>
//           <option>Northern Ireland</option>
//         </select>
//         {country}
//       </div>

//       <div>
//         <textarea value={bio} onChange={onChangeBio} />
//         {bio}
//       </div>
//     </div>
//   );
// };

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={inputs.name}
          onChange={onChange}
          placeholder="Name"
        />
        {inputs.name}
      </div>

      <div>
        <input
          name="birth"
          value={inputs.birth}
          type="date"
          onChange={onChange}
        />
        {inputs.birth}
      </div>

      <div>
        <select name="country" value={inputs.country} onChange={onChange}>
          <option value="">-------</option>
          <option value="En">England</option>
          <option value="Sc">Scotland</option>
          <option value="Wa">Wales</option>
          <option>Northern Ireland</option>
        </select>
        {inputs.country}
      </div>

      <div>
        <textarea name="bio" value={inputs.bio} onChange={onChange} />
        {inputs.bio}
      </div>
    </div>
  );
};
export default Register;
