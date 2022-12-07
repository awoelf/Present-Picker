import React from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';

import {QUERY_USER, QUERY_ME} from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
    const {email: useParams} = useParams();

    const {loading, data} = useQuery(useParams ? QUERY_USER : QUERY_ME, {
        variables: {email: useParams},
    });

    const user = data?.me || data?.user || {};
    if (Auth.loggedIn() && Auth.getProfile().data.email === userParams) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user.email) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    return (
    <div>
      <div className="flex-row justify-center mb-3">
       <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;