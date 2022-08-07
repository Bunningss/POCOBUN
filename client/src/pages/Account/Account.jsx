import './Account.scss';
import TitleGroup from '../../components/TitleGroup/TitleGroup';
import FormInput from '../../components/FormInput/FormInput';

const Account = () => {
  let username = "John Doe" // In a real application we fetch username from database.
  const accountInfo = [
    {
      id: 1,
      label: "Name",
      inputs: {
        name: "Name",
        type: "text",
        placeholder: username,
        required: true,
        minLength: 5,
        errorMsg: "Enter a proper name"
      }
    },
    {
      id: 2,
      label: "Email",
      inputs: {
        name: "Name",
        type: "text",
        placeholder: username,
        required: true,
        minLength: 5,
        errorMsg: "Enter a proper name"
      }
    },
    {
      id: 3,
      label: "Password",
      inputs: {
        name: "Name",
        type: "text",
        placeholder: username,
        required: true,
        minLength: 5,
        errorMsg: "Enter a proper name"
      }
    },
  ];
  return (
    <div className='account default defaultPadding'>
      <div className="accountTitle">
        <TitleGroup header={"Hi, John."} title={"Account Settings."}/>
      </div>
      <div className="accountContent">
        {
          accountInfo.map((info, index) => (
            <FormInput {...info.inputs} label={info.label} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Account