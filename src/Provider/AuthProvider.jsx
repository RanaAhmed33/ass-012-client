import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firesbase/firebaseConfig'
import { toast } from 'react-hot-toast';



export const AuthContext = createContext({})
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [admin, setAdmin] = useState(false)
    const [teacher, setTeacher] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    useEffect(() => {
        fetch(`http://localhost:5000/teacher/${user?.email}`)
            .then(res => res.json())
            .then(data => setTeacher(data.teacher))
    }, [user?.email])

    console.log(teacher)

    // Register 
    const registerUser = (email, password, username, userUrl) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: username,
                    photoURL: userUrl
                }).then(() => {
                    const webuser = {
                        email: user?.email,
                        displayName: user?.displayName,
                        img: user?.photoURL
                    }
                    fetch(`http://localhost:5000/users/${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(webuser)
                    })
                        .then(res => res.json())
                        .then(webUserData => {
                            console.log(webUserData)
                        })
                }).catch((error) => {
                });
                setUser(user)


                alert('Success fully  Register')

            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    // Login User 
    const loginUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('Successfully Login Complete');
                setLoading(false)
            })
            .catch((error) => {
                setLoading(true)
                const errorMessage = error.message;
                setError(errorMessage)
                toast.error(errorMessage)
                setLoading(false)
            });
    }

    // onAuthChange 
    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)

            setLoading(false)
        });
        return () => {
            return unSubscribe()
        }
    }, [])

    // sing out 
    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Successfully Singout ');
        }).catch((error) => {
        });
    }

    // google Sing in 
    const googleSingIn = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;

                const webuser = {
                    email: user?.email,
                    displayName: user?.displayName,
                    img: user?.photoURL
                }
                fetch(`http://localhost:5000/users/${user?.email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(webuser)
                })
                    .then(res => res.json())
                    .then(webUserData => {
                        console.log(webUserData)
                    })
                setUser(user)
                setLoading(false)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    // Github Sing in 
    const githubSingin = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setLoading(false)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }




    const info = {
        user,
        loading,
        error,
        registerUser,
        loginUser,
        logout,
        googleSingIn,
        githubSingin,
        admin,
        teacher
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;