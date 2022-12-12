

const Display = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props;
    return (
        <div>
            <h1>Your Form Data:</h1>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: Password</h3>
            <h3>Confirm Password: Password</h3>
        </div>
    )
};
export default Display;