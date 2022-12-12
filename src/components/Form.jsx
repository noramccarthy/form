import React, {useState} from 'react';
import Display from './Display';

const Form = (props) => {
    const initalFormData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const errorData = {
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    };

    const [entry, setEntry] = useState(initalFormData);

    // const formDataHandler = (e) => {

    // }

    const onSubmitHandler = (e) => {
        e.prevent.Default();
    }

    return (
        <>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8">
                    <form onSubmit={onSubmitHandler}>
                    <div>
                        <label for="firstName" class="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="First Name"
                            onChange={(e) => 
                                setEntry({...entry, firstName: e.target.value})
                            }
                        />
                    </div>

                    <div>
                        <label for="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            placeholder="Last Name"
                            onChange={(e) => 
                                setEntry({...entry, lastName: e.target.value})
                            }
                        />
                    </div>

                    <div>
                        <label for="email">
                            Email
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => 
                                setEntry({...entry, email: e.target.value})
                            }
                        />
                        <small id="email" class="form-text text-muted"
                            >We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div>
                        <label for="password">
                            Password
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => 
                                setEntry({...entry, password: e.target.value})
                        }/>
                    </div>

                    <div>
                        <label for="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={(e) => 
                                setEntry({...entry, confirmPassword: e.target.value})
                        }/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    
                    </form>
                    <Display firstName={entry.firstName} lastName={entry.lastName} email={entry.email} password={entry.password} confirmPassword={entry.confirmPassword}/>
                </div>
            </div>
        </div>
        </>
        );
    };

export default Form;